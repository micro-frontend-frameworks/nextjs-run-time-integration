import React from "react";
import ReactDOM from "react-dom";
import { useRemoteComponent } from "../hooks/useRemoteComponent";

export function createRemoteComponent(opts: RemoteComponentOptions) {
  const { url, fallback = <div>Loading...</div> } = opts;

  const [loading, error, component] = useRemoteComponent(url);

  if (loading) {
    return fallback;
  }

  if (error || !component) {
    return <div>Failed to load component: {error?.message}</div>;
  }

  return ReactDOM.hydrate(
    <div dangerouslySetInnerHTML={{ __html: component }}></div>,
    document.getElementById("remote-component")
  );
}

export interface RemoteComponentOptions {
  url: string;
  fallback?: JSX.Element;
}
