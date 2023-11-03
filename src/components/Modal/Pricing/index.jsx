import { useState } from "react";
import Input from "../../Input";
import styles from "./Pricing.module.scss";

function Pricing({ product, setShowModal }) {
  const [input, setInput] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form className={`${styles["modal-pricing"]}`}>
        <div className={`${styles["modal-header"]}`}>
          <div className={`${styles["modal-title"]}`}>{product.name}</div>
          <button className={`${styles["modal-header-close"]}`} onClick={closeModal} type="button">
            ×
          </button>
        </div>
        <div className={`${styles["modal-form"]}`}>
          <Input
            type="email"
            label={"E-mail"}
            input={input}
            setInput={setInput}
          />

          <p className={`${styles["form-input"]}`}>Payment method</p>
          <div className={`${styles["modal-payment-methods"]}`}>
            <div className={`${styles["payment-method"]}`}>
              <div className={`${styles["payment-background"]}`}>
                <img
                  className={`${styles["payment-img"]}`}
                  src="./pix-106.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["modal-footer"]}`}>
          <div className={`${styles["modal-price"]}`}>R$: {product.price}</div>
          <input value="Comprar" className="button small yellow" type="submit"></input>
        </div>
      </form>
    </>
  );
}

export default Pricing;
