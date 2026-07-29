import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Star, Clock, Flame, ShieldCheck, Lock, Sparkles } from "lucide-react";

import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { SalesNotification } from "@/components/SalesNotification";
import heroImg from "@/assets/hero-mentora.webp";
import retratoImg from "@/assets/mentora-retrato.webp";
import unhas1 from "@/assets/unhas-1.webp";
import unhas2 from "@/assets/unhas-2.webp";
import unhas3 from "@/assets/unhas-3.webp";
import unhas4 from "@/assets/unhas-4.webp";
import unhas5 from "@/assets/unhas-5.webp";
import unhas6 from "@/assets/unhas-6.webp";

const TITLE = "Curso de Unhas em Gel — Método Juliana Souza";
const DESC =
  "Aprenda alongamento em gel e fibra, nail art e encapsulado 3D com acabamento de salão premium. 6 módulos, acesso vitalício e 7 dias de garantia.";

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
  }),
  component: Index,
});

const galeria = [
  { src: unhas1, alt: "Francesinha em unha de gel formato amêndoa" },
  { src: unhas2, alt: "Unha encapsulada com flores secas e glitter" },
  { src: unhas3, alt: "Nail art autoral com linhas douradas" },
  { src: unhas4, alt: "Decoração 3D com pérolas e flores esculpidas" },
  { src: unhas5, alt: "Efeito cromado rose gold em unhas de gel" },
  { src: unhas6, alt: "Alongamento em gel sendo modelado com molde" },
];

const modulos = [
  ["01", "Gel na unha natural", "Preparo rápido, sem levantar. Aplicação impecável em menos tempo."],
  ["02", "Alongamento gel e fibra", "Molde perfeito, formato certo e unha que não quebra."],
  ["03", "Formatos que vendem", "Amêndoa, coffin, stiletto — o que a cliente pede, você entrega."],
  ["04", "Nail art de salão", "Acabamentos autorais que fazem a cliente voltar e indicar."],
  ["05", "Encapsulado 3D", "Técnicas criativas para cobrar mais pelo mesmo tempo."],
  ["06", "Venda o seu atendimento", "Precificação, agenda cheia e cliente fiel desde o primeiro atendimento."],
];

const depoimentos = [
  ["Minha primeira encapsulada ficou perfeita. A cliente disse que nunca tinha visto aquele acabamento.", "Ana Beatriz · São Paulo, SP"],
  ["Passei de R$ 45 para R$ 150 no alongamento. As clientes me procuram pelo resultado.", "Cláudia Menezes · Belo Horizonte, MG"],
  ["O passo a passo é tão claro que não tem como errar. Não perco mais tempo com vídeo solto.", "Renata Oliveira · Curitiba, PR"],
  ["Atendi 8 clientes novas no primeiro mês. O método realmente transforma.", "Fernanda Lopes · Rio de Janeiro, RJ"],
  ["Parei de ter unha descolando. Minhas clientes marcam de 3 em 3 semanas.", "Juliana Ramos · Porto Alegre, RS"],
  ["Sou manicure há 10 anos e ainda aprendi detalhes que mudaram meu atendimento.", "Patrícia Nunes · Salvador, BA"],
];

const bonus = [
  ["R$ 97 grátis", "Lista de Fornecedores", "Onde comprar gel, primer e ferramentas pagando menos e sem risco."],
  ["R$ 147 grátis", "Tabela de Preços Pronta", "Quanto cobrar em cada serviço para lucrar desde a primeira cliente."],
  ["R$ 87 grátis", "Kit de Posts para Instagram", "30 artes editáveis + legendas para atrair clientes sem pagar anúncio."],
  ["R$ 197 grátis", "Grupo VIP de Alunas", "Suporte direto, correção de trabalhos e networking com quem já vive da unha."],
];

