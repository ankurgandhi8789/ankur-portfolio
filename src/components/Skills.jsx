import { useState } from "react";

const categories = [
  {
    label: "Frontend",
    color: "#a78bfa",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "𝙏𝙎" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Framer Motion", icon: "🎞️" },
      { name: "Vue.js", icon: "💚" },
      { name: "HTML5", icon: "🧱" },
      { name: "CSS3", icon: "🎨" },
    ],
  },
  {
    label: "Backend",
    color: "#60a5fa",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "REST APIs", icon: "🔗" },
      { name: "GraphQL", icon: "◈" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  {
    label: "Tools",
    color: "#34d399",
    skills: [
      { name: "Git", icon: "🌿" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Figma", icon: "🖌️" },
      { name: "Linux", icon: "🐧" },
      { name: "VS Code", icon: "💙" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

const SkillCard = ({ skill, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 12, padding: "24px 16px", borderRadius: 16,
        background: hovered ? `${color}15` : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? color + "55" : "rgba(255,255,255,0.08)"}`,
        cursor: "default", transition: "all 0.25s ease",
        boxShadow: hovered ? `0 0 24px ${color}22` : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: hovered ? `${color}22` : "rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 24, transition: "all 0.25s",
        boxShadow: hovered ? `0 0 16px ${color}44` : "none",
        border: `1px solid ${hovered ? color + "44" : "transparent"}`,
      }}>
        {skill.icon}
      </div>
      <span style={{
        fontSize: 12, fontWeight: 600, color: hovered ? "var(--text)" : "var(--muted)",
        transition: "color 0.25s", textAlign: "center",
      }}>
        {skill.name}
      </span>
    </div>
  );
};

const Skills = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="skills" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 52 }}>
        <p style={{ color: "var(--purple)", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Expertise</p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800 }}>
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 12 }}>
          Tools and technologies I work with every day
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 44, flexWrap: "wrap" }}>
        {categories.map((c, i) => (
          <button key={c.label} onClick={() => setActive(i)} style={{
            padding: "9px 26px", borderRadius: 50, fontSize: 13, fontWeight: 600,
            cursor: "pointer", border: "1px solid", fontFamily: "var(--font)",
            transition: "all 0.25s",
            background: active === i ? c.color : "transparent",
            borderColor: active === i ? c.color : "var(--border)",
            color: active === i ? "#000" : "var(--muted)",
            boxShadow: active === i ? `0 0 20px ${c.color}55` : "none",
          }}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: 16,
      }}>
        {cat.skills.map(s => (
          <SkillCard key={s.name} skill={s} color={cat.color} />
        ))}
      </div>

      {/* Bottom marquee strip */}
      <div style={{ marginTop: 64, overflow: "hidden", position: "relative" }}>
        <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${cat.color}44, transparent)`, marginBottom: 28 }} />
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {categories.flatMap(c => c.skills).map(s => (
            <span key={s.name + s.icon} style={{
              fontSize: 12, color: "var(--muted)", padding: "4px 12px",
              borderRadius: 50, border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.03)",
            }}>
              {s.icon} {s.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
