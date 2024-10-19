import React from "react";
import "./AgendaTopic.css";
import { imagen } from "../assets/Vector.png";

const AgendaTopic = ({ number, topic, code }) => {
  return (
    <section>
      <div>
        <p>{number}</p>
      </div>
      <p>{topic}</p>
      <div>
        <p>{code}</p>
        <img src={imagen} alt="" />
      </div>
    </section>
  );
};

export default AgendaTopic;
