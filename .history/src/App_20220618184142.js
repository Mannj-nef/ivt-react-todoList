import { useState } from "react";
import CounterTime from "./components/react-hooks/CounterTime";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <CounterTime></CounterTime>}
    </div>
  );
}

export default App;
