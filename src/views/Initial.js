/*global chrome*/
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { emotionDetection } from "../service/huggingFace";
import "../assets/css/Loading.css";
import Neutral from "../components/neutral";
import Joy from "../components/joy";

export function InitialView(props) {
  const [emotion, setEmotion] = useState("");
  const [opentabs, setOpentabs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await chrome.tabs.query({ currentWindow: true }, (tabs) => {
          setOpentabs(tabs.map((tab) => ({ title: tab.title, url: tab.url })));
        });
        await chrome.storage.local.get(["name"]).then((result) => {
          alert(result.name, result.artists);
        });
      } catch (e) {
        alert(e);
        props.setExtensionView("error");
      }
    })();
  }, [props]);

  useEffect(() => {
    let totalTitle = "";

    if (opentabs.length > 0) {
      totalTitle = totalTitle + opentabs.map((obj) => obj.title);

      emotionDetection({ inputs: totalTitle }).then((response) => {
        alert(JSON.stringify(response));
        if (
          response[0][0]["score"] - response[0][1]["score"] <= 0.2 &&
          (response[0][0]["label"] === "sadness" ||
            response[0][0]["label"] === "anger") &&
          (response[0][1]["label"] === "sadness" ||
            response[0][1]["label"] === "anger")
        ) {
          setEmotion("neutral");
        } else setEmotion(response[0][0]["label"]);
        // alert(response[0][0]["label"]);
      });
    }
  }, [opentabs, props]);

  return (
    <>
      <div className="center-view" style={{ paddingTop: "10px" }}>
        {!emotion ? (
          <>
            <Typography
              style={{
                width: "400px",
                textAlign: "center",
                fontFamily: "Roboto Mono",
              }}
            >
              Based on the tabs opened I suggest you are feeling...
            </Typography>
            <br />
            <div id="loaderSvgWrapper">
              <svg
                xmlnsSvg="www.w3.org/2000/svg"
                width="200px"
                height="200px"
                viewbox="0 0 200 200"
                id="preloader"
              >
                <circle cx="100" cy="100" r="3" id="red" />
                <circle cx="100" cy="100" r="8" id="orange" />
                <circle cx="100" cy="100" r="13" id="yellow" />
                <circle cx="100" cy="100" r="18" id="green" />
              </svg>
            </div>
          </>
        ) : (
          <>
            {emotion === "neutral" && <Neutral />}
            {emotion === "joy" && <Joy />}
            {emotion === "love" && <Joy />}
            {emotion === "surprise" && <Joy />}
            {emotion === "anger" && <Neutral />}
            {emotion === "fear" && <Neutral />}
            {emotion === "sadness" && <Neutral />}
            {/* <Typography
              variant="h4"
              component="h4"
              style={{ fontFamily: "Roboto Mono" }}
            >
              {emotion}
            </Typography> */}
            <Button
              size="large"
              variant="contained"
              style={{
                fontFamily: "Roboto Mono",
                marginBottom: "20px",
                backgroundColor: "#E3ACF9",
                color: "#3D1766",
              }}
              // onClick={doThis}
            >
              Get Analysis
            </Button>
          </>
        )}
        <br />
      </div>
    </>
  );
}