const faq = [
  ["Preciso saber fazer unhas?", "Se você tem noções básicas de manicure, consegue acompanhar. O método é passo a passo."],
  ["Como recebo o acesso?", "Assim que o pagamento é confirmado, o acesso chega no seu e-mail. É imediato e vitalício."],
  ["Quais materiais preciso?", "Um kit básico de gel, primer, cabine e moldes. A lista de fornecedores mostra onde comprar barato."],
  ["Terei suporte?", "Sim. Você entra no grupo VIP de alunas, com correção de trabalhos e tira-dúvidas."],
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="font-display text-[26px] leading-[1.15] font-bold tracking-tight sm:text-4xl">
              Aprenda a fazer unhas em gel que <span className="text-gold">duram 30 dias</span> e
              cobre até 3x mais por atendimento
            </h1>
            <div className="relative mt-6">
              <img
                src={heroImg}
                alt="Nail designer aplicando alongamento em gel em uma cliente"
                width={743}
                height={900}
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] sm:aspect-auto sm:rounded-3xl"
              />
              <div className="absolute -bottom-4 left-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-soft)] sm:-bottom-6 sm:-left-4 sm:rounded-2xl sm:px-6 sm:py-4">
                <div className="font-display text-2xl font-bold text-gold sm:text-3xl">6</div>
                <div className="text-[10px] tracking-widest text-muted-foreground sm:text-[11px]">
                  MÓDULOS COMPLETOS
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 lg:pt-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-rose-deep sm:text-xs">
              MÉTODO JULIANA SOUZA
            </p>
            <p className="mt-2 text-[10px] tracking-[0.15em] text-muted-foreground sm:text-xs">
              NAIL DESIGNER · ESPECIALISTA EM ALONGAMENTOS EM GEL E FIBRA
            </p>
            <p className="mt-4 text-sm sm:text-base">
              Passo a passo em vídeo para você largar o preço baixo, encher a agenda e viver da
              unha — começando do zero, em casa, com um kit simples.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
                <strong className="ml-1">4,9</strong>
                <span className="text-muted-foreground">· +2.147 avaliações</span>
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <span className="size-2 rounded-full bg-rose-deep" />
                236 pessoas online agora
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex -space-x-3">
                {galeria.slice(0, 4).map((g) => (
                  <img
                    key={g.alt}
                    src={g.src}
                    alt={g.alt}
                    loading="lazy" decoding="async"
                    width={700}
                    height={700}
                    className="size-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p className="text-xs">
                <strong>+2.000 manicures</strong>{" "}
                <span className="text-muted-foreground">já dominam o método</span>
              </p>
            </div>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "Método exclusivo Juliana Souza",
                "Alongamento em gel e fibra que não descola",
                "Acabamento nível salão de luxo",
                "Nail art autoral que vende sozinha",
                "Encapsulado e decoração 3D",
                "Quanto cobrar para lucrar de verdade",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-xs">
                  <Check className="mt-0.5 size-4 shrink-0 text-rose-deep" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-gold sm:text-xs">
                <Clock className="size-4 shrink-0" /> A OFERTA DE 70% OFF EXPIRA EM
              </p>
              <div className="mt-3">
                <Countdown />
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-rose">
                <div className="h-full w-[83%] rounded-full bg-primary" />
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs">
                <Flame className="size-4 text-gold" />
                <strong>apenas 17 vagas</strong>
                <span className="text-muted-foreground">restantes nesta turma</span>
              </p>
            </div>

            <div className="mt-6">
              <CtaButton>Quero aprender por R$ 27,90</CtaButton>
            </div>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-widest text-muted-foreground">
              <span>✓ ACESSO IMEDIATO</span>
              <span>✓ 7 DIAS DE GARANTIA</span>
              <span>✓ SSL CRIPTOGRAFADO</span>
              <span>✓ CERTIFICADO</span>
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-10 sm:py-14">
        <h2 className="px-4 text-center font-display text-lg font-bold sm:text-2xl">
          O tipo de trabalho que faz a cliente indicar você
        </h2>
        <div className="mt-6 overflow-hidden sm:mt-8">
          <div className="flex w-max animate-marquee gap-3 sm:gap-4">
            {[...galeria, ...galeria].map((g, i) => (
              <img
                key={i}
                src={g.src}
                alt={g.alt}
                loading="lazy" decoding="async"
                width={700}
                height={700}
                className="size-32 rounded-xl object-cover sm:size-52 sm:rounded-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ANTES / DEPOIS */}
      <section className="bg-secondary/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-rose-deep">
            A VIRADA DE CHAVE
          </p>
          <h2 className="mt-2 font-display text-lg font-bold sm:text-2xl">
            A diferença entre cobrar R$ 40 e cobrar R$ 150
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 text-left sm:p-6">
              <p className="text-sm font-semibold text-muted-foreground">Sem o método</p>
              <ul className="mt-4 space-y-2.5 text-xs">
                {[
                  "Unha descola em 1 semana e a cliente não volta",
                  "Cobra R$ 40 e ainda sai no prejuízo",
                  "Insegurança a cada mão nova",
                  "Renda travada e agenda vazia",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <X className="size-4 shrink-0 text-muted-foreground" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-primary bg-card p-5 text-left sm:p-6">
              <p className="text-sm font-semibold text-rose-deep">Com o método</p>
              <ul className="mt-4 space-y-2.5 text-xs">
                {[
                  "Trabalho impecável que dura 30 dias",
                  "R$ 150+ por atendimento, com agenda cheia",
                  "Segurança para atender qualquer mão",
                  "Renda própria, feita em casa, no seu horário",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="size-4 shrink-0 text-rose-deep" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="mx-auto mt-8 max-w-2xl text-sm italic sm:text-lg">
            “Uma unha bem feita é cartão de visita. Quando o acabamento impressiona, a cliente
            volta e traz amiga.”
          </blockquote>
          <p className="mt-2 text-[11px] tracking-widest text-muted-foreground">JULIANA SOUZA</p>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-display text-lg font-bold sm:text-2xl">
            6 módulos, do zero ao atendimento premium
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs text-muted-foreground sm:text-sm">
            Direto ao ponto: cada módulo resolve um problema que hoje te faz perder cliente e
            dinheiro.
          </p>
          <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modulos.map(([n, titulo, desc]) => (
              <div key={n} className="rounded-2xl border border-border bg-card p-4 sm:p-6">
                <span className="font-display text-2xl font-bold text-gold">{n}</span>
                <h3 className="mt-3 text-sm font-semibold">{titulo}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-md sm:mt-10">
            <CtaButton>Quero as 6 técnicas por R$ 27,90</CtaButton>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Garantia de 7 dias · Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* SEGREDOS + MENTORA */}
      <section className="bg-secondary/50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div>
            <h2 className="font-display text-lg font-bold sm:text-2xl">O que ninguém te conta</h2>
            <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
              Os detalhes que separam quem cobra R$ 40 de quem cobra R$ 150 — e que nenhum tutorial
              gratuito mostra.
            </p>
            <ul className="mt-6 space-y-2.5 text-xs">
              {[
                "Preparo que evita levantamento em qualquer formato",
                "Escolha de gel e primer para cada tipo de unha",
                "Acabamento de salão em menos tempo",
                "Como cobrar mais sem perder cliente",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Sparkles className="size-4 shrink-0 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-6 px-4 sm:mt-14 sm:gap-8 sm:px-6 md:grid-cols-2">
          <img
            src={retratoImg}
            alt="Retrato de Juliana Souza em seu estúdio de nail design"
            loading="lazy"
            decoding="async"
            width={814}
            height={900}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)] sm:rounded-3xl"
          />
          <div>
            <h2 className="font-display text-lg font-bold sm:text-2xl">Quem é Juliana Souza</h2>
            <div className="mt-4 space-y-3 text-xs text-muted-foreground sm:text-sm">
              <p>
                Sou Juliana Souza, Nail Designer desde 2011. Especializei em alongamentos em gel e
                fibra porque vi que era ali que a maioria errava — e onde dava para cobrar mais.
              </p>
              <p>
                Hoje levo técnicas internacionais para um acabamento de requinte. Atendo clientes de
                referência dentro e fora do Brasil.
              </p>
              <p>
                Criei este método para quem quer aprender de verdade, sem perder tempo, e começar a
                faturar com a unha.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Desde 2011",
                "Clientes de referência",
                "Atendimento internacional",
                "Método Juliana Souza",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1 text-[10px] font-semibold tracking-wide text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              ["+2.147", "alunas ativas"],
              ["4,9/5", "nota das alunas"],
              ["97%", "concluem o curso"],
              ["+14 anos", "de experiência"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl bg-card p-3 text-center sm:p-4">
                <div className="font-display text-xl font-bold text-gold">{v}</div>
                <div className="text-[11px] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-display text-lg font-bold sm:text-2xl">
            4,9 de 5 · o que dizem as alunas
          </h2>
          <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map(([texto, autor]) => (
              <figure key={autor} className="rounded-2xl border border-border bg-card p-4 sm:p-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-3 text-xs italic">“{texto}”</blockquote>
                <figcaption className="mt-4 text-[11px] text-muted-foreground">
                  {autor} · Compra verificada
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-md sm:mt-10">
            <CtaButton>Quero esse resultado por R$ 27,90</CtaButton>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              +2.000 alunas já cobram mais pelo próprio trabalho
            </p>
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="bg-secondary/50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-rose-deep">
            BÔNUS EXCLUSIVOS DESTA TURMA
          </p>
          <h2 className="mt-2 font-display text-lg font-bold sm:text-2xl">
            R$ 528 em bônus liberados hoje
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-muted-foreground sm:text-sm">
            Saem do ar quando a turma fechar. Entrando agora, você leva tudo sem pagar nada a mais.
          </p>
          <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            {bonus.map(([valor, titulo, desc]) => (
              <div key={titulo} className="rounded-2xl border border-border bg-card p-4 text-left sm:p-6">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                  {valor}
                </span>
                <h3 className="mt-4 text-sm font-semibold">{titulo}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-4xl gap-4 px-4 sm:gap-5 sm:px-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary bg-card p-5 sm:p-6">
            <h2 className="font-display text-lg font-bold">É para você se…</h2>
            <ul className="mt-4 space-y-2.5 text-xs">
              {[
                "Faz unha há tempo, mas cobra barato e quer valorizar o trabalho",
                "Perde horas com tutorial solto e ainda erra o acabamento",
                "Tem medo de estragar a unha da cliente e perder a confiança",
                "Quer renda extra trabalhando em casa, no seu horário",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <Check className="size-4 shrink-0 text-rose-deep" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h2 className="font-display text-lg font-bold">Não é para você se…</h2>
            <ul className="mt-4 space-y-2.5 text-xs">
              {[
                "Quer resultado sem praticar",
                "Acredita em dinheiro fácil sem entregar qualidade",
                "Não vai assistir às aulas nem seguir o passo a passo",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <X className="size-4 shrink-0 text-muted-foreground" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-12 sm:py-16" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-rose-deep">
            OFERTA DE LANÇAMENTO
          </p>
          <h2 className="mt-2 font-display text-lg font-bold sm:text-2xl">
            Menos que um esmalte. O primeiro atendimento já paga o curso.
          </h2>
          <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:mt-8 sm:rounded-3xl sm:p-7">
            <p className="text-xs text-muted-foreground">
              Curso Completo de Unhas em Gel — Método Juliana Souza
            </p>
            <p className="mt-4 text-xs text-muted-foreground line-through">De R$ 1.025</p>
            <p className="font-display text-3xl font-bold text-rose-deep sm:text-4xl">R$ 27,90</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              pagamento único · acesso vitalício · sem mensalidade
            </p>

            <ul className="mt-6 space-y-2.5 text-left text-[11px] sm:text-xs">
              {[
                ["6 módulos com técnicas completas", "R$ 497"],
                ["Aulas de encapsulado e nail art", "incluso"],
                ["Lista de fornecedores confiáveis", "R$ 97"],
                ["Tabela de preços pronta para usar", "R$ 147"],
                ["Kit de posts para Instagram", "R$ 87"],
                ["Grupo VIP de alunas + certificado", "R$ 197"],
              ].map(([item, valor]) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-3 border-b border-border pb-2"
                >
                  <span className="flex min-w-0 gap-2 text-left">
                    <Check className="size-4 shrink-0 text-rose-deep" />
                    {item}
                  </span>
                  <span className="shrink-0 text-muted-foreground">{valor}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[11px] tracking-widest text-muted-foreground">
              O PREÇO VOLTA PARA R$ 497 EM
            </p>
            <div className="mt-3 flex justify-center">
              <Countdown compact />
            </div>

            <div className="mt-6">
              <CtaButton>Quero acesso imediato por R$ 27,90</CtaButton>
            </div>
            <p className="mt-3 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
              <Lock className="size-3" /> Compra segura SSL · Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <ShieldCheck className="mx-auto size-10 text-gold sm:size-12" />
          <p className="mt-4 text-[11px] font-semibold tracking-[0.2em] text-rose-deep">
            7 DIAS DE GARANTIA — RISCO ZERO
          </p>
          <h2 className="mt-2 font-display text-lg font-bold sm:text-2xl">O risco é todo meu</h2>
          <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
            Teste por 7 dias. Se não fizer sentido para você, devolvo 100% do valor — sem perguntas
            e sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-12 pb-24 sm:py-16 sm:pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center font-display text-lg font-bold sm:text-2xl">
            Perguntas frequentes
          </h2>
          <div className="mt-6 space-y-3 sm:mt-8">
            {faq.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-border bg-card p-4 sm:p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold">{q}</summary>
                <p className="mt-3 text-xs text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-md sm:mt-10">
            <CtaButton>Garantir minha vaga por R$ 27,90</CtaButton>
          </div>
        </div>
      </section>

      <footer className="bg-cocoa px-4 pb-24 pt-8 text-center text-[11px] text-background/70 sm:pb-8">
        Método Juliana Souza · Todos os direitos reservados
      </footer>

      <SalesNotification />

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0">
            <p className="text-[10px] text-muted-foreground line-through">R$ 1.025</p>
            <p className="font-display text-base font-bold leading-none text-rose-deep">R$ 27,90</p>
          </div>
          <CtaButton className="flex-1">Quero agora</CtaButton>
        </div>
      </div>
    </main>
  );
}
