const ModalCard = ({ p }) => {
  const isMustard = p.color === "#D4A017";

  return (
    <div
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.05)",
        borderRadius: 12,
        padding: "22px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#1A1A1A";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = isMustard
          ? "rgba(212,160,23,0.25)"
          : "rgba(239,68,68,0.25)";
        e.currentTarget.style.boxShadow = isMustard
          ? "0 8px 30px rgba(212,160,23,0.08)"
          : "0 8px 30px rgba(239,68,68,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#111111";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* 🔥 TOP ACCENT LINE */}
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
          opacity: 0.8,
        }}
      />

      {/* 🏷 TAG */}
      <div style={{ marginBottom: 12 }}>
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
          marginBottom: 10,
          lineHeight: 1.4,
        }}
      >
        {p.title}
      </h3>

      {/* 📝 DESCRIPTION */}
      <p
        style={{
          color: "#9CA3AF",
          fontSize: 13,
          lineHeight: 1.7,
          marginBottom: 16,
          flex: 1,
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
          marginBottom: 18,
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

      {/* 🔘 BUTTONS */}
      <div style={{ display: "flex", gap: 10 }}>
        {/* GitHub */}
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "8px 0",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            background: "#0F0F0F",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "#E5E5E5",
            textDecoration: "none",
            transition: "all 0.2s ease",
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

        {/* Demo */}
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: "8px 0",
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

export default ModalCard;