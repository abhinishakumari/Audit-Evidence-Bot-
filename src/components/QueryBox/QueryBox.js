import React from "react";

export default function QueryBox({ query, setQuery, handleSubmit }) {
  return (
    <div className="query-box">
      <input
        type="text"
        value={query}
        placeholder="Ask a question... e.g. Who approved PR #102?"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
