/* global chrome*/
import React, { useState } from "react";
import { Button, Stack, Grid } from "@mui/material";
import youtubesearchapi from "youtube-search-api";
import HappyDiary from "../parts/happyDiary";

const Joy = () => {
  const [opendiary, setOpendiary] = useState(false);
  const playVideo = async () => {
    let artists;
    await chrome.storage.local.get(["artists"]).then((result) => {
      artists = Array.from(result.artists);
    });

    for (let i of artists) {
      youtubesearchapi
        .GetListByKeyword(`${i.slice(0, -2)} happy songs`)
        .then((res) => {
          if (res["items"].length > 0) {
            chrome.tabs.create({
              url: `https://www.youtube.com/watch?v=${res["items"][0]["id"]}`,
            });
          }
        });
    }
  };

  const openDiary = () => setOpendiary(true);
  const closeDiary = (things) => {
    console.log(things);
    let onlyNames = things.map((item) => item.taskDiscription);
    localStorage.setItem("happiness", JSON.stringify(onlyNames));
    setOpendiary(false);
  };
  return (
    <>
      <div style={{ fontFamily: "Roboto Mono" }}>
        You feel like
        <span> </span>
        <span
          style={{ fontSize: "20px", color: "#B08BBB", fontWeight: "bold" }}
        >
          a HAPPY flower 🌺
        </span>
      </div>
      {!opendiary ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Stack
            spacing={2}
            style={{
              paddingTop: "20px",
              paddingBottom: "10px",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Button
                size="large"
                variant="contained"
                style={{
                  fontFamily: "Roboto Mono",
                  backgroundColor: "#F1F7B5",
                  color: "#243763",
                }}
                onClick={openDiary}
              >
                Happy Diary
              </Button>
              <Button
                size="large"
                variant="contained"
                style={{
                  fontFamily: "Roboto Mono",
                  backgroundColor: "#F1F7B5",
                  color: "#243763",
                }}
                onClick={playVideo}
                // onClick={doThis}
              >
                Lets Listen
              </Button>
            </Stack>
          </Stack>
        </Grid>
      ) : (
        <Stack
          spacing={2}
          style={{
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <HappyDiary closeDiary={closeDiary} />
        </Stack>
      )}
    </>
  );
};

export default Joy;
