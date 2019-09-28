import React from "react";
import * as signalR from "@microsoft/signalr";

const initialStateValue = {};

const SignalRContext = React.createContext(initialStateValue);

export function SignalRProvider({ children, url }) {
  const [state, setState] = React.useState(initialStateValue);

  React.useEffect(() => {
    const connection = new signalR.HubConnectionBuilder().withUrl(url).build();

    connection.onclose(() => {
      console.log("SignalR connection disconnected");
    });

    connection.on("updated", data => {
      console.log("Data received:", data);
      setState(data);
    });

    connection.start().then(() => {
      console.log("SignalR connection established");
    });
  }, [url]);

  return (
    <SignalRContext.Provider value={state}>{children}</SignalRContext.Provider>
  );
}

export function useSignalR() {
  return React.useContext(SignalRContext);
}
