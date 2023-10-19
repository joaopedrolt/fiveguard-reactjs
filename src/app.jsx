import { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

export default App;
