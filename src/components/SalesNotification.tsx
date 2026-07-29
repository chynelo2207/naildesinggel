import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const compras = [
  ["Camila S.", "São Paulo, SP"],
  ["Vanessa M.", "Belo Horizonte, MG"],
  ["Aline R.", "Curitiba, PR"],
  ["Priscila T.", "Rio de Janeiro, RJ"],
  ["Bruna L.", "Fortaleza, CE"],
  ["Tatiane P.", "Porto Alegre, RS"],
  ["Larissa F.", "Salvador, BA"],
  ["Jéssica A.", "Goiânia, GO"],
];

export function SalesNotification() {
  const [i, setI] = useState(0);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const ciclo = () => {
      setVisivel(true);
      t = setTimeout(() => {
        setVisivel(false);
        t = setTimeout(() => {
          setI((v) => (v + 1) % compras.length);
          ciclo();
        }, 6000);
      }, 5000);
    };
    t = setTimeout(ciclo, 7000);
    return () => clearTimeout(t);
  }, []);

  const [nome, cidade] = compras[i];

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-20 left-3 z-40 max-w-[82vw] transition-all duration-500 md:bottom-5 md:left-5 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2.5 rounded-full border border-border bg-card/95 py-2 pl-2 pr-4 shadow-[var(--shadow-soft)] backdrop-blur">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary">
          <Check className="size-4 text-primary-foreground" />
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[11px] font-semibold">{nome} acabou de entrar</p>
          <p className="truncate text-[10px] text-muted-foreground">
            {cidade} · há {2 + (i % 7)} minutos
          </p>
        </div>
      </div>
    </div>
  );
}