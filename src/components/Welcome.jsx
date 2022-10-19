import React from "react";
import { useSelector } from "react-redux"; //geta data user

const Welcome = () => {
  const { user } = useSelector((state) => state.auth); //global state //geta data user

  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">Welcome Back {user && user.name}</h2>
    </div>
  );
};

export default Welcome;
