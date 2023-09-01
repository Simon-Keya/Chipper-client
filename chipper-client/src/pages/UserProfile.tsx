import React, { useState, useEffect } from "react";
import { auth } from "../services/auth";
import UserProfileComponent from "../components/UserProfile";

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<any>(null); // Adjust the type as per your user object structure

  const getUser = async () => {
    try {
      const userFromApi = await auth.getUserProfile();
      setUser(userFromApi);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <UserProfileComponent user={user} />;
};

export default UserProfile;
