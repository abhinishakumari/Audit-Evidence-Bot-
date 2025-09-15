import React from "react";

export default function HistoryPanel({ log, onSelect, selected }) {
  return (
    <div
      style={{
        width: "250px",
        height: "100%",
        backgroundColor: "#f5f5f5",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <h3
        style={{
          padding: "15px",
          margin: 0,
          marginRight: "20px",
          paddingRight: "20px",
          fontSize: "16px",
          borderBottom: "1px solid #ddd",
          color: "#111111ff",
          position: "sticky",
        }}
      >
        Recent Searches
      </h3>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {log
          .slice()
          .reverse()
          .map((item, index) => {
            const isSelected = selected?.ts === item.ts;
            return (
              <li
                key={index}
                onClick={() => onSelect?.(item)}
                style={{
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                  transition: "background 0.2s",
                  backgroundColor: isSelected ? "#d0e6ff" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "#e0e0e0";
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  {item.msg.length > 40 ? item.msg.slice(0, 40) + "..." : item.msg}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginTop: "2px",
                  }}
                >
                  {new Date(item.ts).toLocaleString()}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
