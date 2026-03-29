import { createPortal } from "react-dom";
import ModalCard from "./ModalCard";
import { allProjects } from "./projectsData";

const ProjectsModal = ({ onClose }) => createPortal(
  <div onClick={onClose} style={{
    position: "fixed", inset: 0, zIndex: 9999,
    background: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "24px", animation: "fadeIn 0.2s ease",
  }}>
    <div onClick={e => e.stopPropagation()} style={{
      background: "#0f0f1e",
      border: "1px solid rgba(167,139,250,0.3)",
      borderRadius: 20,
      width: "100%",
      maxWidth: 1000,
      height: "90vh",
      display: "flex",
      flexDirection: "column",
      animation: "slideUp 0.3s ease",
      overflow: "hidden",
    }}>

      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 28px", borderBottom: "1px solid var(--border)",
        flexShrink: 0, background: "#0f0f1e",
      }}>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>All Projects</h3>
          <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 3 }}>{allProjects.length} projects total</p>
        </div>
        <button onClick={onClose} style={{
          background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)",
          borderRadius: "50%", width: 36, height: 36, cursor: "pointer",
          color: "var(--text)", fontSize: 18, display: "flex", alignItems: "center",
          justifyContent: "center", transition: "background 0.2s", fontFamily: "var(--font)",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>✕</button>
      </div>

      {/* Scrollable area */}
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", padding: "24px 28px" }}>
        <div className="modal-grid">
          {allProjects.map(p => <ModalCard key={p.title} p={p} />)}
        </div>
      </div>
    </div>

    <style>{`
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

      .modal-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        align-items: start;
      }
      @media (max-width: 768px) {
        .modal-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 480px) {
        .modal-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </div>,
  document.body
);

export default ProjectsModal;
