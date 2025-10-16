import React from "react";
import "./App.css";

function GitHubAvatar() {
  const avatarUrl = "https://avatars.githubusercontent.com/aomo23"; 
  return (
    <img
      src={avatarUrl}
      alt="GitHub Avatar"
      className="avatar"
    />
  );
}

function GitHubRepoURL() {
  const repoUrl = "https://github.com/aomo23"; 
  return (
    <p>
      <a href={repoUrl} target="_blank" rel="noreferrer">
        My GitHub repository
      </a>
    </p>
  );
}

function GitHubInfo() {
  return (
    <div className="info-container">
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <GitHubInfo />
    </div>
  );
}

export default App;
