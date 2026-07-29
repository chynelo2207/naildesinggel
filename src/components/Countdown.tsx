import { useEffect, useState } from "react";

const TOTAL = 3 * 3600 + 42 * 60 + 16;

export function useCountdown() {
  const [left, setLeft] = useState(TOTAL);
  useEffect(() => {
    const id = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : TOTAL)), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(left / 3600)).padStart(2, "0");
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return { h, m, s };
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const { h, m, s } = useCountdown();
  const parts = [
    { v: h, l: "HORAS" },
    { v: m, l: "MIN" },
    { v: s, l: "SEG" },
  ];
  return (
    <div className="flex gap-1.5 sm:gap-2">
      {parts.map((p) => (
        <div
          key={p.l}
          className={`min-w-[52px] rounded-xl bg-cocoa px-2.5 text-center text-primary-foreground sm:px-3 ${compact ? "py-1.5" : "py-2"}`}
        >
          <div className="font-display text-xl font-bold text-rose sm:text-2xl">{p.v}</div>
          <div className="text-[9px] tracking-widest text-background/70 sm:text-[10px]">{p.l}</div>
        </div>
      ))}
    </div>
  );
}