import React, { useState } from "react";
import "../assets/css/angry.css";
import { Button, Stack } from "@mui/material";
import CooledDown from "../parts/cooledDown";

const Angry = () => {
  const [number, setNumber] = useState(0);
  const [cool, setCool] = useState(0);
  let numbers = [0, 1, 2, 3];
  let newarr = [];
  function shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }
  function numberGenerator() {
    if (newarr.length === 0) {
      newarr = shuffle(numbers);
    }
    setNumber(newarr.pop());
  }

  return (
    <>
      {!cool ? (
        <>
          <div
            style={{
              fontFamily: "Roboto Mono",
              paddingBottom: "68px",
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
            <div class="illustration">
              <div class="yogi-lady">
                <div class="breath">
                  <div class="inhale"></div>
                  <div class="exhale"></div>
                  <div class="hold hold1"></div>
                  <div class="hold hold2"></div>
                  <span class="text inhale-text">inhale</span>
                  <span class="text hold1-text">hold</span>
                  <span class="text exhale-text">exhale</span>
                  <span class="text hold2-text">hold</span>
                </div>
                <div class="hair">
                  <div class="face-up">
                    <div class="eyes"></div>
                  </div>
                  <div class="face body">
                    <div class="nose"></div>
                    <div class="lips"></div>
                  </div>
                  <div class="neck body"></div>
                  <div class="tshirt"></div>
                  <div class="decoltee body"></div>
                </div>
                <div class="arms body"></div>
                <div class="right-hand body">
                  <div class="right-hand-in">
                    <div class="finger finger-1"></div>
                    <div class="finger finger-2"></div>
                    <div class="finger finger-3"></div>
                    <div class="finger finger-4"></div>
                  </div>
                </div>
                <div class="left-hand body">
                  <div class="left-hand-in">
                    <div class="finger-l finger-l-1"></div>
                    <div class="finger-l finger-l-2"></div>
                    <div class="finger-l finger-l-3"></div>
                    <div class="finger-l finger-l-4"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {number === 1 && <p>second type</p>}
          {number === 2 && <p>tird type</p>}
          {number === 3 && <p>fourth type</p>}

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
              onClick={numberGenerator}
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
