"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-lg border border-border bg-card/50 flex items-center justify-center opacity-70 ${className}`}
        aria-hidden="true"
      >
        <span className="w-4 h-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-9 h-9 rounded-lg border border-border bg-card/60 hover:bg-card hover:border-ecell-gold/40 text-foreground transition-all duration-200 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ecell-gold ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-ecell-gold transition-transform hover:rotate-45 duration-300" />
      ) : (
        <Moon className="h-4 w-4 text-ecell-gold-dark transition-transform hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
