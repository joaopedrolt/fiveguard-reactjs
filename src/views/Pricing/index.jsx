import styles from "./Pricing.module.scss";

function Pricing({ setShowModal, setProduct, product }) {
  const handleBuyClick = (productName) => {
    var productObj = { name: "", price: "" };

    switch (productName) {
      case "MENSAL":
        productObj = {
          name: productName,
          price: "199,90",
        };
        break;

      case "TRIMESTRAL":
        productObj = {
          name: productName,
          price: "74,90",
        };
        break;
    }

    setProduct(productObj);
    
    setTimeout(() => {
      setShowModal(true);
    }, 30);
  };

  return (
    <>
      <section id="pricing" className={`section ${styles.pricing}`}>
        <div className={`${styles["pricing-container"]} container-limit`}>
          <div className={styles["pricing-content"]}>
            <h2 className="section-title mid">Preços</h2>
            <div className={styles["pricing-items"]}>
              <div className={styles["item-box"]}>
                <div className={styles["item-img"]}>
                  <div className={styles["item-img"]}>
                    <img src="./fivesharp_box_mensal.png" alt="" />
                  </div>
                </div>
                <div className={styles["item-title"]}>Mensal</div>
                <div className={styles["item-desc"]}>R$: 74,90</div>
                <button
                  className={"button small"}
                  style={{
                    margin: "10px 0",
                    width: "100%",
                  }}
                  onClick={handleBuyClick.bind(null, "MENSAL")}
                >
                  Comprar
                </button>
              </div>

              <div className={styles["item-box"]}>
                <div className={styles["item-img"]}>
                  <img src="./fivesharp_box_trimestral.png" alt="" />
                </div>
                <div className={styles["item-title"]}>Trimestral</div>
                <div className={styles["item-desc"]}>R$: 199,90</div>
                <button
                  className={"button small"}
                  style={{
                    margin: "10px 0",
                    width: "100%",
                  }}
                  onClick={handleBuyClick.bind(null, "TRIMESTRAL")}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
