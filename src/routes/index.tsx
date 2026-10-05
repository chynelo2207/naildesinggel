import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Lock, ShieldCheck, Zap } from "lucide-react";

import { CHECKOUT_URL, CHECKOUT_URL_SIMPLES, CHECKOUT_URL_PROMO } from "@/components/CtaButton";
import { SalesNotification } from "@/components/SalesNotification";
import heroImg from "@/assets/hero-mentora.webp";
import cliente1 from "@/assets/cliente-1.webp";
import cliente1Original from "@/assets/cliente-1-original.webp";
import cliente2 from "@/assets/cliente-2.webp";
import cliente3 from "@/assets/cliente-3.webp";
import cliente4 from "@/assets/cliente-4.webp";
import cliente5 from "@/assets/cliente-5.webp";
import cliente6 from "@/assets/cliente-6.webp";
import cliente7 from "@/assets/cliente-7.webp";
import cliente8 from "@/assets/cliente-8.webp";

const TITLE = "Método F1 Express | Aprenda Molde F1 passo a passo";
const DESC =
  "Curso + manual visual de Molde F1: preparação, escolha do molde, aplicação, estrutura e acabamento. De R$97 por R$37,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: heroImg, fetchPriority: "high" }],
  }),
  component: Index,
});

const resultados = [
  { src: cliente1Original, label: "Amêndoa nude" },
  { src: cliente3, label: "Degradê" },
  { src: cliente6, label: "Natural" },
  { src: cliente4, label: "Nail art" },
  { src: cliente5, label: "Encapsulada" },
  { src: cliente2, label: "Stiletto" },
  { src: cliente7, label: "Francesinha" },
  { src: cliente8, label: "Quadrada" },
];

const dores = [
  { icon: "⏱️", t: "Demora no atendimento", d: "Uma única cliente ocupa boa parte do seu dia." },
  { icon: "💅", t: "Muito lixamento e retrabalho", d: "Você perde tempo tentando acertar estrutura e acabamento." },
  { icon: "⚠️", t: "Descolamento e acabamento grosso", d: "O resultado não fica como você gostaria." },
];

const passos = [
  { t: "Prepare corretamente", d: "Preparação para melhorar aderência e durabilidade." },
  { t: "Escolha o Molde F1", d: "Aprenda encaixe e tamanho correto." },
  { t: "Faça a construção", d: "Quantidade e distribuição do produto." },
  { t: "Estruture", d: "Curvatura, resistência e ponto de tensão." },
  { t: "Finalize", d: "Acabamento fino e profissional." },
  { t: "Ganhe velocidade", d: "Organize o processo para diminuir seu tempo de mesa." },
];

const recebe = [
  { icon: "🎓", t: "Curso + Manual Visual", d: "Cada etapa do Molde F1 explicada com imagens." },
  { icon: "🆘", t: "Guia SOS F1", d: "Os erros mais comuns e como corrigir." },
  { icon: "✅", t: "Checklist F1 Express", d: "Confira cada etapa antes de seguir." },
  { icon: "📐", t: "Guia de formatos", d: "Amêndoa, quadrada, stiletto e mais." },
  { icon: "📂", t: "Materiais complementares" },
];


const faq = [
  { q: "Preciso já trabalhar com unhas?", a: "Não. O método começa do zero. Se você já atende, vai corrigir erros e ganhar velocidade." },
  { q: "Preciso comprar muitos materiais?", a: "Não. Você começa com um kit básico; mostramos exatamente o que comprar e onde." },
  { q: "O acesso é imediato?", a: "Sim. Assim que o pagamento é aprovado, você recebe o acesso no seu e-mail." },
  { q: "Por quanto tempo tenho acesso?", a: "Acesso vitalício. Assista quantas vezes quiser, no seu ritmo." },
    { q: "Como recebo o curso?", a: "Pela plataforma de aulas, direto no celular ou computador, com login enviado por e-mail." },
];

