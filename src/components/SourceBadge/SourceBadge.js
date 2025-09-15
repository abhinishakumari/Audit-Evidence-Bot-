import React from "react";

export default function SourceBadge({ source }) {
  const colors = {
    github: "#24292e",
    jira: "#0052cc",
    documents: "#9333ea",
    slack: "#36c5f0",
  };
  return (
    <span
      className="source-badge"
      style={{
        background: colors[source] || "#64748b",
        color: "#fff",
        padding: "2px 6px",
        borderRadius: "6px",
        fontSize: "0.75rem",
        marginLeft: "8px",
      }}
    >
      {source}
    </span>
  );
}
