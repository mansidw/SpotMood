import React from "react";
import neutral from "../assets/images/neutral.gif";

const Neutral = () => {
  return (
    <>
      <div style={{ fontFamily: "Roboto Mono" }}>
        You feel as
        <span> </span>
        <span
          style={{ fontSize: "20px", color: "#7B2869", fontWeight: "bold" }}
        >
          NEUTRAL
        </span>
        <span> </span>
        as
        <span> </span>
        <span
          style={{ fontSize: "20px", color: "#3D1766", fontWeight: "bold" }}
        >
          WATER 🌊
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
