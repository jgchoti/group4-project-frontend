import React, { useState, useEffect } from "react";

const WelcomeMessage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUsername(user.username);
    }
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      {isLoggedIn && (
        <div className="welcome-message">
          <h2>Welcome! {username}</h2>
        </div>
      )}
    </>
  );
};
export default WelcomeMessage;
