// /*global chrome*/
import "./App.css";
import { useState } from "react";
import { ErrorView } from "./views/Error";
import { InitialView } from "./views/Initial";

function App() {
  const [view, setView] = useState("initial");

  const setExtensionView = async (view) => {
    setView(view);
  };

  const renderView = () => {
    switch (view) {
      case "error":
        return <ErrorView />;
      default:
        return <InitialView setExtensionView={setExtensionView} />;
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
