import React, { useState } from "react";
import { Button, Stack, Grid } from "@mui/material";
import HappyDiary from "../parts/happyDiary";
import { playVideo } from "../helper/youtubeVideoGenerator";

const Joy = () => {
  const [opendiary, setOpendiary] = useState(false);

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
                onClick={() => playVideo("happy songs")}
                // onClick={doThis}
              >
                Lets Listen Happy
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
