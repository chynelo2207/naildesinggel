import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Star, Clock, Flame, ShieldCheck, Lock, Sparkles } from "lucide-react";

import { Countdown } from "@/components/Countdown";
import { CtaButton } from "@/components/CtaButton";
import { SalesNotification } from "@/components/SalesNotification";
import heroImg from "@/assets/hero-mentora.webp";
import retratoImg from "@/assets/mentora-retrato.webp";
import cliente1 from "@/assets/cliente-1.webp";
import cliente2 from "@/assets/cliente-2.webp";
import cliente3 from "@/assets/cliente-3.webp";
import cliente4 from "@/assets/cliente-4.webp";
import cliente5 from "@/assets/cliente-5.webp";
import cliente6 from "@/assets/cliente-6.webp";
import cliente7 from "@/assets/cliente-7.webp";
import cliente8 from "@/assets/cliente-8.webp";

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
  { src: cliente1, alt: "Unhas amêndoa em gel nude cremoso com brilho espelhado" },
  { src: cliente2, alt: "Unhas stiletto com degradê azul e verde neon" },
  { src: cliente3, alt: "Unhas amêndoa com degradê pink e laranja" },
  { src: cliente4, alt: "Nail art verde com efeito textura e brilho" },
  { src: cliente5, alt: "Unhas longas com francesinha branca e efeito tartaruga" },
  { src: cliente6, alt: "Unhas stiletto em verde pistache com acabamento espelhado" },
  { src: cliente7, alt: "Francesinha amarela com flor 3D e detalhe dourado" },
  { src: cliente8, alt: "Unhas amêndoa em amarelo baunilha com brilho glazed" },
];

const modulos = [
  ["01", "Gel na unha natural", "O preparo que acaba com levantamento — a cliente volta porque a unha aguenta.", "Essencial para quem começa · corrige erro antigo de quem já atende"],
  ["02", "Alongamento gel e fibra", "Molde certo na primeira tentativa. Unha firme, leve e sem quebrar.", ""],
  ["03", "Formatos que vendem", "Amêndoa, coffin, stiletto: a cliente mostra a foto e você entrega igual.", ""],
  ["04", "Nail art de salão", "O acabamento que vira story da cliente e traz amiga sem você pedir.", ""],
  ["05", "Encapsulado 3D", "O serviço mais caro da tabela, feito no mesmo tempo do básico.", "O upgrade que quem já atende busca"],
  ["06", "Venda o seu atendimento", "Como subir o preço e a cliente agradecer.", "Monte sua primeira tabela ou reajuste a que já usa"],
];

const depoimentosZero = [
  ["Nunca tinha feito uma unha na vida. Hoje atendo 6 clientes fixas e todas indicadas.", "Ana Beatriz · São Paulo, SP"],
  ["Tinha medo de estragar a mão de alguém. Fiz a primeira unha ainda na primeira semana de curso.", "Renata Oliveira · Curitiba, PR"],
];

const depoimentosPro = [
  ["Passei de R$ 45 para R$ 150 no alongamento. As clientes me procuram pelo resultado.", "Cláudia Menezes · Belo Horizonte, MG"],
  ["Sou manicure há 10 anos e ainda aprendi detalhes que mudaram meu atendimento.", "Patrícia Nunes · Salvador, BA"],
  ["Parei de ter unha descolando. Minhas clientes marcam de 3 em 3 semanas.", "Juliana Ramos · Porto Alegre, RS"],
  ["Atendi 8 clientes novas no primeiro mês. O método realmente transforma.", "Fernanda Lopes · Rio de Janeiro, RJ"],
];

const bonus = [
  ["R$ 97 grátis", "Lista de Fornecedores", "Essencial se você ainda não sabe onde comprar — e economiza dinheiro se você já compra errado."],
  ["R$ 147 grátis", "Tabela de Preços Pronta", "Sua primeira tabela, ou o reajuste que faltava."],
  ["R$ 87 grátis", "Kit de Posts para Instagram", "Quem está começando divulga do zero; quem já atende, atualiza o feed."],
  ["R$ 197 grátis", "Grupo VIP de Alunas", "Corrijo sua unha por foto, seja a primeira ou a centésima que você faz."],
];

