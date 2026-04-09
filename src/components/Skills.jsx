import { useState } from "react";

const categories = [
  {
    label: "Frontend",
    color: "#a78bfa",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "JavaScript", icon: "JS" },
      { name: "Tailwind", icon: "🌊" },
      { name: "Framer Motion", icon: "🎞️" },
      { name: "Vue", icon: "💚" },
      { name: "HTML", icon: "🧱" },
      { name: "CSS", icon: "🎨" },
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
      { name: "REST", icon: "🔗" },
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

const SkillCard = ({ skill }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 14px",
        borderRadius: 8,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        fontSize: 13,
        color: "var(--text)",
      }}
    >
      <span style={{ fontSize: 16 }}>{skill.icon}</span>
      <span>{skill.name}</span>
    </div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 24,
        transition: "all 0.3s",
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          {category.label}
        </h3>

        <div
          style={{
            height: 2,
            width: 40,
            background: category.color,
            marginTop: 6,
            opacity: 0.7,
          }}
        />
      </div>

      {/* Skills */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 10,
        }}
      >
        {category.skills.map((s) => (
          <SkillCard key={s.name} skill={s} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 24px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <p
          style={{
            color: "var(--purple)",
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Expertise
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
          }}
        >
          Skills &{" "}
          <span className="gradient-text">Technologies</span>
        </h2>

        <p
          style={{
            color: "var(--muted)",
            marginTop: 10,
            fontSize: 14,
          }}
        >
          Technologies I use to build scalable applications
        </p>
      </div>

      {/* Categories */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {categories.map((c) => (
          <CategoryCard key={c.label} category={c} />
        ))}
      </div>

      {/* Bottom strip */}
      <div style={{ marginTop: 60 }}>
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            marginBottom: 20,
          }}
        />

        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            fontSize: 13,
          }}
        >
          Constantly learning and adapting to new technologies 🚀
        </p>
      </div>
    </section>
  );
};

export default Skills;

