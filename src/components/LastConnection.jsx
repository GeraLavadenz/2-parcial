import React from "react";
import "./LastConnection.css";

const LastConnection = (fecha) => {
  return (
    <div>
      <span>Last Updated</span>
      <span>{fecha}</span>
    </div>
  );
};

export default LastConnection;
