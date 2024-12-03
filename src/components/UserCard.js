// src/components/UserCard.js
import React from "react";
import "./UserCard.css";
const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-info">
      <img className="user-details" src={user.avatar_url} alt="user avatar" />
      <h2>{user.login}</h2>
      <p className="user-details">{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
