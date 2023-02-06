import React, { useState, useEffect } from "react";
import "../assets/css/angry.css";
import { Button, Stack } from "@mui/material";
import CooledDown from "../parts/cooledDown";
import calmdown from "../assets/images/calmdown.gif";
import waves from "../assets/images/waves.gif";
import tree from "../assets/images/tree.gif";
import dolphins from "../assets/images/dolphins.gif";
import Typed from "react-typed";
import { playVideo } from "../helper/youtubeVideoGenerator";
import { numberGenerator } from "../helper/randomNumberGenerator";

const Angry = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [cool, setCool] = useState(0);
  const [happythings, setHappythings] = useState([]);
  let numbers = [0, 1, 2, 3];

  useEffect(() => {
    var storedNames = JSON.parse(localStorage.getItem("happiness"));
    setHappythings(storedNames);
  }, []);

  return (
    <>
      {!cool ? (
        <>
          <div
            style={{
              fontFamily: "Roboto Mono",
              fontSize: "15px",
            }}
          >
            Why so
            <span> </span>
            <span
              style={{ fontSize: "20px", color: "#00425A", fontWeight: "bold" }}
            >
              CROSS 😠?
            </span>
          </div>
          {/* breathing exercise */}
          {number === 0 && (
            <div class="main">
              <div class="wrap">
                <div class="center">
                  <p class="exhale">exhale</p>
                  <div class="breathe-ball center">
                    <p class="inhale">inhale</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {number === 1 && (
            <>
              <div
                style={{
                  fontFamily: "Roboto Mono",
                  fontSize: "20px",
                  color: "#00425A",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                R-E-L-A-X 🌔
              </div>
              {number2 === 0 && (
                <img
                  src={calmdown}
                  alt="meditation"
                  style={{ height: "300px", width: "370px" }}
                />
              )}
              {number2 === 1 && (
                <img
                  src={waves}
                  alt="meditation"
                  style={{ height: "300px", width: "370px" }}
                />
              )}
              {number2 === 2 && (
                <img
                  src={tree}
                  alt="meditation"
                  style={{ height: "300px", width: "370px" }}
                />
              )}
              {number2 === 3 && (
                <img
                  src={dolphins}
                  alt="meditation"
                  style={{ height: "300px", width: "370px" }}
                />
              )}
            </>
          )}
          {number === 2 && (
            <Button
              size="large"
              variant="contained"
              style={{
                fontFamily: "Roboto Mono",
                backgroundColor: "#F1F7B5",
                color: "#243763",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              onClick={() => playVideo("calm songs")}
            >
              Listen to Calmness
            </Button>
          )}
          {number === 3 && happythings && (
            <>
              <div id="colours">Remember</div>
              <div style={{ marginBottom: "20px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    color: "#00425A",
                  }}
                >
                  SMILE because you have
                </span>
                <span> </span>

                <Typed
                  strings={happythings}
                  typeSpeed={60}
                  loop
                  style={{ fontSize: "22px", fontWeight: "bold" }}
                />
              </div>
            </>
          )}

          <Stack
            direction="row"
            spacing={2}
            style={{
              paddingBottom: "10px",
            }}
          >
            <Button
              size="large"
              variant="contained"
              style={{
                fontFamily: "Roboto Mono",
                backgroundColor: "#F1F7B5",
                color: "#243763",
                marginTop: "6px",
              }}
              onClick={() => {
                setNumber(numberGenerator(numbers));
                setNumber2(Math.floor(Math.random() * 4));
              }}
            >
              Something Else
            </Button>
            <Button
              size="large"
              variant="contained"
              style={{
                fontFamily: "Roboto Mono",
                backgroundColor: "#F1F7B5",
                color: "#243763",
                marginTop: "6px",
              }}
              onClick={() => setCool(1)}
            >
              I'm cooool now!
            </Button>
          </Stack>
        </>
      ) : (
        <CooledDown />
      )}
    </>
  );
};

export default Angry;
