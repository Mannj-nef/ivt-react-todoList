import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [count]);
  return <div>Counter:{count}</div>;
};

export default CounterTime;
