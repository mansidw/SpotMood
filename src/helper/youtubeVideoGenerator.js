/* global chrome*/
import youtubesearchapi from "youtube-search-api";

export const playVideo = async (daya) => {
  let artists;
  await chrome.storage.local.get(["artists"]).then((result) => {
    artists = Array.from(result.artists);
  });

  if (daya === "happy songs") {
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
  } else if (daya === "calm songs") {
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
  } else {
    youtubesearchapi.GetListByKeyword(daya).then((res) => {
      if (res["items"].length > 0) {
        chrome.tabs.create({
          url: `https://www.youtube.com/watch?v=${res["items"][0]["id"]}`,
        });
      }
    });
  }
};
