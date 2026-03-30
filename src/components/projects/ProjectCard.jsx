import { useState } from "react";

const ProjectCard = ({ p, side }) => {
  const [hovered, setHovered] = useState(false);
  const isMustard = p.color === "#D4A017";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: side === "left" ? 1 : 3,
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 14,
        padding: "22px 26px",
        transition: "all 0.3s ease",
        transform: hovered
          ? side === "left"
            ? "translateX(-8px) translateY(-4px)"
            : "translateX(8px) translateY(-4px)"
          : "translateX(0)",
        boxShadow: hovered
          ? isMustard
            ? "0 10px 30px rgba(212,160,23,0.08)"
            : "0 10px 30px rgba(239,68,68,0.08)"
          : "none",
        borderColor: hovered
          ? isMustard
            ? "rgba(212,160,23,0.25)"
            : "rgba(239,68,68,0.25)"
          : "rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 TOP ACCENT */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: isMustard
            ? "linear-gradient(90deg, #D4A017, transparent)"
            : "linear-gradient(90deg, #EF4444, transparent)",
          opacity: 0.9,
        }}
      />

      {/* 🏷 TAG */}
      <div style={{ marginBottom: 10 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: isMustard ? "#D4A017" : "#EF4444",
            background: isMustard
              ? "rgba(212,160,23,0.08)"
              : "rgba(239,68,68,0.08)",
            border: isMustard
              ? "1px solid rgba(212,160,23,0.2)"
              : "1px solid rgba(239,68,68,0.2)",
            padding: "4px 10px",
            borderRadius: 20,
          }}
        >
          {p.tag}
        </span>
      </div>

      {/* 🧠 TITLE */}
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#E5E5E5",
          marginBottom: 8,
          lineHeight: 1.4,
        }}
      >
        {p.title}
      </h3>

      {/* 📝 DESC */}
      <p
        style={{
          color: "#9CA3AF",
          fontSize: 13,
          lineHeight: 1.7,
          marginBottom: 14,
        }}
      >
        {p.desc}
      </p>

      {/* ⚙ STACK */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginBottom: hovered ? 14 : 0,
          transition: "margin 0.3s ease",
        }}
      >
        {p.stack.map((s) => (
          <span
            key={s}
            style={{
              fontSize: 10,
              color: "#9CA3AF",
              background: "#0F0F0F",
              border: "1px solid rgba(255,255,255,0.05)",
              padding: "4px 10px",
              borderRadius: 20,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* 🔘 ACTIONS */}
      <div
        style={{
          display: "flex",
          gap: 10,
          maxHeight: hovered ? 50 : 0,
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.35s ease",
        }}
      >
        {/* GitHub */}
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            textAlign: "center",
            padding: "7px 0",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            background: "#0F0F0F",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "#E5E5E5",
            textDecoration: "none",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1A1A1A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#0F0F0F";
          }}
        >
          GitHub
        </a>

        {/* Live */}
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            textAlign: "center",
            padding: "7px 0",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            background: isMustard
              ? "rgba(212,160,23,0.12)"
              : "rgba(239,68,68,0.12)",
            border: isMustard
              ? "1px solid rgba(212,160,23,0.3)"
              : "1px solid rgba(239,68,68,0.3)",
            color: isMustard ? "#D4A017" : "#EF4444",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isMustard
              ? "rgba(212,160,23,0.2)"
              : "rgba(239,68,68,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isMustard
              ? "rgba(212,160,23,0.12)"
              : "rgba(239,68,68,0.12)";
          }}
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;