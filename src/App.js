// src/App.js
import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGitHubData = async (username) => {
    setLoading(true);
    setError("");
    try {
      // Fetch user data
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(userResponse.data);

      // Fetch repositories data
      const reposResponse = await axios.get(userResponse.data.repos_url);
      setRepos(reposResponse.data);
    } catch (err) {
      setError("User not found or API error");
      setUser(null);
      setRepos([]);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1>GitHub Finder</h1>
        <p>Search for GitHub users and their repositories.</p>
        <p>Make sure you type username of the Github User with no spaces :)</p>
      </div>
      <Search onSearch={fetchGitHubData} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <UserCard user={user} />
      <RepoList repos={repos} />
    </div>
  );
};

export default App;
