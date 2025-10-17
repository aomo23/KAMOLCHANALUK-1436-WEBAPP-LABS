// src/App.js
import React from "react";
import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";
import "./App.css";

export default function GitHubInfo() {
  const userInfo = {
    url: "https://github.com/aomo23",
    imgURL: "https://avatars.githubusercontent.com/aomo23", 
    alt: "Kamolchanaluk Nedpitool", 
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}
