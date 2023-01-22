/*global chrome*/

// function getTabID() {
//   return new Promise((resolve, reject) => {
//     try {
//       chrome.tabs.query(
//         {
//           active: true,
//         },
//         function (tabs) {
//           resolve(tabs[0].id);
//         }
//       );
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

// chrome.runtime.onInstalled.addListener(async function (details) {
//   let id = await getTabID();
//   chrome.scripting.executeScript({
//     target: { tabId: id, allFrames: true },
//     files: ["clientSide.js"],
//   });
//   console.log("loaded");
// });
// const init = (tab) => {
//   const { id, url } = tab;
//   chrome.scripting.executeScript({
//     target: { tabId: id, allFrames: true },
//     files: ["clientSide.js"],
//   });
//   console.log(`Loading: ${url}`);
// };

// chrome.action.onClicked.addListener((tab) => {
//   console.log("yes clicked");
// chrome.storage.local.get(["key"]).then((result) => {
//   console.log("Value currently is " + result.key);
// });
// });

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    // Code to be executed on first install
    // eg. open a tab with a url
    chrome.tabs.create({
      url: "welcome.html",
    });
  } else if (details.reason === "update") {
    // When extension is updated
    console.log("Updated to new version");
  }
});
