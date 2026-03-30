import { createPortal } from "react-dom";
import ModalCard from "./ModalCard";
import { allProjects } from "./projectsData";

const ProjectsModal = ({ onClose }) =>
  createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 16,
          width: "100%",
          maxWidth: 1000,
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 26px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            flexShrink: 0,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#E5E5E5",
              }}
            >
              All <span style={{ color: "#D4A017" }}>Projects</span>
            </h3>

           
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            style={{
              background: "#0F0F0F",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "50%",
              width: 34,
              height: 34,
              cursor: "pointer",
              color: "#E5E5E5",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1A1A1A";
              e.currentTarget.style.borderColor = "rgba(212,160,23,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0F0F0F";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "22px 26px",
          }}
        >
          <div className="modal-grid">
            {allProjects.map((p) => (
              <ModalCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .modal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>,
    document.body
  );

export default ProjectsModal;