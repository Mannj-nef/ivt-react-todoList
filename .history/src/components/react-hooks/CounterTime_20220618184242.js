import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div>Counter:{count}</div>;
};

export default CounterTime;
