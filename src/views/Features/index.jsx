import styles from "./Features.module.scss";

function Features() {
  return (
    <>
      <section id="features" className={`section ${styles.features}`}>
        <div className={`${styles["features-container"]} container-limit`}>
          <div className={styles["features-content"]}>
            <h2 className="section-title mid">Features</h2>
            <div className={styles["features-items"]}>
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
        <div className={styles["grid-background"]}></div>
      </section>
    </>
  );
}

export default Features;
