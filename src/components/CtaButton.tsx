import { ArrowRight } from "lucide-react";

export const CHECKOUT_URL = "https://pay.wiapy.com/LZ-eef2wJUQY";

// Versão simples (R$ 9,90) — troque pelo link do produto simples na plataforma de pagamento
export const CHECKOUT_URL_SIMPLES = "https://pay.wiapy.com/LZ-eef2wJUQY";

// Oferta especial do pop-up (R$ 19,90) — troque pelo link do produto promocional
export const CHECKOUT_URL_PROMO = "https://pay.wiapy.com/LZ-eef2wJUQY";

export function CtaButton({
  children,
  className = "",
  href = CHECKOUT_URL,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] ${className}`}
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  );
}