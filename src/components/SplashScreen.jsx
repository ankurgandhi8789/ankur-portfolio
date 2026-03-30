import { useEffect, useState } from "react";

const SplashScreen = ({ onDone }) => {
  const [phase, setPhase] = useState("show");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("open"), 2600);
    const t2 = setTimeout(() => onDone(), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  const doorBase = {
    position: "fixed",
    left: 0,
    right: 0,
    height: "50vh",
    background: "#111111",
    zIndex: 999,
    transition: "transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const gridBg = {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(196,160,80,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,80,0.05) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
  };

  const corner = (pos) => {
    const base = {
      position: "absolute", width: 56, height: 56,
      borderColor: "rgba(196,160,80,0.3)", borderStyle: "solid",
    };
    const sides = {
      tl: { top: 16, left: 16,  borderWidth: "1px 0 0 1px" },
      tr: { top: 16, right: 16, borderWidth: "1px 1px 0 0" },
      bl: { bottom: 16, left: 16,  borderWidth: "0 0 1px 1px" },
      br: { bottom: 16, right: 16, borderWidth: "0 1px 1px 0" },
    };
    return { ...base, ...sides[pos] };
  };

  const tagStyle = (variant) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 11,
    letterSpacing: "1px",
    textTransform: "uppercase",
    padding: "5px 14px",
    borderRadius: 2,
    ...(variant === "mustard"
      ? { color: "#c4a050", border: "1px solid rgba(196,160,80,0.22)", background: "rgba(196,160,80,0.07)" }
      : { color: "#b05040", border: "1px solid rgba(176,80,64,0.22)",  background: "rgba(176,80,64,0.07)" }),
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes riseUp   { from { opacity:0; transform:translateY(16px);  } to { opacity:1; transform:translateY(0); } }
        @keyframes riseDown { from { opacity:0; transform:translateY(-14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes softPulse { 0%,100% { opacity:0.35; } 50% { opacity:0.9; } }
      `}</style>

      {/* Top door */}
      <div style={{
        ...doorBase,
        top: 0,
        alignItems: "flex-end",
        paddingBottom: 32,
        borderBottom: "1px solid rgba(196,160,80,0.2)",
        transform: phase === "open" ? "translateY(-100%)" : "translateY(0)",
      }}>
        <div style={gridBg} />
        <div style={corner("tl")} />
        <div style={corner("tr")} />

        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, letterSpacing: "4px", color: "#7a6e5a",
            textTransform: "uppercase", marginBottom: 10,
            animation: "riseUp 0.7s ease 0.15s forwards", opacity: 0,
          }}>
            Full-Stack Developer
          </p>
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(38px, 8vw, 72px)",
            letterSpacing: "-1px", lineHeight: 1, margin: 0,
            color: "#ede8dc",
            animation: "riseUp 0.7s ease 0.3s forwards", opacity: 0,
          }}>
            Ankur{" "}
            <span style={{ color: "#c4a050" }}>Gandhi</span>
          </h1>
        </div>
      </div>

      {/* Bottom door */}
      <div style={{
        ...doorBase,
        bottom: 0,
        alignItems: "flex-start",
        paddingTop: 32,
        borderTop: "1px solid rgba(196,160,80,0.2)",
        transform: phase === "open" ? "translateY(100%)" : "translateY(0)",
      }}>
        <div style={gridBg} />
        <div style={corner("bl")} />
        <div style={corner("br")} />

        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{
            display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap",
            animation: "riseDown 0.7s ease 0.35s forwards", opacity: 0,
          }}>
            {[
              { label: "React",      v: "mustard" },
              { label: "Node.js",    v: "red"     },
              { label: "TypeScript", v: "mustard" },
              { label: "MongoDB",    v: "red"     },
            ].map(({ label, v }) => (
              <span key={label} style={tagStyle(v)}>{label}</span>
            ))}
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, letterSpacing: "3px", color: "#5a5040",
            textTransform: "uppercase", marginTop: 26,
            animation: "riseDown 0.7s ease 0.55s forwards, softPulse 2.4s ease 1.2s infinite",
            opacity: 0,
          }}>
            Loading
          </p>
        </div>
      </div>

      {/* Center divider */}
      <div style={{
        position: "fixed",
        top: "50%", left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, #c4a050 35%, #b05040 65%, transparent)",
        zIndex: 1000,
        transform: "translateY(-50%)",
        opacity: phase === "open" ? 0 : 1,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
      }} />
    </>
  );
};

export default SplashScreen;