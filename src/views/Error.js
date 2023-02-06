import { Alert, AlertTitle } from "@mui/material";

export function ErrorView() {
  return (
    <div className="center-view">
      <Alert severity="error" variant="filled">
        <AlertTitle style={{ fontFamily: "Roboto Mono" }}>
          Error occured while predicting the sentiment
        </AlertTitle>
        Try to:
        <ul>
          <li style={{ fontFamily: "Roboto Mono" }}>
            Make sure more than one tab is open
          </li>
          <li style={{ fontFamily: "Roboto Mono" }}>
            Make sure you have active internet connection
          </li>
          <li style={{ fontFamily: "Roboto Mono" }}>
            Make sure all the tabs have loaded successfully
          </li>
          <li style={{ fontFamily: "Roboto Mono" }}>Reinstall extension.</li>
        </ul>
        <br />
        Still getting an error? Contact mansi.dwivedi@spit.ac
      </Alert>
    </div>
  );
}
