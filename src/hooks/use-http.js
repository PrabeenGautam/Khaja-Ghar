import React, { useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = React.useCallback(async (responseConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(responseConfig.url, {
        method: responseConfig.method ? responseConfig.method : "GET",
        headers: responseConfig.headers ? responseConfig.headers : {},
        body: responseConfig.body ? responseConfig.body : null,
      });

      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      applyData && applyData(data);
      if (responseConfig.method === "POST") window.location.reload();
    } catch (error) {
      console.log(error);
      setError("Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return { isLoading, error, sendRequest };
}

export default useHttp;
