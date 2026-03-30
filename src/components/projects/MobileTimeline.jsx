const MobileTimeline = ({ projects }) => (
  <div
    className="mobile-timeline"
    style={{
      display: "none",
      flexDirection: "column",
      gap: 36,
      position: "relative",
      paddingLeft: 28,
    }}
  >
    {/* 🔥 Timeline Line */}
    <div
      style={{
        position: "absolute",
        left: 8,
        top: 0,
        bottom: 0,
        width: 1,
        background:
          "linear-gradient(to bottom, transparent, rgba(212,160,23,0.4), rgba(239,68,68,0.4), transparent)",
      }}
    />

    {projects.map((p, i) => {
      const isMustard = p.color === "#D4A017";

      return (
        <div
          key={p.title}
          style={{
            display: "flex",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          {/* 🔘 DOT */}
          <div
            style={{
              position: "absolute",
              left: -20,
              top: 18,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: isMustard ? "#D4A017" : "#EF4444",
              boxShadow: isMustard
                ? "0 0 10px rgba(212,160,23,0.6)"
                : "0 0 10px rgba(239,68,68,0.6)",
              border: "2px solid #0F0F0F",
            }}
          />

          {/* 📦 CARD */}
          <div
            style={{
              flex: 1,
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 12,
              padding: 18,
              position: "relative",
              overflow: "hidden",
              transition: "all 0.25s ease",
            }}
          >
            {/* TOP ACCENT */}
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
              }}
            />

            {/* TAG */}
            <div style={{ marginBottom: 8 }}>
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

            {/* TITLE */}
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#E5E5E5",
                marginBottom: 6,
              }}
            >
              {p.title}
            </h3>

            {/* DESC */}
            <p
              style={{
                color: "#9CA3AF",
                fontSize: 13,
                lineHeight: 1.6,
                marginBottom: 12,
              }}
            >
              {p.desc}
            </p>

            {/* STACK */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 14,
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

            {/* BUTTONS */}
            <div style={{ display: "flex", gap: 10 }}>
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
                }}
              >
                Live
              </a>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default MobileTimeline;