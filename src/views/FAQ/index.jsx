import styles from "./FAQ.module.scss";

function FAQ() {
  return (
    <>
      <section id="faq" className={`section ${styles.faq}`}>
        <div className={`${styles["faq-container"]} container-limit`}>
          <div className={styles["faq-content"]}>
            <h2 className="section-title mid">Perguntas</h2>
            <div className={styles["faq-items"]}>
              <div className={styles["item-box"]}>
                <h6 className={styles["item-title"]}>
                  Vai funcionar no meu computador?
                </h6>
                <div className={styles["item-desc"]}>
                  Atualmente, oferecemos suporte apenas a dispositivos que
                  funcionam com o Windows 10 ou versões mais recentes,
                  especialmente em sistemas x64. Nossa principal prioridade é
                  garantir uma experiência otimizada para essa configuração
                  específica de plataforma.
                </div>
              </div>

              <div className={styles["item-box"]}>
                <h6 className={styles["item-title"]}>Posso tomar ban?</h6>
                <div className={styles["item-desc"]}>
                  Quando se trata de alterações em jogos online, não podemos
                  garantir segurança total. Nossa prioridade é a qualidade e
                  proteção dos nossos usuários, e fazemos o máximo para manter
                  as modificações seguras e atualizadas. No entanto, é
                  importante estar ciente de que situações inesperadas, como
                  erros e banimentos, podem ocorrer a qualquer momento.
                </div>
              </div>

              <div className={styles["item-box"]}>
                <h6 className={styles["item-title"]}>Como posso pagar?</h6>
                <div className={styles["item-desc"]}>
                  Por enquanto, estamos disponibilizando apenas a opção de
                  pagamento através do Pix.
                </div>
              </div>

              <div className={styles["item-box"]}>
                <h6 className={styles["item-title"]}>Como vou receber?</h6>
                <div className={styles["item-desc"]}>
                  Nossa prioridade absoluta é a segurança e a privacidade de
                  nossos clientes, combinada com a excelência de nossos
                  produtos. Após a aquisição de qualquer item em nosso site,
                  você receberá o conteúdo diretamente em seu e-mail, o qual foi
                  registrado durante o processo de compra. Caso surja alguma
                  dúvida, não hesite em contatar nosso suporte, disponível
                  através do Discord ou via e-mail.
                </div>
              </div>

              <div className={styles["gun-icon"]}>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
