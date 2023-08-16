import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserAvatar from "./UserAvatar"; // Correct the import statement

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get the logged in user's username from the API.
    if (isLoggedIn) {
      const fetchUsername = async () => {
        const response = await fetch("/api/user/username");
        const data = await response.json();
        setUsername(data.username);
      };
      fetchUsername();
    }
  }, [isLoggedIn]);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <UserAvatar username={username} />
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
