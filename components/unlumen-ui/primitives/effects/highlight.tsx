"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useId,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface HighlightBounds {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface HighlightContextValue {
  setActiveItem: (id: string, element: HTMLElement | null) => void;
  clearActiveItem: (id: string) => void;
  activeId: string | null;
  mode?: "parent" | "standalone";
  controlledItems?: boolean;
}

const HighlightContext = createContext<HighlightContextValue | null>(null);

export interface HighlightProps {
  children: ReactNode;
  mode?: "parent" | "standalone";
  controlledItems?: boolean;
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  containerClassName?: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  children,
  mode = "parent",
  controlledItems = false,
  hover = true,
  className,
  style,
  containerClassName,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [bounds, setBounds] = useState<HighlightBounds | null>(null);

  const setActiveItem = useCallback(
    (id: string, element: HTMLElement | null) => {
      if (!element || !containerRef.current) {
        return;
      }
      setActiveId(id);

      const containerRect = containerRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      setBounds({
        left: elementRect.left - containerRect.left,
        top: elementRect.top - containerRect.top,
        width: elementRect.width,
        height: elementRect.height,
      });
    },
    [],
  );

  const clearActiveItem = useCallback((id: string) => {
    setActiveId((current) => {
      if (current === id) {
        setBounds(null);
        return null;
      }
      return current;
    });
  }, []);

  const handlePointerLeave = () => {
    if (hover && !controlledItems) {
      setActiveId(null);
      setBounds(null);
    }
  };

  return (
    <HighlightContext.Provider
      value={{
        setActiveItem,
        clearActiveItem,
        activeId,
        mode,
        controlledItems,
      }}
    >
      <div
        ref={containerRef}
        className={cn("relative", containerClassName)}
        onPointerLeave={handlePointerLeave}
      >
        <AnimatePresence>
          {bounds && (
            <motion.div
              layoutId={mode === "parent" ? undefined : "highlight-pill"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: 1,
                scale: 1,
                left: bounds.left,
                top: bounds.top,
                width: bounds.width,
                height: bounds.height,
              }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 32,
              }}
              className={cn("absolute pointer-events-none", className)}
              style={style}
            />
          )}
        </AnimatePresence>
        {children}
      </div>
    </HighlightContext.Provider>
  );
};

export interface HighlightItemProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const HighlightItem = React.forwardRef<HTMLElement, HighlightItemProps>(
  ({ children, asChild = false, className, ...props }, forwardedRef) => {
    const id = useId();
    const context = useContext(HighlightContext);
    const localRef = useRef<HTMLElement | null>(null);

    const setRef = useCallback(
      (node: HTMLElement | null) => {
        localRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      },
      [forwardedRef],
    );

    const handlePointerEnter = (e: React.PointerEvent) => {
      if (context && localRef.current) {
        context.setActiveItem(id, localRef.current);
      }
      // Pass through original onPointerEnter if any
      if (React.isValidElement(children) && children.props.onPointerEnter) {
        children.props.onPointerEnter(e);
      }
    };

    const handleFocus = (e: React.FocusEvent) => {
      if (context && localRef.current) {
        context.setActiveItem(id, localRef.current);
      }
      if (React.isValidElement(children) && children.props.onFocus) {
        children.props.onFocus(e);
      }
    };

    const handlePointerLeave = (e: React.PointerEvent) => {
      if (context && !context.controlledItems) {
        context.clearActiveItem(id);
      }
      if (React.isValidElement(children) && children.props.onPointerLeave) {
        children.props.onPointerLeave(e);
      }
    };

    if (asChild && React.isValidElement(children)) {
      return (
        <Slot
          ref={setRef}
          onPointerEnter={handlePointerEnter}
          onFocus={handleFocus}
          onPointerLeave={handlePointerLeave}
          className={className}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <div
        ref={setRef}
        onPointerEnter={handlePointerEnter}
        onFocus={handleFocus}
        onPointerLeave={handlePointerLeave}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  },
);

HighlightItem.displayName = "HighlightItem";

export default Highlight;
