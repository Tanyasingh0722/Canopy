import { useEffect, useRef } from "react";
import iconSvgRaw from "../../imports/pasted_text/icon.svg?raw";

interface SunShapeSvgProps {
  width?: number;
  height?: number;
  className?: string;
  pressing?: boolean;
  style?: React.CSSProperties;
}

export function SunShapeSvg({
  width = 150,
  height = 150,
  className,
  pressing = false,
  style,
}: SunShapeSvgProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = iconSvgRaw;
    const svgEl = containerRef.current.querySelector("svg");
    if (svgEl) {
      svgEl.setAttribute("width", String(width));
      svgEl.setAttribute("height", String(height));
      svgEl.style.display = "block";
      svgEl.style.overflow = "visible";
    }
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
        ...style,
      }}
    />
  );
}
