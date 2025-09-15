import React, { useState } from "react";
import "./Landing.css";

import Header from "../../components/Header/Header";
import QueryBox from "../../components/QueryBox/QueryBox";
import EvidencePanel from "../../components/EvidencePanel/EvidencePanel";
import HistoryPanel from "../../components/HistoryPanel/HistoryPanel";
import UpLoadBox from "../../components/UpLoadBox/UpLoadBox";

export default function Landing() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [log, setLog] = useState([]); 
  const [sources, setSources] = useState({
    github: true,
    jira: true,
    documents: true,
    slack: false,
  });
  const [selectedSearch, setSelectedSearch] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);

  // Append a log entry
  const appendLog = (msg, results = []) => {
    const entry = { ts: new Date().toISOString(), msg, results };
    setLog((l) => [...l, entry]);
  };

  // Toggle sources
  const toggleSource = (key) => {
    setSources((s) => ({ ...s, [key]: !s[key] }));
    appendLog(`Toggled source: ${key}`);
  };

  // Handle submitting a new query
  // const handleSubmit = () => {
  //   if (!query.trim()) return;

  //   let newResults = [];
  //   if (
  //     query.toLowerCase().includes("security related open pull requests")
  //   ) {
  //     newResults.push({
  //       id: "SEC-PRS",
  //       title: "Security Related Open Pull Requests",
  //       due: "Sept 13, 2025",
  //       owner: "System",
  //       status: "10 pull requests found",
  //       color: "red",
  //       source: "GitHub",
  //       details: {
  //         summary: "Total Results: 10 pull requests found",
  //         status: "Success (200 OK)",
  //         searchQuery: "is:pr+is:public+security+label:security",
  //         topPRs: [
  //           "Microsoft Azure Linux - CVE-2025-10148 Patches",
  //           "PR #14675: Patch cmake for CVE-2025-10148 [MEDIUM]",
  //           "PR #14674: Patch curl for CVE-2025-10148 [MEDIUM]",
  //           "PR #14673: Patch erlang for CVE-2025-48041, CVE-2025-48040, CVE-2025-48038 [MEDIUM]",
  //           "SheepReaper/Sheep.CommandAndControl - Vite Security Updates",
  //           "PR #1139: Vite updates for CVE-2025-58751 and CVE-2025-58752 (Merged, closed)",
  //           "OpenJDK - Security Test Fixes",
  //           "PR #27269: AlgorithmConstraints test failure fix (Open, ready for review)",
  //         ],
  //         keyData: {
  //           repositories: [
  //             "Microsoft Azure Linux",
  //             "SheepReaper",
  //             "OpenJDK",
  //             "University of Helsinki",
  //           ],
  //           labels: "All PRs tagged with 'security' label",
  //           cves: [
  //             "CVE-2025-10148",
  //             "CVE-2025-48041",
  //             "CVE-2025-48040",
  //             "CVE-2025-48038",
  //             "CVE-2025-58751",
  //             "CVE-2025-58752",
  //           ],
  //           recentActivity: "All created within the last few hours (Sept 13, 2025)",
  //           authors: ["azurelinux-security", "renovate[bot]", "jaikiran"],
  //         },
  //       },
  //     });
  //   }
  //   // 🔹 Other sample queries
  //   else if (sources.github && query.toLowerCase().includes("pr")) {
  //     newResults.push({
  //       id: "PR#102",
  //       title: "Pull Request #102",
  //       due: "Mar 10, 2025",
  //       owner: "Alice",
  //       status: "Merged without approval",
  //       color: "blue",
  //       source: "GitHub",
  //     });
  //   }
  //   if (sources.jira && query.toLowerCase().includes("access")) {
  //     newResults.push({
  //       id: "JIRA-123",
  //       title: "Access Request",
  //       due: "Mar 12, 2025",
  //       owner: "Bob",
  //       status: "Approved",
  //       color: "teal",
  //       source: "Jira",
  //     });
  //   }
  //   if (sources.documents && query.toLowerCase().includes("laptop")) {
  //     newResults.push({
  //       id: "ASSET-REG",
  //       title: "Laptop Assets",
  //       due: "Mar 15, 2025",
  //       owner: "System",
  //       status: "12 laptops found",
  //       color: "purple",
  //       source: "Documents",
  //     });
  //   }
  //   if (sources.slack && query.toLowerCase().includes("discussion")) {
  //     newResults.push({
  //       id: "SLACK-001",
  //       title: "Slack Thread",
  //       due: "Mar 16, 2025",
  //       owner: "Team Channel",
  //       status: "Discussion captured",
  //       color: "orange",
  //       source: "Slack",
  //     });
  //   }

  //   if (!newResults.length) {
  //     newResults.push({
  //       id: "NONE",
  //       title: "No Evidence Found",
  //       due: "-",
  //       owner: "System",
  //       status: "No results from selected sources",
  //       color: "blue",
  //       source: "-",
  //     });
  //   }

  //     // 🔹 Trigger API call (does not affect UI/logic)
  // fetch("http://localhost:3001/api/evidence", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ query }),
  // }).catch((err) => {
  //   console.warn("API call failed:", err);
  // });

  //   appendLog(`Query submitted: "${query}"`, newResults);
  //   setResults(newResults);
  //   setSelectedSearch({ msg: query, results: newResults });
  //   setQuery("");
  // };

  const handleSubmit = () => {
  if (!query.trim()) return;

  let newResults = [];

  // 🔹 Hardcoded responses for specific queries
  if (query === "Get the security related open pull requests") {
    newResults.push({
      id: "SEC-PRS",
      title: "Security Related Open Pull Requests",
      due: "Sept 13, 2025",
      owner: "System",
      status: "10 pull requests found",
      color: "red",
      source: "GitHub",
      details: {
        summary: "Total Results: 10 pull requests found",
        status: "Success (200 OK)",
        searchQuery: "is:pr+is:public+security+label:security",
        topPRs: [
          "Microsoft Azure Linux - CVE-2025-10148 Patches",
          "PR #14675: Patch cmake for CVE-2025-10148 [MEDIUM]",
          "PR #14674: Patch curl for CVE-2025-10148 [MEDIUM]",
          "PR #14673: Patch erlang for CVE-2025-48041, CVE-2025-48040, CVE-2025-48038 [MEDIUM]",
          "SheepReaper/Sheep.CommandAndControl - Vite Security Updates",
          "PR #1139: Vite updates for CVE-2025-58751 and CVE-2025-58752",
        ],
        statusDetails: "Status: Merged (closed)",
      },
    });
  } else if (query === "What tasks are active for this sprint") {
    newResults.push({
      id: "SPRINT-TASKS",
      title: "Active Sprint Tasks",
      due: "Sept 13, 2025",
      owner: "System",
      status: "ISSUES FOUND",
      color: "blue",
      source: "Jira",
      details: {
        issues: [
          {
            id: "MOCK-1",
            summary: "Mock Issue: Show me all tickets assigned to John that are in progress - Security vulnerability",
            type: "Bug",
            status: "To Do",
            priority: "High",
            assignee: "Mock User 1 (mock1@example.com)",
            created: "2025-09-12T10:00:00.000+0530",
            updated: "2025-09-12T15:30:00.000+0530",
            labels: ["security", "high-priority", "mock"],
            relevanceScore: 9.2,
            url: "https://sprint-demo.atlassian.net/browse/MOCK-1",
            description: "This is a mock JIRA issue related to Show me all tickets assigned to John that are in progress. It demonstrates a security vulnerability that needs to be addressed.",
          },
          {
            id: "MOCK-2",
            summary: "Mock Issue: Show me all tickets assigned to John that are in progress - Feature request",
            type: "Story",
            status: "In Progress",
            priority: "Medium",
            assignee: "Mock Developer (dev@example.com)",
            created: "2025-09-11T14:20:00.000+0530",
            updated: "2025-09-12T12:45:00.000+0530",
            labels: ["feature", "enhancement", "mock"],
            relevanceScore: 7.8,
            url: "https://sprint-demo.atlassian.net/browse/MOCK-2",
            description: "This mock JIRA issue represents a feature request related to Show me all tickets assigned to John that are in progress. It includes detailed requirements and acceptance criteria.",
          },
        ],
        summaryStatistics: {
          priorityDistribution: { High: 1, Medium: 1 },
          statusDistribution: { "In Progress": 1, "To Do": 1 },
          issueTypeDistribution: { Bug: 1, Story: 1 },
          relevanceScores: { average: 8.5, highest: 9.2, lowest: 7.8 },
        },
      },
    });
  } else {
    // 🔹 Fallback for other queries
    newResults.push({
      id: "NONE",
      title: "No Evidence Found",
      due: "-",
      owner: "System",
      status: "No results from selected sources",
      color: "blue",
      source: "-",
    });
  }

  appendLog(`Query submitted: "${query}"`, newResults);
  setResults(newResults);
  setSelectedSearch({ msg: query, results: newResults });
  setQuery("");
};


  const handleSelectSearch = (item) => {
    setSelectedSearch(item);
    setResults(item.results || []);
    setSelectedResult(null);
  };

  return (
    <div
      className="landing"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <div className="layout" style={{ flex: 1, display: "flex" }}>
        <aside className="sidebar">
          <div className="sources">
            <h3>Sources</h3>
            {Object.keys(sources).map((key) => (
              <label key={key} className="checkbox">
                <input
                  type="checkbox"
                  checked={sources[key]}
                  onChange={() => toggleSource(key)}
                />
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
            ))}
          </div>

          <UpLoadBox appendLog={appendLog} />

          <HistoryPanel
            log={log}
            selected={selectedSearch}
            onSelect={handleSelectSearch}
          />
        </aside>

        <main className="main">
          <QueryBox query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
          <EvidencePanel
            results={results}
            onSelectResult={(res) => setSelectedResult(res)}
          />

          {selectedResult && selectedResult.details && (
            <div className="result-table">
              <h3>Security PR Details</h3>
              <p><strong>Summary:</strong> {selectedResult.details.summary}</p>
              <p><strong>Status:</strong> {selectedResult.details.status}</p>
              <p><strong>Search Query:</strong> {selectedResult.details.searchQuery}</p>
              <p><strong>Top Security PRs Found:</strong></p>
              <ul>
                {selectedResult.details.topPRs.map((pr, i) => (
                  <li key={i}>{pr}</li>
                ))}
              </ul>
              <p><strong>Key Data Points:</strong></p>
              <ul>
                <li>Repositories: {selectedResult.details.keyData.repositories.join(", ")}</li>
                <li>Labels: {selectedResult.details.keyData.labels}</li>
                <li>CVEs Addressed: {selectedResult.details.keyData.cves.join(", ")}</li>
                <li>Recent Activity: {selectedResult.details.keyData.recentActivity}</li>
                <li>Authors: {selectedResult.details.keyData.authors.join(", ")}</li>
              </ul>
            </div>
          )}
        </main>
      </div>

      <footer
        style={{
          padding: "10px",
          textAlign: "center",
          fontSize: "12px",
          color: "#f3eeeeff",
          backgroundColor: "#181717ff",
        }}
      >
        This is AI Generated Response and can make mistakes. Check important info. See Cookie Preferences.
      </footer>
    </div>
  );
}
