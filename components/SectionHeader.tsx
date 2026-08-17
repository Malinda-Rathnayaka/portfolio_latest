import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14 md:mb-20 max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
        <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-cyan-300/80 font-mono">{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}
