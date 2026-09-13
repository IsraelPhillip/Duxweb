export default function SectionHeading({ heading, supporting, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <h2 className="text-3xl md:text-[2.75rem] leading-[1.1] font-medium tracking-tight">
        {heading}
      </h2>
      {supporting && (
        <p className="mt-4 text-base md:text-lg text-dux-slate max-w-xl leading-relaxed">
          {supporting}
        </p>
      )}
    </div>
  );
}
