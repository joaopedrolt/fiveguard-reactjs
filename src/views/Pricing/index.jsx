import styles from "./Pricing.module.scss";

function Pricing() {
  return (
    <>
      <section id="pricing" className={`section ${styles.pricing}`}>
        <div className={`${styles["pricing-container"]} container-limit`}>
          <div className={styles["pricing-content"]}>
            <h2 className={styles["pricing-title"]}>Pricing</h2>
            <div className={styles["pricing-items"]}>
              <div className={styles["item-box"]}>
                <div className={styles["item-icon"]}>
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <h6 className={styles["item-title"]}>Facil de Usar</h6>
                <div className={styles["item-desc"]}>
                  O nosso produto foi criado com simplicidade em mente, visando
                  ser fácil de compreender e utilizar. Além disso, ele oferece
                  uma ampla gama de opções para atender às necessidades dos
                  usuários.
                </div>
              </div>
              <div className={styles["item-box"]}>
                <div className={styles["item-icon"]}>
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <h6 className={styles["item-title"]}>Entrega Instantânea</h6>
                <div className={styles["item-desc"]}>
                  O nosso produto é disponibilizado automaticamente após a
                  aprovação do pagamento.
                </div>
              </div>
              <div className={styles["item-box"]}>
                <div className={styles["item-icon"]}>
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <h6 className={styles["item-title"]}>Segurança</h6>
                <div className={styles["item-desc"]}>
                  Os pagamentos são processados em um ambiente altamente seguro
                  e criptografado, garantindo a proteção das suas informações
                  pessoais contra qualquer risco.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
