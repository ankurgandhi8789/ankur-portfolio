import { useState } from "react";
import { featuredProjects } from "./projects/projectsData";
import ProjectCard from "./projects/ProjectCard";
import MobileTimeline from "./projects/MobileTimeline";
import ProjectsModal from "./projects/ProjectsModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => { setShowModal(true); document.body.style.overflow = "hidden"; };
  const closeModal = () => { setShowModal(false); document.body.style.overflow = ""; };

  return (
    <section id="projects" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p style={{ color: "var(--purple)", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Portfolio</p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800 }}>Featured <span className="gradient-text">Projects</span></h2>
      </div>

      {/* Desktop Timeline */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, transform: "translateX(-50%)", background: "linear-gradient(to bottom, transparent, var(--purple), var(--blue), transparent)", opacity: 0.4 }} />
        <div className="desktop-timeline" style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {featuredProjects.map((p, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <div key={p.title} style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", alignItems: "center", gap: 0 }}>
                {side === "left" ? <ProjectCard p={p} side="left" /> : <div />}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: p.color, boxShadow: `0 0 12px ${p.color}`, border: "2px solid var(--bg)", zIndex: 1 }} />
                </div>
                {side === "right" ? <ProjectCard p={p} side="right" /> : <div />}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <MobileTimeline projects={featuredProjects} />

      {/* Show More Button */}
      {/* <div style={{ textAlign: "center", marginTop: 56 }}>
        <button onClick={openModal} style={{
          padding: "12px 32px", borderRadius: 50, fontSize: 14, fontWeight: 600,
          background: "transparent", border: "1px solid var(--purple)",
          color: "var(--purple)", cursor: "pointer", fontFamily: "var(--font)", transition: "all 0.25s",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.12)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(167,139,250,0.25)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}>
          Show More Projects ↓
        </button>
      </div> */}

      {/* Modal */}
      {showModal && <ProjectsModal onClose={closeModal} />}

      <style>{`
        @media (max-width: 700px) {
          .desktop-timeline { display: none !important; }
          .mobile-timeline { display: flex !important; }
        }
        @media (min-width: 701px) {
          .mobile-timeline { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
