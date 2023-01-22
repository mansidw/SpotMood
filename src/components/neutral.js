import React from "react";
import neutral from "../assets/images/neutral.gif";

const Neutral = () => {
  return (
    <>
      <div style={{ fontFamily: "Roboto Mono" }}>
        You feel like
        <span> </span>
        <span
          style={{ fontSize: "20px", color: "#7B2869", fontWeight: "bold" }}
        >
          pastel colours 🔆
        </span>
      </div>
      <img
        src={neutral}
        alt="meditation"
        style={{ height: "300px", width: "370px" }}
      />
    </>
  );
};

export default Neutral;
