import React from "react";

export default function ExportButton({ data, fileName = "evidence.csv" }) {
  const handleExport = () => {
    if (!data || !data.length) return;
    const headers = Object.keys(data[0]);
    const csv = [
      headers.join(","),
      ...data.map((row) => headers.map((h) => row[h]).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    link.click();
  };

  return (
    <button className="export-btn" onClick={handleExport}>
      ⬇️ Export CSV
    </button>
  );
}