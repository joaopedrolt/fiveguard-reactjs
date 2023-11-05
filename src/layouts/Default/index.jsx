import { useState } from "react";

import Navbar from "../../components/Navbar";
import Home from "../../views/Home";
import Features from "../../views/Features";
import Pricing from "../../views/Pricing";
import Stats from "../../views/Stats";
import Modal from "../../components/Modal";
import FAQ from "../../views/FAQ";
import NeedHelp from "../../views/NeedHelp";
import Footer from "../../components/Footer";

function DefaultLayout() {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState({ name: "", price: "" });

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
      <Pricing
        setShowModal={setShowModal}
        setProduct={setProduct}
        product={product}
      ></Pricing>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        product={product}
      ></Modal>
      <Stats></Stats>
      <FAQ></FAQ>
      <NeedHelp></NeedHelp>
      <Footer></Footer>
    </>
  );
}

export default DefaultLayout;
