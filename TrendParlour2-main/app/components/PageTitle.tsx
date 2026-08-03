import type { CSSProperties } from "react";

type PageTitleProps = {
  title: string;
  subtitle?: string;
  containerStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  subtitleStyle?: CSSProperties;
};

export default function PageTitle({
  title,
  subtitle,
  containerStyle,
  titleStyle,
  subtitleStyle,
}: PageTitleProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "1.5rem", ...containerStyle }}>
      <h1
        style={{
          fontSize: "clamp(2rem, 4.6vw, 2.6rem)",
          margin: "0 0 0.7rem",
          lineHeight: 1.14,
          letterSpacing: "-0.025em",
          color: "#1F2937",
          ...titleStyle,
        }}
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
            lineHeight: 1.6,
            color: "#4B5563",
            margin: 0,
            ...subtitleStyle,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
