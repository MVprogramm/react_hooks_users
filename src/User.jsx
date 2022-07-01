import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState(null);
  const { USER_ID } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${USER_ID}`)
      .then((res) => res.json())
      .then((userData) => setUserData(userData));
  }, [USER_ID]);

  if (!userData) return null;

  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
