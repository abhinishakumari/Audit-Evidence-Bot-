import React from "react";

export default function ResultsTable({ headers, rows }) {
  if (!rows || !rows.length) return null;

  return (
    <table className="results-table">
      <thead>
        <tr>
          {headers.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {headers.map((h) => (
              <td key={h}>{row[h]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
