export function Section({
  id,
  surface = "default",
  className = "",
  children,
}: {
  id?: string;
  surface?: "default" | "low" | "lowest";
  className?: string;
  children: React.ReactNode;
}) {
  const bg =
    surface === "low"
      ? "bg-surface-container-low"
      : surface === "lowest"
        ? "bg-surface-container-lowest"
        : "bg-surface";
  return (
    <section id={id} className={`${bg} ${className}`.trim()}>
      {children}
    </section>
  );
}