const faq = [
  ["Nunca fiz alongamento. Consigo?", "Sim. Começa do zero, com a câmera em cima da mão, cada movimento explicado. Alunas fazem a primeira unha ainda na primeira semana."],
  ["Já atendo há anos, esse curso ainda vale pra mim?", "Vale — principalmente. A maioria das alunas que já atendia veio corrigir um erro que carregava há anos (levantamento, molde torto) ou aprender o que ainda não sabia (encapsulado, precificação). É comum aluna experiente dizer que aprendeu mais aqui do que esperava."],
  ["Quando eu recebo?", "Na hora. Pagou, o acesso cai no seu e-mail em minutos — e é vitalício, sem mensalidade."],
  ["Preciso de muito material?", "Não. Um kit básico resolve, e a lista de fornecedores mostra onde comprar pagando bem menos."],
  ["E se eu travar no meio?", "Você manda foto no grupo VIP e eu mesma corrijo. Ninguém fica sozinha, do primeiro ao último módulo."],
  ["E se eu não gostar?", "Você tem 7 dias para pedir o dinheiro de volta. Sem pergunta, sem burocracia. O risco é meu."],
];

const perfis = [
  [
    "Se você está começando agora:",
    [
      "Nunca encostou num gel e tem medo de estragar a mão de alguém",
      "Quer uma renda própria, em casa, sem precisar de experiência prévia",
      "Prefere aprender certo da primeira vez, sem gambiarra de tutorial solto",
    ],
  ],
  [
    "Se você já atende:",
    [
      "Sabe fazer unha, mas ainda cobra R$ 40-60 e sente que vale mais",
      "Já perdeu cliente por descolamento e não sabe exatamente onde erra",
      "Quer add serviços de maior valor (encapsulado, nail art) sem fazer outro curso do zero",
    ],
  ],
] as const;

