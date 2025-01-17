import { useState } from "react";
import "./App.css";
import DotPattern from "./@/components/magicui/dot-pattern";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <DotPattern
        style={{
          background: "white",
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <h1
        style={{
          zIndex: 10,
          position: "absolute",
          color: "black",
          left: "50%",
          top: "50%",
        }}
      >
        Jake
      </h1>
    </div>
  );
}

export default App;
