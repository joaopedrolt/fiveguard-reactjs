import styles from "./Pricing.module.scss";

function Pricing() {
  return (
    <>
      <div className={`${styles["modal-pricing"]}`}>
        <div className={`${styles["modal-header"]}`}>
          <div className={`${styles["modal-title"]}`}>MENSAL</div>
          <button className={`${styles["modal-header-close"]}`} type="button">
            ×
          </button>
        </div>
        <div className={`${styles["modal-form"]}`}>
          <input
            className={`${styles["email-input"]}`}
            placeholder="Email"
            type="email"
          ></input>
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
          <div className={`${styles["modal-price"]}`}>R$: 74,90</div>
          <div className="button small yellow">Comprar</div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