function Index() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <section className="relative" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="font-display text-[26px] leading-[1.15] font-bold tracking-tight sm:text-4xl">
              Faça unhas em gel que <span className="text-gold">duram 30 dias</span> — e cobre 3x
              mais já no próximo atendimento
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
            <p className="mt-3 text-sm sm:text-base">
              Do zero, em casa, com um kit simples. O passo a passo que já colocou +2.000 manicures
              cobrando preço de salão.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <span className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" />
                ))}
                <strong className="ml-1">4,9</strong>
                <span className="text-muted-foreground">· +2.147 avaliações</span>
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
                "Alongamento que não descola nem na cliente mais difícil",
                "Acabamento de salão premium desde a primeira mão",
                "A tabela de preços que faz a cliente pagar mais",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-xs">
                  <Check className="mt-0.5 size-4 shrink-0 text-rose-deep" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-border bg-card p-4 sm:p-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-widest text-gold sm:text-xs">
                <Clock className="size-4 shrink-0" /> 97% DE DESCONTO — EXPIRA EM
              </p>
              <div className="mt-3">
                <Countdown />
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-rose">
                <div className="h-full w-[83%] rounded-full bg-primary" />
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs">
                <Flame className="size-4 text-gold" />
                <strong>restam 17 vagas</strong>
                <span className="text-muted-foreground">nesta turma</span>
              </p>
            </div>

            <div className="mt-6">
              <CtaButton href="#oferta">Quero começar agora</CtaButton>
            </div>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-widest text-muted-foreground">
              <span>✓ ACESSO IMEDIATO</span>
              <span>✓ 7 DIAS DE GARANTIA</span>
            </p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-10 sm:py-14">
        <h2 className="px-4 text-center font-display text-lg font-bold sm:text-2xl">
          Esse é o trabalho que faz a cliente pagar sem perguntar o preço
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

      {/* PARA QUEM É ESSE MÉTODO */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center font-display text-lg font-bold sm:text-2xl">
            Serve para você que nunca fez uma unha — e para você que já atende há anos
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
            {perfis.map(([titulo, itens]) => (
              <div key={titulo} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <p className="text-sm font-semibold text-rose-deep">{titulo}</p>
                <ul className="mt-4 space-y-2.5 text-xs">
                  {itens.map((t) => (
                    <li key={t} className="flex gap-2">
                      <Check className="size-4 shrink-0 text-rose-deep" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-semibold sm:text-sm">
            Os dois caminhos levam ao mesmo lugar: unha que dura 30 dias e cliente que paga R$ 150
            sem negociar.
          </p>
        </div>
      </section>

      {/* SEM MÉTODO x COM MÉTODO */}
      <section className="bg-secondary/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-rose-deep">
            A VIRADA DE CHAVE
          </p>
          <h2 className="mt-2 font-display text-lg font-bold sm:text-2xl">
            A mesma hora de trabalho. R$ 40 ou R$ 150 na sua mão.
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5 text-left sm:p-6">
              <p className="text-sm font-semibold text-muted-foreground">Sem o método</p>
              <ul className="mt-4 space-y-2.5 text-xs">
                {[
                  "(iniciante) Trava antes de começar — tenta tutorial grátis e desiste",
                  "(profissional) Unha descola em 1 semana, cliente some sem avisar",
                  "Cobra R$ 40, gasta material e sobra quase nada pela hora de trabalho",
                  "Agenda vazia — ou cheia de clientes que pechincham o preço",
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
                  "(iniciante) Primeira unha pronta na primeira semana, com acabamento de salão",
                  "(profissional) Unha aguenta 30 dias de rotina real, cliente marca o retorno na hora",
                  "R$ 150+ por atendimento, agenda cheia de indicação",
                  "Confiança para fechar qualquer mão — a primeira da carreira ou a mais difícil",
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
            6 módulos: do primeiro gel ao atendimento de R$ 150
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs text-muted-foreground sm:text-sm">
            Comece no módulo 1 se nunca fez unha. Pule direto pro que te trava hoje se já atende — a
            estrutura é modular, você assiste na sua ordem.
          </p>
          <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modulos.map(([n, titulo, desc, nota]) => (
              <div key={n} className="rounded-2xl border border-border bg-card p-4 sm:p-6">
                <span className="font-display text-2xl font-bold text-gold">{n}</span>
                <h3 className="mt-3 text-sm font-semibold">{titulo}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
                {nota ? (
                  <p className="mt-2 text-[11px] font-medium text-rose-deep">{nota}</p>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-md sm:mt-10">
            <CtaButton href="#oferta">Quero dominar as 6 técnicas por R$ 27,90</CtaButton>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Acesso imediato · 7 dias de garantia · risco zero
            </p>
          </div>
        </div>
      </section>

      {/* SEGREDOS + MENTORA */}
      <section className="bg-secondary/50 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div>
            <h2 className="font-display text-lg font-bold sm:text-2xl">
              O que nenhum tutorial grátis te mostra
            </h2>
            <p className="mt-3 text-xs text-muted-foreground sm:text-sm">
              São 4 detalhes. Eles decidem se a sua unha dura 7 ou 30 dias — e quanto você pode
              cobrar por ela.
            </p>
            <ul className="mt-6 space-y-2.5 text-xs">
              {[
                "O preparo que trava o levantamento em qualquer formato",
                "O gel e o primer certos para cada tipo de unha",
                "Acabamento de salão gastando menos tempo por mão",
                "Como subir o preço sem perder nenhuma cliente",
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
            De quem nunca fez unha a quem já atende há 10 anos — o resultado é o mesmo
          </h2>
          {[
            ["Quem começou do zero:", depoimentosZero] as const,
            ["Quem já atendia e evoluiu:", depoimentosPro] as const,
          ].map(([grupo, lista]) => (
            <div key={grupo} className="mt-6 sm:mt-10">
              <p className="text-sm font-semibold text-rose-deep">{grupo}</p>
              <div className="mt-3 grid gap-3 sm:gap-5 md:grid-cols-2">
                {lista.map(([texto, autor]) => (
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
            </div>
          ))}
          <div className="mx-auto mt-8 max-w-md sm:mt-10">
            <CtaButton href="#oferta">Quero esse resultado por R$ 27,90</CtaButton>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Elas começaram exatamente onde você está hoje — do zero ou do R$ 40. As duas chegaram
              no mesmo lugar.
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
            R$ 528 em bônus — úteis desde a primeira cliente até a centésima
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-muted-foreground sm:text-sm">
            Eles saem do ar quando esta turma fechar. Quem entra hoje leva tudo.
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
                "Nunca fez uma unha e quer aprender certo, do zero, sem gambiarra",
                "Já faz unha, cobra barato e sabe que o trabalho vale mais",
                "Tem medo de estragar a mão da cliente — seja a primeira ou a próxima",
                "Quer sua própria renda, em casa, no seu horário",
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
                "Quer resultado sem encostar em uma lixa",
                "Procura dinheiro fácil sem entregar qualidade",
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
            Custa menos que um esmalte. Serve pra começar do zero ou pra dobrar o que você já cobra.
          </h2>
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-[0.85fr_1.15fr] sm:items-start">
          {/* PLANO SIMPLES */}
          <div className="rounded-2xl border border-border bg-card p-5 text-left shadow-[var(--shadow-soft)] sm:rounded-3xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
              PLANO ESSENCIAL
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Só o curso, sem os extras</p>
            <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">R$ 19,90</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              pagamento único · acesso vitalício · 7 dias de garantia
            </p>
            <ul className="mt-5 space-y-2.5 text-[11px] sm:text-xs">
              {[
                ["6 módulos com técnicas completas", true],
                ["Aulas de encapsulado e nail art", true],
                ["Lista de fornecedores confiáveis", false],
                ["Tabela de preços pronta para usar", false],
                ["Kit de posts para Instagram", false],
                ["Grupo VIP de alunas + certificado", false],
              ].map(([item, incluso]) => (
                <li
                  key={item as string}
                  className={`flex items-start gap-2 border-b border-border pb-2 ${incluso ? "" : "text-muted-foreground/60 line-through"}`}
                >
                  {incluso ? (
                    <Check className="mt-0.5 size-4 shrink-0 text-rose-deep" />
                  ) : (
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
                  )}
                  {item as string}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaButton
                href={CHECKOUT_URL_SIMPLES}
                className="bg-secondary text-foreground shadow-none"
              >
                Quero o essencial por R$ 19,90
              </CtaButton>
            </div>
          </div>

          {/* PLANO COMPLETO — RECOMENDADO */}
          <div className="relative rounded-2xl border-2 border-primary bg-card p-5 shadow-[var(--shadow-soft)] sm:rounded-3xl sm:p-7">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
              Mais escolhido
            </span>
            <p className="text-xs text-muted-foreground">
              PLANO COMPLETO — Método Juliana Souza
            </p>
            <p className="mt-4 text-xs text-muted-foreground line-through">De R$ 1.025</p>
            <p className="font-display text-3xl font-bold text-rose-deep sm:text-4xl">R$ 27,90</p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              pagamento único · acesso vitalício · sem mensalidade · 7 dias de garantia
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
              O PREÇO VOLTA A R$ 497 EM
            </p>
            <div className="mt-3 flex justify-center">
              <Countdown compact />
            </div>

            <div className="mt-6">
              <CtaButton>Quero minha vaga por R$ 27,90</CtaButton>
            </div>
            <p className="mt-3 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
              <Lock className="size-3" /> Compra segura SSL · Acesso imediato
            </p>
          </div>
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            9 em cada 10 alunas escolhem o Completo: por R$ 8 a mais você leva os fornecedores, a
            tabela de preços e o grupo VIP — o que faz você começar a cobrar mais rápido.
          </p>
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
            Entre, assista tudo e teste na prática. Se em 7 dias você achar que não vale, é só me
            avisar: devolvo os R$ 27,90 integralmente, sem pergunta nenhuma.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/50 py-12 pb-24 sm:py-16 sm:pb-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center font-display text-lg font-bold sm:text-2xl">
            Ainda com dúvida? Respondo aqui.
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
            <CtaButton href="#oferta">Garantir minha vaga por R$ 27,90</CtaButton>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Daqui a 30 dias você pode estar fazendo sua primeira unha de gel — ou cobrando R$ 150
              pela que já sabe fazer. Os dois começam hoje, na mesma aula.
            </p>
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
          <CtaButton href="#oferta" className="flex-1">Quero agora</CtaButton>
        </div>
      </div>
    </main>
  );
}
