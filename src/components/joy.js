/* global chrome*/
import React from "react";
import { Button, Stack, Grid } from "@mui/material";
// import { searchMusics } from "node-youtube-music";

const Joy = () => {
  const playVideo = async () => {
    let artists;
    let videoId = "20poedr";
    await chrome.storage.local.get(["artists"]).then((result) => {
      artists = Array.from(result.artists);
      // alert(artists[0].slice(0, -2));
    });
    // const musics = await searchMusics("Never gonna give you up");
    // alert(musics);

    chrome.tabs.create({ url: `https://www.youtube.com/watch?v=${videoId}` });
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
              // onClick={doThis}
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
    </>
  );
};

export default Joy;
