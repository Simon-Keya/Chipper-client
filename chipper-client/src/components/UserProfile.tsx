import React from "react";

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    // Add other user properties here
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Render other user information */}
    </div>
  );
};

export default UserProfile;
