import React from "react";
import EvidenceCard from "../EvidenceCard/EvidenceCard";
import ResultsTable from "../ResultsTable/ResultsTable";
import ExportButton from "../ExportButton/ExportButton";

export default function EvidencePanel({ results }) {
  if (!results || !results.length) return null;

  const isTabular = results[0].tableData;

  return (
    <div className="evidence-panel">
      {isTabular ? (
        <>
          <ResultsTable
            headers={results[0].headers}
            rows={results[0].tableData}
          />
          <ExportButton
            data={results[0].tableData}
            fileName="evidence-table.csv"
          />
        </>
      ) : (
        <>
          {/* <h3 style={{ marginBottom: "15px", fontSize: "18px" }}>
            Evidence Cards
          </h3> */}

          {results.map((r) => {
            const singleCardData = [
              {
                id: r.id,
                title: r.title,
                due: r.due,
                owner: r.owner,
                status: r.status,
                source: r.source,
              },
            ];

            return (
              <div key={r.id} style={{ marginBottom: "20px" }}>
                {/* Evidence label above the card */}
                {/* <div
                  style={{
                    fontWeight: "600",
                    marginBottom: "5px",
                    color: "#333",
                  }}
                >
                  Evidence
                </div> */}

                <EvidenceCard {...r} />

                {/* Export button below the card */}
                <div style={{ marginTop: "10px" }}>
                  <ExportButton
                    data={singleCardData}
                    fileName={`${r.id}-evidence.csv`}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
