import "./styles.css";
import { useState, useEffect } from "react";

const sleep = (time) => {
  const wakeUpTime = Date.now() + time;
  while (Date.now() < wakeUpTime) {}
  console.log(time + "ms passed");
};

export default function App() {
  const [text, setText] = useState("Hello");

  useEffect(() => {
    setTimeout(() => {
      setText("Bonjour");
      console.log("setState done");
    }, 1000);
  }, []);

  useEffect(() => {
    if (text === "Bonjour") {
      sleep(10000);
    }
  }, [text]);

  return (
    <div className="App">
      <h1>{text}</h1>
    </div>
  );
}
