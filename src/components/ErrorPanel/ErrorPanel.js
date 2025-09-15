import React from "react";

export default function ErrorPanel({ message }) {
  return (
    <div className="error-panel">
      <p>⚠️ {message || "Something went wrong. Please try again."}</p>
    </div>
  );
}
