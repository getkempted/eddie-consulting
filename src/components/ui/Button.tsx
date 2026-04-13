import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-container text-on-primary hover:opacity-95 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-50",
  secondary:
    "bg-transparent text-primary-container outline outline-1 outline-outline/20 hover:bg-surface-container-low disabled:pointer-events-none disabled:opacity-50",
  ghost:
    "bg-transparent text-primary-container underline-offset-4 hover:underline disabled:pointer-events-none disabled:opacity-50",
};

type Base = {
  variant?: Variant;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = Base & Omit<ComponentProps<"button">, "className" | "children">;
type ButtonAsLink = Base & { href: string } & Omit<ComponentProps<typeof Link>, "className" | "children" | "href">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className = "" } = props;
  const sizeCls =
    size === "sm" ? "min-h-10 px-4 py-2 text-sm rounded-md" : "min-h-11 px-6 py-2.5 text-sm rounded-md";
  const base =
    `inline-flex cursor-pointer items-center justify-center font-headline font-bold tracking-tight transition-opacity ${variants[variant]} ${sizeCls} ${className}`.trim();

  if ("href" in props && props.href) {
    const p = props as ButtonAsLink;
    return (
      <Link
        href={p.href}
        className={base}
        prefetch={p.prefetch}
        replace={p.replace}
        scroll={p.scroll}
        locale={p.locale}
      >
        {p.children}
      </Link>
    );
  }

  const p = props as ButtonAsButton;
  return (
    <button
      type={p.type ?? "button"}
      className={base}
      disabled={p.disabled}
      form={p.form}
      formAction={p.formAction}
      formEncType={p.formEncType}
      formMethod={p.formMethod}
      formNoValidate={p.formNoValidate}
      formTarget={p.formTarget}
      name={p.name}
      value={p.value}
      autoFocus={p.autoFocus}
      onClick={p.onClick}
      onBlur={p.onBlur}
      onFocus={p.onFocus}
    >
      {p.children}
    </button>
  );
}
