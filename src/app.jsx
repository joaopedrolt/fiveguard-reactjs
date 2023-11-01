import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Features from "./views/Features";
import Pricing from "./views/Pricing";
import Stats from "./views/Stats";
import Modal from "./components/Modal";
import { useState } from "react";
import FAQ from "./views/FAQ";
import NeedHelp from "./views/NeedHelp";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
      <Pricing setShowModal={setShowModal}></Pricing>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <Stats></Stats>
      <FAQ></FAQ>
      <NeedHelp></NeedHelp>
      <Footer></Footer>
    </>
  );
}

export default App;
