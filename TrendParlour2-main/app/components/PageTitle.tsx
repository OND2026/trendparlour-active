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
    <div style={{ textAlign: "center", marginBottom: 0, ...containerStyle }}>
      <h1
        style={{
          fontSize: "2.5rem",
          margin: "0 0 0.75rem",
          color: "#1F2937",
          ...titleStyle,
        }}
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          style={{
            fontSize: "1rem",
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
