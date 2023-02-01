/* global chrome*/
import React, { useState } from "react";
import "../assets/css/angry.css";
import { Button, Stack } from "@mui/material";
import CooledDown from "../parts/cooledDown";
import calmdown from "../assets/images/calmdown.gif";
import waves from "../assets/images/waves.gif";
import tree from "../assets/images/tree.gif";
import dolphins from "../assets/images/dolphins.gif";
import youtubesearchapi from "youtube-search-api";

const Angry = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [cool, setCool] = useState(0);
  let numbers = [0, 1, 2, 3];
  let newarr = [];

  const playVideo = async () => {
    let artists;
    await chrome.storage.local.get(["artists"]).then((result) => {
      artists = Array.from(result.artists);
    });

    for (let i of artists) {
      youtubesearchapi
        .GetListByKeyword(`${i.slice(0, -2)} calm songs`)
        .then((res) => {
          if (res["items"].length > 0) {
            chrome.tabs.create({
              url: `https://www.youtube.com/watch?v=${res["items"][0]["id"]}`,
            });
          }
        });
    }
  };

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
    setNumber2(Math.floor(Math.random() * 4));
  }

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
              onClick={playVideo}
            >
              Listen to Calmness
            </Button>
          )}
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
