import { useEffect, useRef } from "react";

export const useMount = (callback: () => void) => {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      callback();
    }
  }, [callback]);
};
