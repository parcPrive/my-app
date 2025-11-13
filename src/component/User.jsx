import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <h3>{user.email}</h3>
    </div>
  );
};

export default User;
