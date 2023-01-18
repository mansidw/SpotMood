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
            Make sure you have active internet connection
          </li>
          <li style={{ fontFamily: "Roboto Mono" }}>Reload website.</li>
          <li style={{ fontFamily: "Roboto Mono" }}>Reopen addon popup</li>
          <li style={{ fontFamily: "Roboto Mono" }}>Reinstal extension.</li>
        </ul>
        <br />
        Still getting an error? Contact Mansi
      </Alert>
    </div>
  );
}
