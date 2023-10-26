import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Features from "./views/Features";
import Pricing from "./views/Pricing";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
      <Pricing setShowModal={setShowModal}></Pricing>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </>
  );
}

export default App;
