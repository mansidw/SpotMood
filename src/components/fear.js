import React, { useEffect, useState } from "react";
import axios from "axios";
import CooledDown from "../parts/cooledDown";
import { Button, Stack } from "@mui/material";
import { playVideo } from "../helper/youtubeVideoGenerator";
import { numberGenerator } from "../helper/randomNumberGenerator";

const Fear = () => {
  const [inspiration, setInspiration] = useState();
  const [cool, setCool] = useState(false);
  const [number, setNumber] = useState(0);
  let numbers = [0, 1, 2];
  useEffect(() => {
    axios
      .get("https://zenquotes.io/api/random")
      .then((res) => {
        setInspiration(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
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
            Let go of your
            <span> </span>
            <span
              style={{ fontSize: "20px", color: "#00425A", fontWeight: "bold" }}
            >
              FEAR 🦌
            </span>
          </div>

          {number === 0 && inspiration && (
            <>
              <div
                style={{
                  fontFamily: "Roboto Mono",
                  fontSize: "20px",
                  color: "#00425A",
                  paddingTop: "10px",
                  fontWeight: "bold",
                }}
              >
                QUOTE QUOTA 📎
              </div>
              <div
                style={{
                  fontFamily: "Roboto Mono",
                  fontSize: "20px",
                  color: "#00425A",
                  paddingTop: "10px",
                }}
              >
                {inspiration["data"][0]["q"]}
              </div>
            </>
          )}

          {number === 1 && (
            <Button
              size="large"
              variant="contained"
              style={{
                fontFamily: "Roboto Mono",
                backgroundColor: "#FF8B13",
                color: "black",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              onClick={() => playVideo("happy songs")}
            >
              Listen to Calmness
            </Button>
          )}

          {number === 2 && (
            <Button
              size="large"
              variant="contained"
              style={{
                fontFamily: "Roboto Mono",
                backgroundColor: "#FF8B13",
                color: "black",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              onClick={() => playVideo("motivational fearless talks")}
            >
              Motivation 101 🧲
            </Button>
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
                backgroundColor: "#FF8B13",
                color: "black",
                marginTop: "6px",
              }}
              onClick={() => setNumber(numberGenerator(numbers))}
            >
              Something Else
            </Button>
            <Button
              size="large"
              variant="contained"
              style={{
                fontFamily: "Roboto Mono",
                backgroundColor: "#FF8B13",
                color: "black",
                marginTop: "6px",
              }}
              onClick={() => setCool(1)}
            >
              I'm fearlesss now!
            </Button>
          </Stack>
        </>
      ) : (
        <CooledDown />
      )}
    </>
  );
};

export default Fear;
