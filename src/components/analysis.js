/* global chrome*/
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Analysis() {
  const [config, setConfig] = useState();

  useEffect(() => {
    (async () => {
      await chrome.storage.local.get({ count: [] }).then((result) => {
        setConfig({
          labels: [
            "Happiness 😄",
            "Anger 😠",
            "Sadness 😢",
            "Fear 😨",
            "Neutral 😐",
          ],
          datasets: [
            {
              label: "Days you were this...",
              data: result.count,
              backgroundColor: [
                "#FFEA20",
                "#D61355",
                "#BDCDD6",
                "#20262E",
                "#C7D36F",
              ],
              borderColor: [
                "#FFEA20",
                "#D61355",
                "#BDCDD6",
                "#20262E",
                "#C7D36F",
              ],
              borderWidth: 1,
            },
          ],
        });
      });
    })();
  }, []);

  return (
    <>
      <div
        style={{
          fontFamily: "Roboto Mono",
          fontSize: "15px",
        }}
      >
        Your
        <span> </span>
        <span
          style={{ fontSize: "20px", color: "#00425A", fontWeight: "bold" }}
        >
          MOOD ANALYSIS 🌈
        </span>
      </div>
      {config && <Doughnut data={config} />}
    </>
  );
}

export default Analysis;
