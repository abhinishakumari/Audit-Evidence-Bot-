import React from "react";

export default function UploadBox({ appendLog }) {
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (!files.length) return;
    Array.from(files).forEach((f) => appendLog(`Uploaded file: ${f.name}`));
  };

  return (
    <div className="upload-box">
      <h3>Upload Documents</h3>
      <input type="file" multiple onChange={handleFileChange} />
    </div>
  );
}
