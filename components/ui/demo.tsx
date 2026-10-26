import { GlowCard } from "@/components/ui/spotlight-card";

export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard glowColor="gold" />
      <GlowCard glowColor="gold" />
      <GlowCard glowColor="gold" />
    </div>
  );
}

export default Default;
