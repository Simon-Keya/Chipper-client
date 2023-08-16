import React, { useState } from "react";
import { auth } from "../services/auth";
import { UserProfile } from "../components/UserProfile";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const userFromApi = await auth.getUserProfile();
    setUser(userFromApi);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return (
      <div>Loading...</div>
    );
  }

  return <UserProfile user={user} />;
};

export default UserProfile;
