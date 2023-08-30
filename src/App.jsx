import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Hola koders");
  const inputHandler = (event) => {
    const text = event.target.value;
    console.log(text);
    setTitle(text);
  };
  return (
    <>
      <input type="text" onChange={(event) => inputHandler(event)} />
      <h1> {title} </h1>
    </>
  );
}

export default App;
