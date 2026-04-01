import { useEffect } from "react";
import { useState } from "react";

export function useReFetch(url, interval) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
      const response = await fetch(url);
      const result = await response.json()
      setData(result);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

    useEffect(() => {
      fetchData()

      if (interval !== null) {
        const fetchInterval = setInterval(() => {
          fetchData();
        }, interval)

        return () => clearInterval(fetchInterval);
      }
    }, [url, interval]);


    return {
      data,
      error,
      loading
    }

}