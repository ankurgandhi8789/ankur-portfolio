import { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "React Specialist", "UI/UX Enthusiast", "Open Source Contributor"];

const Intro = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 24px 80px", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center", width: "100%" }} className="intro-grid">

        {/* LEFT — Text */}
        <div>
          {/* Available badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 50, padding: "6px 16px", fontSize: 12, color: "var(--purple)", marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px #4ade80" }} />
            Available for hire
          </div>

          <h1 style={{ fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 12 }}>
            Hi, I'm{" "}<br />
            <span className="gradient-text">Ankur Gandhi</span>
          </h1>

          {/* Animated role */}
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 500, color: "var(--purple)",
            marginBottom: 20, minHeight: 28,
            opacity: fade ? 1 : 0, transition: "opacity 0.4s ease",
          }}>
            {roles[roleIndex]}
          </p>

          <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.85, maxWidth: 480, marginBottom: 36 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. I craft clean, performant
            web experiences with modern tools — turning complex problems into elegant, scalable solutions.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="/resume.pdf" target="_blank" className="btn-outline">Download CV ↓</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          {/* Stats */}
          {/* <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {[
              { num: "2+", label: "Years Experience" },
              { num: "15+", label: "Projects Built" },
              { num: "10+", label: "Happy Clients" },
            ].map(s => (
              <div key={s.label}>
                <p style={{ fontSize: 26, fontWeight: 800, background: "var(--gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</p>
                <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{s.label}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* RIGHT — Profile photo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative" }}>
            {/* Glow ring */}
            <div style={{
              position: "absolute", inset: -3, borderRadius: 24,
              background: "var(--gradient)", zIndex: 0,
              filter: "blur(16px)", opacity: 0.5,
            }} />
            {/* Gradient border frame */}
            <div style={{
              position: "absolute", inset: -2, borderRadius: 24,
              background: "var(--gradient)", zIndex: 0,
            }} />

            {imgError ? (
              <div style={{
                width: 280, height: 320, borderRadius: 22,
                background: "linear-gradient(160deg, #1a1a2e, #2d1b69)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 64, fontWeight: 800, color: "#fff",
                position: "relative", zIndex: 1,
                border: "3px solid rgba(255,255,255,0.08)",
              }}>AG</div>
            ) : (
              <img
                src="/profile.jpeg"
                alt="Ankur Gandhi"
                onError={() => setImgError(true)}
                style={{
                  width: 280, height: 320,
                  borderRadius: 22,
                  objectFit: "cover",
                  objectPosition: "top",
                  position: "relative", zIndex: 1,
                  border: "3px solid rgba(255,255,255,0.08)",
                  display: "block",
                }}
              />
            )}

            {/* Floating tech badge */}
            {/* <div style={{
              position: "absolute", bottom: -16, right: -16, zIndex: 2,
              background: "rgba(10,10,20,0.9)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "10px 14px", backdropFilter: "blur(12px)",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: 18 }}>⚡</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text)" }}>Open to Work</p>
                <p style={{ fontSize: 10, color: "var(--muted)" }}>Full-time / Freelance</p>
              </div>
            </div> */}

            {/* Floating stack badge */}
            {/* <div style={{
              position: "absolute", top: -16, left: -16, zIndex: 2,
              background: "rgba(10,10,20,0.9)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "10px 14px", backdropFilter: "blur(12px)",
            }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--purple)" }}>React · Node · TS</p>
            </div> */}
          </div>
        </div>

      </div>

      {/* Scroll button */}
      <a href="#projects" className="scroll-btn" style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        textDecoration: "none", color: "var(--muted)", fontSize: 11, letterSpacing: 2,
        textTransform: "uppercase", animation: "scrollBounce 2s ease-in-out infinite",
      }}>
        <span>Scroll</span>
        <div style={{
          width: 28, height: 44, borderRadius: 14,
          border: "2px solid rgba(167,139,250,0.4)",
          display: "flex", justifyContent: "center", paddingTop: 6,
        }}>
          <div style={{
            width: 4, height: 8, borderRadius: 2,
            background: "var(--gradient)",
            animation: "scrollDot 2s ease-in-out infinite",
          }} />
        </div>
      </a>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        @keyframes scrollDot {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(12px); }
        }
        @media (max-width: 768px) {
          .scroll-btn { display: none !important; }
          .intro-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .intro-grid > div:last-child {
            order: -1;
          }
          .intro-grid img, .intro-grid > div:last-child > div > div:nth-child(3) {
            width: 200px !important;
            height: 230px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Intro;
