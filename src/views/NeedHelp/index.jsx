import styles from "./NeedHelp.module.scss";

function NeedHelp() {
  return (
    <>
      <div className={styles["need-help-wrapper"]}>
        <div className={styles["fade-background"]}></div>
        <div className={styles["background"]}></div>
        <section id="need-help" className={`section ${styles["need-help"]}`}>
          <div className={`${styles["need-help-container"]} container-limit`}>
            <div className={styles["need-help-content"]}>
              <div className={styles["need-help-items"]}>
                <h2 className={styles["need-help-title"]}>Precisa de Ajuda?</h2>
                <p>
                  Feel free to contact us if you have any questions or
                  suggestions about our product. Before contacting support,
                  please review the FAQ above.
                </p>
                <a href="" className="button">
                  <img src="/discord.svg" />
                  Entrar no Servidor
                </a>
              </div>

              <div className={styles["img-background"]}>
                <img src="/mens.webp" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NeedHelp;
