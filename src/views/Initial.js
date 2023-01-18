import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { emotionDetection } from "../service/huggingFace";

export function InitialView(props) {
  const [emotion, setEmotion] = useState("");

  useEffect(() => {
    let totalTitle = "";
    if (props.tabs.length) {
      totalTitle = totalTitle + props.tabs.map((obj) => obj.title);
      emotionDetection({ inputs: totalTitle }).then((response) => {
        setEmotion(response[0][0]["label"]);
        alert(JSON.stringify(response));
      });
    }
  }, [props.tabs]);

  const doThis = () => {
    props.loadSentiment();
  };
  return (
    <>
      <div className="center-view" style={{ paddingTop: "10px" }}>
        <Typography
          style={{
            width: "400px",
            textAlign: "center",
            fontFamily: "Roboto Mono",
          }}
        >
          Based on the tabs opened I suggest...
        </Typography>
        <br />
        {!emotion ? (
          <Button
            size="large"
            variant="contained"
            color="success"
            style={{ fontFamily: "Roboto Mono" }}
            onClick={doThis}
          >
            Get Sentiment
          </Button>
        ) : (
          <Typography
            variant="h4"
            component="h4"
            style={{ fontFamily: "Roboto Mono" }}
          >
            {emotion}
          </Typography>
        )}
        <br />
      </div>
      {/* <div style={{ marginTop: "-31px" }} >
                <Footer />
            </div> */}
    </>
  );
}
