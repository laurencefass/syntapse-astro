/** @jsxImportSource react */

import React, { useEffect } from "react"

// Define the props type to include a function called 'onLoadFunction'
type CallServerProps = {
  callback: () => void;
};

export const CallServer: React.FC<CallServerProps> = ({ callback }) => {
  useEffect(() => {
    console.log("CallServer rendered");
    console.log(callback);
  }, []);

  return <>
    <h1>CallServer rendered</h1>
    <p>(cant accept a callback as a prop)</p>
  </>
};

interface RenderServerDataProps {
  message: string;
}

export const RenderServerData: React.FC<RenderServerDataProps> = ({ message }) => {
  useEffect(() => {
    console.log("CallServer rendered");
    console.log(message);
  }, []);

  return <>
    <h1>RenderServerData rendered</h1>
    {message}
  </>;
};