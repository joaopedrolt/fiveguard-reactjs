import styles from "./Pricing.module.scss";

function Pricing({setShowModal}) {
  const showModal = () => setShowModal(true);

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
                  onClick={showModal}
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
                  onClick={showModal}
                >
                  Comprar
                </button>

           {/*      <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="save-button"
                  onClick={() => (modalOpen ? close() : open())}
                >
                 Comprar
                </motion.button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
