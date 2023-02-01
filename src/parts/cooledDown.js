import React from "react";
import car from "../assets/images/car.gif";

const CooledDown = () => {
  return (
    <>
      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "20px",
          color: "#00425A",
          fontWeight: "bold",
        }}
      >
        Yay you did it 🥳
      </div>
      <img
        src={car}
        alt="meditation"
        style={{ height: "300px", width: "370px" }}
      />
    </>
  );
};

export default CooledDown;
