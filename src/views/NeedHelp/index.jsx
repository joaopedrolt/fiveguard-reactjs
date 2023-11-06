import styles from "./NeedHelp.module.scss";

function NeedHelp() {
  return (
    <>
      <div id="need-help" className={styles["need-help-wrapper"]}>
        <div className={styles["fade-background"]}></div>
        <div className={styles["background"]}></div>
        <section id="need-help" className={`section ${styles["need-help"]}`}>
          <div className={`${styles["need-help-container"]} container-limit`}>
            <div data-aos="fade-in" className={styles["need-help-content"]}>
              <h2 className="section-title">Precisa de Ajuda?</h2>
              <p>
                Fique à vontade para entrar em contato conosco se tiver alguma
                dúvida ou sugestão sobre nosso produto. Antes de contatar o
                suporte, por favor, revise as perguntas frequentes acima.
              </p>
              <a
                target="_black"
                href="https://discord.com/invite/4VkPWpxCvr"
                className="button"
              >
                <img src="/discord.svg" />
                Entrar no Servidor
              </a>
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
