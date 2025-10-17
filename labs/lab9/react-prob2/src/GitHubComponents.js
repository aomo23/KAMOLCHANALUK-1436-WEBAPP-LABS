import React from "react";

export function GitHubAvatar({ imgURL, alt, size = 50 }) {
  return (
    <img
      src={imgURL}
      alt={size}
      width={200}
      height={200}
    />
  );
}

export function GitHubRepoURL({ url }) {
  return (
    <p>
      <a href={url} target="_blank" rel="noreferrer" style={{ color: "purple", fontWeight: "bold" }}>
        GitHub repository
      </a>
    </p>
  );
}
