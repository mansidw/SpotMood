import React, { useEffect, useState } from "react";
import CooledDown from "../parts/cooledDown";
import { Button, Stack } from "@mui/material";
import { playVideo } from "../helper/youtubeVideoGenerator";
import { numberGenerator } from "../helper/randomNumberGenerator";
import Typed from "react-typed";
import giveMeAJoke from "give-me-a-joke";

const Sad = () => {
  const [cool, setCool] = useState(false);
  const [number, setNumber] = useState(0);
  const [joke, setJoke] = useState("");
  const [nextpls, setNextpls] = useState(false);
  const [happythings, setHappythings] = useState([]);
  let numbers = [0, 1, 2, 3];

  useEffect(() => {
    var storedNames = JSON.parse(localStorage.getItem("happiness"));
    setHappythings(storedNames);
  }, []);

  //   for the joke api calling
  useEffect(() => {
    giveMeAJoke.getRandomDadJoke(function (joke) {
      setJoke(joke);
    });
  }, [nextpls]);

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
            This will
            <span> </span>
            <span
              style={{ fontSize: "20px", color: "#00425A", fontWeight: "bold" }}
            >
              PASS TOOO 🥺...
            </span>
          </div>

          {number === 0 && joke && (
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
                😆 LOL 😆
              </div>
              <div
                style={{
                  fontFamily: "Roboto Mono",
                  fontSize: "20px",
                  color: "#00425A",
                  paddingTop: "10px",
                }}
              >
                {joke}
              </div>
              <Button
                size="large"
                variant="contained"
                style={{
                  fontFamily: "Roboto Mono",
                  backgroundColor: "#FF8B13",
                  color: "white",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                onClick={() => setNextpls(!nextpls)}
              >
                Next Please ▶️
              </Button>
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
              onClick={() => playVideo("funny animal videos")}
            >
              Just make me smile :(
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
              onClick={() => playVideo("happy songs")}
            >
              Listen to Music!
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
              I'm happpy now!
            </Button>
          </Stack>
        </>
      ) : (
        <CooledDown />
      )}
    </>
  );
};

export default Sad;
