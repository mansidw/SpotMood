/*global chrome*/
import "./App.css";
import { useState } from "react";
import { ErrorView } from "./views/Error";
import { InitialView } from "./views/Initial";
// import ChromeAPIToGetTabs from "./services/chromeApiToGetOpenTabs";

function App() {
  const [view, setView] = useState("initial");
  const [tabs, setTabs] = useState([]);

  const loadSentiment = async () => {
    try {
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        setTabs(tabs.map((tab) => ({ title: tab.title, url: tab.url })));
      });
    } catch (e) {
      console.log(e);
      setView("error");
    }
  };

  const renderView = () => {
    switch (view) {
      case "error":
        return <ErrorView />;
      default:
        return <InitialView loadSentiment={loadSentiment} tabs={tabs} />;
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>Welcome to Mansis extension</h2> */}
        {renderView()}
      </header>
    </div>
  );
}

export default App;
