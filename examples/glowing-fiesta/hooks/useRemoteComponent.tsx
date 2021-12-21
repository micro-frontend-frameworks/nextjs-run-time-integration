import { useEffect, useState } from "react";

export function useRemoteComponent(
  url: string
): [boolean, Error | null, string | null] {
  const [{ loading, error, html }, setState] = useState<{
    loading: boolean;
    error: Error | null;
    html: string | null;
  }>({
    loading: false,
    error: null,
    html: null,
  });

  useEffect(() => {
    setState({ loading: true, error: null, html: null });
    loadModules();
  }, [url]);

  const loadModules = async () => {
    try {
      const response = await fetch(url);

      const { html } = await response.json();

      setState({
        loading: false,
        error: null,
        html: html,
      });
    } catch (error: any) {
      setState({ loading: false, error, html: null });
    }
  };

  return [loading, error, html];
}
