import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Display height in pixels (width scales with aspect ratio) */
  height?: number;
  title?: string;
};

/** Official Sinclair Design Atelier wordmark */
export function Logo({
  className = "",
  height = 48,
  title = "Sinclair Design Atelier",
}: LogoProps) {
  // Source asset is roughly square / portrait lockup
  const width = Math.round(height * 1.05);

  return (
    <Image
      src="/logo.png"
      alt={title}
      width={width}
      height={height}
      className={`h-auto w-auto shrink-0 object-contain ${className}`}
      style={{ height, width: "auto" }}
      priority
    />
  );
}
