import React, { useState } from "react";
import { Button, Stack, Grid } from "@mui/material";

const Joy = () => {
  const [listen, setListen] = useState();
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
              // onClick={doThis}
            >
              Goals Diary
            </Button>
          </Stack>

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
              Lets Listen
            </Button>
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
              Fear Diary
            </Button>
          </Stack>
        </Stack>
      </Grid>

      <iframe
        className="video"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/2g811Eo7K8U?autoplay=0`}
      ></iframe>
    </>
  );
};

export default Joy;
