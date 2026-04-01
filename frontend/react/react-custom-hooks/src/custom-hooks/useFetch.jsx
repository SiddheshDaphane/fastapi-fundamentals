import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  async function getDetails() {
    setLoad(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err);
    } finally {
      setLoad(false)
    }
  }

  useEffect(() => {
    getDetails();
  }, [url])

  return {data, load, error}
}