import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((d) => {
        setIsLoading(false);
        setError("");
        setData(d);
      })
      .catch((error) => {
        setIsLoading(false);
        setData(null);
        setError(error.error);
      });
  }, [url]);

  return [isLoading, data, error];
};

export default useFetch;
