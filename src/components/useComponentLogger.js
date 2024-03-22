import { useEffect } from "react";

const useComponentLogger = (message, componentName) => {
  useEffect(() => {
    console.log(`${message} ${componentName}`);
  }, [message, componentName]);
};

export default useComponentLogger;
