import { useState, useCallback } from "react";

const useAsync = (asyncFunction, params = null) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setData(null);
    setError(null);

    return asyncFunction(params)
      .then((response) => {
        setData(response.data);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error!");
      });
  }, [asyncFunction, params]);

  return {
    execute,
    data,
    setData,
    status,
    error,
  };
};

export default useAsync;
