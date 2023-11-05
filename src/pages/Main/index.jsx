import { useState } from "react";

import Home from "../../views/Home";
import Features from "../../views/Features";
import Pricing from "../../views/Pricing";
import Stats from "../../views/Stats";
import Modal from "../../components/Modal";
import FAQ from "../../views/FAQ";
import NeedHelp from "../../views/NeedHelp";

function Main() {
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState({ name: "", price: "" });

    return (
        <>
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
        </>
    );
}

export default Main;
