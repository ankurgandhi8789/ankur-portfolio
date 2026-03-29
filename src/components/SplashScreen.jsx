import { useEffect, useState } from "react";

const SplashScreen = ({ onDone }) => {
  const [phase, setPhase] = useState("show"); // show → open → done

  useEffect(() => {
    // After 2s show content, then open doors at 2.8s, done at 4s
    const t1 = setTimeout(() => setPhase("open"), 2800);
    const t2 = setTimeout(() => onDone(), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  if (phase === "done") return null;

  const panelBase = {
    position: "fixed",
    left: 0,
    right: 0,
    height: "50vh",
    background: "#0a0a14",
    zIndex: 999,
    transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <>
      {/* Top door */}
      <div style={{
        ...panelBase,
        top: 0,
        transform: phase === "open" ? "translateY(-100%)" : "translateY(0)",
        borderBottom: "1px solid rgba(167,139,250,0.3)",
        alignItems: "flex-end",
        paddingBottom: 40,
      }}>
        {/* Top orb */}
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "#a78bfa", filter: "blur(100px)", opacity: 0.12, top: -100, left: "30%" }} />

        <div style={{ textAlign: "center", animation: phase === "show" ? "fadeUp 0.8s ease forwards" : "none" }}>
          <p style={{ fontSize: 13, letterSpacing: 6, color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 }}>
            Welcome to my portfolio
          </p>
          <h1 style={{
            fontSize: "clamp(36px, 7vw, 80px)",
            fontWeight: 800,
            background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.1,
          }}>
            Ankur Gandhi
          </h1>
        </div>
      </div>

      {/* Bottom door */}
      <div style={{
        ...panelBase,
        bottom: 0,
        transform: phase === "open" ? "translateY(100%)" : "translateY(0)",
        borderTop: "1px solid rgba(167,139,250,0.3)",
        alignItems: "flex-start",
        paddingTop: 40,
      }}>
        {/* Bottom orb */}
        <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "#60a5fa", filter: "blur(100px)", opacity: 0.1, bottom: -100, right: "20%" }} />

        <div style={{ textAlign: "center", animation: phase === "show" ? "fadeDown 0.8s ease 0.3s forwards" : "none", opacity: 0 }}>
          <p style={{ fontSize: "clamp(14px, 2vw, 18px)", color: "var(--muted)", marginBottom: 16, letterSpacing: 1 }}>
            Full-Stack Developer &nbsp;·&nbsp; React Specialist &nbsp;·&nbsp; UI/UX Enthusiast
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {["React", "Node.js", "TypeScript", "MongoDB"].map(t => (
              <span key={t} style={{
                fontSize: 12, color: "#a78bfa",
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.25)",
                padding: "4px 14px", borderRadius: 50,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Center line (the door gap) */}
      <div style={{
        position: "fixed",
        top: "50%",
        left: 0,
        right: 0,
        height: 1,
        background: "linear-gradient(90deg, transparent, #a78bfa, #60a5fa, transparent)",
        zIndex: 1000,
        transform: "translateY(-50%)",
        opacity: phase === "open" ? 0 : 1,
        transition: "opacity 0.4s ease",
      }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default SplashScreen;