function Cta({ children, href = "#oferta", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`flex min-h-14 w-full items-center justify-center rounded-xl bg-primary px-5 text-center text-[17px] font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  const [showBar, setShowBar] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="mx-auto max-w-xl overflow-x-hidden pb-24 text-[16px] leading-relaxed">
      {/* 1. PROMESSA */}
      <section className="px-5 pb-10 pt-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-rose-deep">MÉTODO F1 EXPRESS</p>
        <h1 className="mt-4 text-[34px] font-extrabold leading-[1.1] sm:text-[38px]">
          Aprenda <span className="text-rose-deep">Molde F1</span> passo a passo
        </h1>
        <p className="mt-4 text-[18px] text-muted-foreground">
          Um método visual e prático para entender preparação, escolha do molde, aplicação, estrutura e acabamento, mesmo se você estiver começando.
        </p>
        <img
          src={heroImg}
          alt="Alongamento em Molde F1 com acabamento profissional"
          width={755}
          height={900}
          className="mt-6 aspect-[4/5] w-full rounded-2xl object-cover"
          fetchPriority="high"
        />
        <p className="mt-6 text-muted-foreground">
          De <s>R$97</s>
        </p>
        <p className="text-[22px] font-bold">
          Por apenas <span className="text-[34px] text-rose-deep">R$37,90</span>
        </p>
        <Cta className="mt-4">Quero aprender Molde F1</Cta>
        <p className="mt-3 text-sm text-muted-foreground">🔓 Acesso imediato • 🛡️ Garantia de 7 dias</p>
      </section>

      {/* 1b. O QUE VAI APRENDER */}
      <section className="px-5 pb-12">
        <p className="text-center text-xs font-bold tracking-[0.25em] text-gold">VEJA O QUE VOCÊ VAI APRENDER</p>
        <div className="mt-6 space-y-6">
          {[
            { img: cliente6, t: "01 · Escolha do molde", d: "Aprenda a identificar o tamanho e observar o encaixe." },
            { img: cliente3, t: "02 · Aplicação passo a passo", d: "Veja visualmente cada etapa da construção." },
            { img: cliente1Original, t: "03 · Acabamento", d: "Entenda o que observar para chegar a um resultado fino e harmonioso." },
          ].map((x) => (
            <div key={x.t}>
              <img src={x.img} alt={x.t} width={700} height={700} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <p className="mt-3 text-[19px] font-bold">{x.t}</p>
              <p className="text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. DOR */}
      <section className="bg-accent px-5 py-12 text-accent-foreground">
        <h2 className="text-center text-[28px] font-extrabold leading-tight">Você ainda leva horas para fazer um alongamento?</h2>
        <div className="mt-8 space-y-4">
          {dores.map((d) => (
            <div key={d.t} className="rounded-xl bg-accent-foreground/10 p-5">
              <p className="text-[19px] font-bold">
                {d.icon} {d.t}
              </p>
              <p className="mt-1 opacity-85">{d.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[20px] font-bold text-rose">Existe uma maneira mais simples de construir.</p>
      </section>

      {/* 3. MECANISMO */}
      <section className="px-5 py-12">
        <img src={cliente1} alt="Unhas construídas com Molde F1" width={1110} height={1400} loading="lazy" decoding="async" className="aspect-square w-full rounded-2xl object-cover" />
        <p className="mt-8 text-xs font-bold tracking-[0.25em] text-gold">CONHEÇA A TÉCNICA</p>
        <h2 className="mt-2 text-[30px] font-extrabold">Molde F1</h2>
        <p className="mt-3 text-[17px] text-muted-foreground">
          O molde ajuda você a construir formato, estrutura e acabamento de maneira muito mais prática.
        </p>
        <ul className="mt-5 space-y-3 text-[18px] font-semibold">
          {["Mais velocidade", "Menos retrabalho", "Acabamento mais fino", "Processo mais padronizado"].map((b) => (
            <li key={b} className="flex items-center gap-3">
              <Check className="size-6 shrink-0 text-primary" strokeWidth={3} /> {b}
            </li>
          ))}
        </ul>
        <Cta className="mt-7">Quero dominar o F1</Cta>
      </section>

      {/* 4. RESULTADOS */}
      <section className="bg-secondary py-12">
        <h2 className="px-5 text-[28px] font-extrabold leading-tight">Veja o acabamento que você pode aprender a fazer</h2>
        <p className="mt-2 px-5 text-sm text-muted-foreground">Deslize para o lado →</p>
        <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none]">
          {resultados.map((r) => (
            <figure key={r.label} className="w-[72%] shrink-0 snap-center">
              <img src={r.src} alt={`Alongamento ${r.label}`} width={700} height={700} loading="lazy" decoding="async" className="aspect-[3/4] w-full rounded-xl object-cover" />
              <figcaption className="mt-2 text-center font-bold">{r.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 5. COMO FUNCIONA */}
      <section className="px-5 py-12">
        <h2 className="text-center text-[30px] font-extrabold">Do zero ao acabamento</h2>
        <ol className="mt-8 space-y-3">
          {passos.map((p, i) => (
            <li key={p.t} className="flex gap-4 rounded-xl border bg-card p-5">
              <span className="font-display text-[26px] font-extrabold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-[19px] font-bold">{p.t}</p>
                <p className="text-muted-foreground">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 6. POSICIONAMENTO */}
      <section className="px-5 pb-12 text-center">
        <h2 className="text-[26px] font-extrabold leading-tight">Chega de vídeos rápidos e tutoriais soltos</h2>
        <p className="mt-3 text-[17px] text-muted-foreground">
          Abra exatamente na etapa em que você está e veja o que fazer, o que observar e os erros mais comuns.
        </p>
      </section>

      {/* 7. O QUE RECEBE */}
      <section className="bg-accent px-5 py-12 text-accent-foreground">
        <h2 className="text-center text-[28px] font-extrabold leading-tight">Tudo que você precisa para começar</h2>
        <ul className="mt-8 divide-y divide-accent-foreground/15">
          {recebe.map((r) => (
            <li key={r.t} className="flex gap-4 py-4">
              <span className="text-2xl">{r.icon}</span>
              <div>
                <p className="text-[18px] font-bold">{r.t}</p>
                {r.d && <p className="opacity-80">{r.d}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. PROVA SOCIAL */}
      <section className="px-5 py-12">
        <h2 className="text-center text-[28px] font-extrabold leading-tight">Trabalhos reais feitos com o método</h2>
        <div className="mt-6 grid grid-cols-2 gap-2">
          {[cliente2, cliente5, cliente7, cliente8].map((s, i) => (
            <img key={i} src={s} alt="Trabalho real de aluna" width={700} height={700} loading="lazy" decoding="async" className="aspect-square w-full rounded-xl object-cover" />
          ))}
        </div>
      </section>

      {/* 9. OFERTA */}
      <section id="oferta" className="scroll-mt-4 bg-accent px-5 py-14 text-center text-accent-foreground">
        <p className="text-xs font-bold tracking-[0.25em] text-rose">ACESSO IMEDIATO</p>
        <h2 className="mt-3 text-[32px] font-extrabold">Método F1 Express</h2>

        <div className="mt-8 space-y-8 text-left">
          {/* Plano básico */}
          <div className="relative rounded-2xl border-2 border-dashed border-primary/60 bg-card p-5 text-accent-foreground">
            <span className="absolute -top-3 left-5 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
              Para começar hoje
            </span>
            <p className="mt-2 text-[18px] font-bold">F1 Express Básico</p>
            <p className="mt-1 text-sm opacity-80">Curso + Manual Visual + todos os bônus + acesso vitalício</p>
            <p className="mt-3 font-display text-[32px] font-extrabold leading-none">R$9,90</p>
            <button
              onClick={() => setShowUpsell(true)}
              className="mt-4 flex min-h-14 w-full items-center justify-center rounded-xl border-2 border-primary text-[15px] font-bold uppercase tracking-wide text-primary transition-transform active:scale-[0.98]"
            >
              Quero o básico
            </button>
          </div>

          {/* Plano avançado */}
          <div className="relative rounded-2xl border-2 border-gold bg-accent-foreground/5 p-5">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
              Mais escolhido
            </span>
            <p className="text-[18px] font-bold">Método F1 Express</p>
            <p className="mt-1 text-sm font-semibold opacity-80">Curso completo + bônus</p>
            <ul className="mt-4 space-y-2">
              {[
                "Molde F1 passo a passo",
                "Técnica para reduzir o tempo de atendimento",
                "Preparação para evitar descolamento",
                "Acabamento fino e natural",
                "Módulo bônus de Fibra de Vidro",
                "Tabela de preços e lista de fornecedores",
                "Certificado",
                "Acesso vitalício",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-[15px]">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={3} /> {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm opacity-70">
              <s>R$97</s>
            </p>
            <p className="font-display text-[40px] font-extrabold leading-none text-gold">R$37,90</p>
            <Cta href={CHECKOUT_URL} className="mt-4">Quero acessar agora</Cta>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-4 text-sm opacity-90">
          <span className="flex items-center gap-1"><Lock className="size-4" /> Compra segura</span>
          <span className="flex items-center gap-1"><Zap className="size-4" /> Acesso imediato</span>
        </div>
      </section>

      {/* 10. GARANTIA */}
      <section className="px-5 py-12 text-center">
        <ShieldCheck className="mx-auto size-14 text-gold" />
        <h2 className="mt-3 text-[28px] font-extrabold">Você tem 7 dias para experimentar</h2>
        <p className="mt-3 text-[17px] text-muted-foreground">
          Assista às aulas, teste o método. Se não for para você, peça o reembolso em até 7 dias e devolvemos 100% do valor. Sem perguntas.
        </p>
        <Cta className="mt-6">Quero dominar o Molde F1</Cta>
      </section>

      {/* 11. FAQ */}
      <section className="px-5 pb-12">
        <h2 className="text-center text-[28px] font-extrabold">Dúvidas frequentes</h2>
        <div className="mt-6 space-y-2">
          {faq.map((f, i) => (
            <div key={f.q} className="rounded-xl border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 p-4 text-left text-[17px] font-bold">
                {f.q}
                <ChevronDown className={`size-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-4 pb-4 text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="px-5 pb-6 text-center text-xs text-muted-foreground">© Método F1 Express</footer>

      {/* CTA FIXO */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur transition-transform ${showBar ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="mx-auto flex h-16 max-w-xl items-center gap-3 px-4">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-bold">Método F1 Express</p>
            <p className="truncate text-xs font-semibold text-muted-foreground">Toque para ver as ofertas</p>
          </div>
          <a href="#oferta" className="flex h-12 w-[58%] items-center justify-center rounded-xl bg-primary font-bold uppercase text-primary-foreground">
            Quero agora
          </a>
        </div>
      </div>

      <SalesNotification />

      {/* POP-UP UPSELL */}
      {showUpsell && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center" onClick={() => setShowUpsell(false)}>
          <div
            className="w-full max-w-md rounded-2xl bg-card p-6 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-deep">Espera! Oferta única</p>
            <h3 className="mt-3 text-[24px] font-extrabold leading-tight">
              Leve o F1 Express <span className="text-rose-deep">Avançado</span> por apenas
            </h3>
            <p className="mt-2 text-lg text-muted-foreground">
              <s>R$37,90</s>
            </p>
            <p className="font-display text-[48px] font-extrabold leading-none text-rose-deep">R$19,90</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Curso + Manual Visual + todos os bônus + acesso vitalício. Só nesta tela.
            </p>
            <a
              href={CHECKOUT_URL_PROMO}
              className="mt-5 flex min-h-14 w-full items-center justify-center rounded-xl bg-primary text-[16px] font-bold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform active:scale-[0.98]"
            >
              Sim, quero o avançado por R$19,90
            </a>
            <a
              href={CHECKOUT_URL_SIMPLES}
              className="mt-3 block text-sm font-semibold text-muted-foreground underline underline-offset-2"
            >
              Não, quero só o básico por R$9,90
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
