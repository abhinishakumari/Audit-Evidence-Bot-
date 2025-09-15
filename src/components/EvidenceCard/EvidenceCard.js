import React, { useState } from "react";
import SourceBadge from "../SourceBadge/SourceBadge";

export default function EvidenceCard({ title, due, owner, status, color, source, link, details }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`evidence-card ${color}`}
      style={{
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "15px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>
        {title} <SourceBadge source={source} />
      </h3>
      <p><strong>Due:</strong> {due}</p>
      <p><strong>Owner:</strong> {owner}</p>
      <p><strong>Status:</strong> {status}</p>

      <button
        className="view-btn"
        onClick={() => setShowModal(true)}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: "#fff",
              color: "#000",
              padding: "20px",
              borderRadius: "10px",
              minWidth: "300px",
              maxWidth: "500px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginTop: 0 }}>{title} – Details</h2>

            {/* Show structured JSON from backend if available */}
            <pre
              style={{
                background: "#f7f7f7",
                color: "#000",
                padding: "10px",
                borderRadius: "6px",
                overflowX: "auto",
                fontSize: "14px",
              }}
            >
              {JSON.stringify(details || { title, due, owner, status }, null, 2)}
            </pre>

            {link && (
              <p style={{ marginTop: "10px" }}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Open in Source ↗
                </a>
              </p>
            )}

            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
