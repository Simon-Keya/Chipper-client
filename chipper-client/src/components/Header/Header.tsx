import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar/UserAvatar";
import './Header.scss';

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null); // Add avatarUrl state

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserData = async () => {
        try {
          const response = await fetch("/api/user/data");
          const data = await response.json();
          setUsername(data.username);
          setAvatarUrl(data.avatarUrl); // Set the avatarUrl from the API response
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUserData();
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
            {username && avatarUrl && ( // Check both username and avatarUrl before rendering
              <UserAvatar username={username} avatarUrl={avatarUrl} />
            )}
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
