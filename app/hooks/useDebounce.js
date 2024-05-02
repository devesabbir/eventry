import { useEffect, useRef } from "react";

function useDebounce(callBack, delay = 500) {
  const timeoutRef = useRef();

  const debounceFunction = (...args) => {
    if (timeoutRef) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callBack(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debounceFunction;
}

export default useDebounce;
