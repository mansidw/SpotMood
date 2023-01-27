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

        await chrome.storage.local.get({ count: [] }).then((result) => {
          alert(result.count);
        });
      } catch (e) {
        alert("not loaded");
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
        let finalEmotion;
        // if (
        //   response[0][0]["score"] - response[0][1]["score"] <= 0.2 &&
        //   (response[0][0]["label"] === "sadness" ||
        //     response[0][0]["label"] === "anger") &&
        //   (response[0][1]["label"] === "sadness" ||
        //     response[0][1]["label"] === "anger")
        // ) {
        //   finalEmotion = "neutral";
        //   setEmotion("neutral");
        // } else {
        //   finalEmotion = response[0][0]["label"];
        //   setEmotion(response[0][0]["label"]);
        // }
        if (
          response[0][0]["label"] === "love" ||
          response[0][0]["label"] === "admiration" ||
          response[0][0]["label"] === "approval" ||
          response[0][0]["label"] === "joy" ||
          response[0][0]["label"] === "caring" ||
          response[0][0]["label"] === "gratitude" ||
          response[0][0]["label"] === "optimisim" ||
          response[0][0]["label"] === "excitement" ||
          response[0][0]["label"] === "desire" ||
          response[0][0]["label"] === "curiosity" ||
          response[0][0]["label"] === "realization" ||
          response[0][0]["label"] === "amusement" ||
          response[0][0]["label"] === "surprise" ||
          response[0][0]["label"] === "pride" ||
          response[0][0]["label"] === "relief"
        ) {
          finalEmotion = "happy";
          setEmotion("happy");
        } else if (
          response[0][0]["label"] === "annoyance" ||
          response[0][0]["label"] === "disapproval" ||
          response[0][0]["label"] === "anger" ||
          response[0][0]["label"] === "disgust"
        ) {
          finalEmotion = "anger";
          setEmotion("anger");
        } else if (
          response[0][0]["label"] === "confusion" ||
          response[0][0]["label"] === "sadness" ||
          response[0][0]["label"] === "disappointment" ||
          response[0][0]["label"] === "remorse" ||
          response[0][0]["label"] === "embarrassment" ||
          response[0][0]["label"] === "grief"
        ) {
          finalEmotion = "sadness";
          setEmotion("sadness");
        } else if (
          response[0][0]["label"] === "fear" ||
          response[0][0]["label"] === "nervousness"
        ) {
          finalEmotion = "fear";
          setEmotion("fear");
        } else {
          finalEmotion = "neutral";
          setEmotion("neutral");
        }
        chrome.storage.local.get({ count: [] }).then((result) => {
          if (result.count[0] === undefined) {
            if (finalEmotion === "happy") {
              chrome.storage.local
                .set({ count: [1, 0, 0, 0, 0] })
                .then(() => {});
            } else if (finalEmotion === "anger") {
              chrome.storage.local
                .set({ count: [0, 1, 0, 0, 0] })
                .then(() => {});
            } else if (finalEmotion === "sadness") {
              chrome.storage.local
                .set({ count: [0, 0, 1, 0, 0] })
                .then(() => {});
            } else if (finalEmotion === "fear") {
              chrome.storage.local
                .set({ count: [0, 0, 0, 1, 0] })
                .then(() => {});
            } else {
              chrome.storage.local
                .set({ count: [0, 0, 0, 0, 1] })
                .then(() => {});
            }
          } else {
            let first = result.count[0];
            let second = result.count[1];
            let third = result.count[2];
            let fourth = result.count[3];
            let fifth = result.count[4];
            if (finalEmotion === "happy") {
              chrome.storage.local
                .set({ count: [first + 1, second, third, fourth, fifth] })
                .then(() => {});
            } else if (finalEmotion === "anger") {
              chrome.storage.local
                .set({ count: [first, second + 1, third, fourth, fifth] })
                .then(() => {});
            } else if (finalEmotion === "sadness") {
              chrome.storage.local
                .set({ count: [first, second, third + 1, fourth, fifth] })
                .then(() => {});
            } else if (finalEmotion === "fear") {
              chrome.storage.local
                .set({ count: [first, second, third, fourth + 1, fifth] })
                .then(() => {});
            } else {
              chrome.storage.local
                .set({ count: [first, second, third, fourth, fifth + 1] })
                .then(() => {});
            }
          }
        });
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
            {emotion === "happy" && <Joy />}
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
