// src/components/RepoList.js
import React from "react";
import "./RepoList.css";
const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) return <p>No repositories found.</p>;

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-item">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
