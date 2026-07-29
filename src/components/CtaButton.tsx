import { ArrowRight } from "lucide-react";

export const CHECKOUT_URL = "https://pay.cakto.com.br/pj5ktmj_1008708";

export function CtaButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] ${className}`}
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  );
}