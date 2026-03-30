import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

const Intro = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px",
        maxWidth: 1000,
        margin: "0 auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div>

        {/* 🔥 Availability Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid rgba(212,160,23,0.25)",
            background: "rgba(212,160,23,0.08)",
            padding: "6px 16px",
            borderRadius: 50,
            fontSize: 12,
            color: "#D4A017",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 6px #22c55e",
            }}
          />
          Available for work
        </div>

        {/* 👋 Heading */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(38px, 6vw, 64px)",
            fontWeight: 750,
            lineHeight: 1.1,
            marginBottom: 16,
            color: "#E5E5E5",
          }}
        >
          Hi, I'm <br />
          <span className="gradient-text">Ankur Gandhi</span>
        </h1>

        {/* 🎯 Animated Role */}
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#D4A017",
            marginBottom: 20,
            minHeight: 28,
            opacity: fade ? 1 : 0,
            transition: "opacity 0.4s ease",
            fontWeight: 500,
          }}
        >
          {roles[roleIndex]}
        </p>

        {/* 📝 Description */}
        <p
          style={{
            color: "#9CA3AF",
            fontSize: 15,
            lineHeight: 1.8,
            maxWidth: 520,
            margin: "0 auto 10px",
          }}
        >
          I build clean, scalable, and high-performance web applications.
          Focused on crafting smooth user experiences with modern technologies
          and thoughtful design.
        </p>

        {/* 🚀 CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="/resume.pdf" target="_blank" className="btn-outline">
            Download CV
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>

        {/* ⚡ Minimal Tech Tags */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span className="tag-mustard">React</span>
          <span className="tag-red">Node</span>
          <span className="tag-mustard">TypeScript</span>
          <span className="tag-red">MongoDB</span>
        </div>
      </div>

      {/* ⬇ Scroll Indicator */}
      <a
        href="#projects"
        style={{
          position: "absolute",
          bottom: 70,
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
          color: "#9CA3AF",
          fontSize: 11,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        ↓ Scroll
      </a>
    </section>
  );
};

export default Intro;