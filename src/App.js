import "./App.css";
import Section from "./components/Section";
import useToggle from "./components/hooks/Toggle";
import  Toggle  from "./components/hooks/Toggle";
import React, { useState } from "react";
function App() {
  const [smileyface, isSmileyFace] = useState(false);
  const [section, setSection] = useToggle(true);
  return (
    <div>
      {section && <Section />}
      <button onClick={()=>{setSection(!section)}}>Show more</button>
      <h1
        onClick={() => {
          isSmileyFace(!smileyface);
        }}
      >
        {smileyface ? "😊" : "🗿"}
      </h1>
    </div>
  );
}

export default App;
