import React from "react";
import { Image } from "react-bootstrap";

type AvatarProps = {
  username: string;
  avatarUrl: string;
};
const UserAvatar: React.FC<AvatarProps> = ({ username, avatarUrl }) => {
  return (
    <div className="user-avatar">
      <Image src={avatarUrl} alt={`${username}'s Avatar`} roundedCircle />
      <p>{username}</p>
    </div>
  );
};

export default UserAvatar;
