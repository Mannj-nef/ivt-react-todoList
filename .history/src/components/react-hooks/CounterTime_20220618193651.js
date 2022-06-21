import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CounterTime = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);
    console.log("mount");
    return () => {
      clearInterval(timer);
      console.log("um_mount");
    };
  }, []);

  return <div>Counter:{count}</div>;
};

export default CounterTime;
