import { useState } from "react";
import { featuredProjects } from "./projects/projectsData";
import ProjectCard from "./projects/ProjectCard";
import MobileTimeline from "./projects/MobileTimeline";
import ProjectsModal from "./projects/ProjectsModal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* 🔥 HEADER */}
      <div style={{ textAlign: "center", marginBottom: 70 }}>
        <p
          style={{
            color: "#D4A017",
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Portfolio
        </p>

        <h2
          style={{
            fontSize: "clamp(30px, 4vw, 44px)",
            fontWeight: 800,
            color: "#E5E5E5",
          }}
        >
          Featured{" "}
          <span className="gradient-text">Projects</span>
        </h2>
      </div>

      {/* 🧠 TIMELINE */}
      <div style={{ position: "relative" }}>
        {/* Center Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, transparent, rgba(212,160,23,0.4), rgba(239,68,68,0.4), transparent)",
          }}
        />

        <div
          className="desktop-timeline"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 60,
          }}
        >
          {featuredProjects.map((p, i) => {
            const side = i % 2 === 0 ? "left" : "right";

            return (
              <div
                key={p.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 60px 1fr",
                  alignItems: "center",
                }}
              >
                {/* LEFT */}
                {side === "left" ? (
                  <ProjectCard p={p} side="left" />
                ) : (
                  <div />
                )}

                {/* DOT */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background:
                        i % 2 === 0 ? "#D4A017" : "#EF4444",
                      boxShadow:
                        i % 2 === 0
                          ? "0 0 10px rgba(212,160,23,0.6)"
                          : "0 0 10px rgba(239,68,68,0.6)",
                      border: "2px solid #0F0F0F",
                    }}
                  />
                </div>

                {/* RIGHT */}
                {side === "right" ? (
                  <ProjectCard p={p} side="right" />
                ) : (
                  <div />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 📱 MOBILE */}
      <MobileTimeline projects={featuredProjects} />

      {/* 🔘 BUTTON */}
      <div style={{ textAlign: "center", marginTop: 60 }}>
        <button
          onClick={openModal}
          style={{
            padding: "12px 30px",
            fontSize: 13,
            borderRadius: 6,
            background: "transparent",
            border: "1px solid rgba(212,160,23,0.4)",
            color: "#D4A017",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              "rgba(212,160,23,0.08)";
            e.currentTarget.style.borderColor = "#EAB308";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor =
              "rgba(212,160,23,0.4)";
          }}
        >
          View All Projects →
        </button>
      </div>

      {/* 📦 MODAL */}
      {showModal && <ProjectsModal onClose={closeModal} />}

      {/* 📱 RESPONSIVE */}
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