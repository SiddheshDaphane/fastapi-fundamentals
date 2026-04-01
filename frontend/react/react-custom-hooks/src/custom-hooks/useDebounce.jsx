import { useEffect } from "react";
import { useState } from "react";

export function useDebounce(value) {
  const [debouceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouceValue(value)
    },200)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouceValue

}