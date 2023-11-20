import styles from "./Refund.module.scss";

function Refund() {
  return (
    <>
      <section id="refund" className={`section ${styles.refund}`}>
        <div className={`${styles["refund-container"]} container-limit`}>
          <h2 className="section-title">Política de Reembolsos</h2>
          <p>
            VII. Política de Trocas, Devoluções e de Direito de arrependimento:
            ao Cliente será facultado o exercício do direito de arrependimento
            da compra, com a finalidade de devolução do Produto, hipótese na
            qual deverão ser observadas as seguintes condições:
          </p>
          <ul>
            <li>
              O prazo de comunicação de desistência da compra, de avaria
              aparente do produto ou entrega do produtos em desacordo com o
              contratado é de até 7 (sete) dias corridos, a contar da data do
              recebimento, conforme artigos 12 a 18, do CDC – Código de Defesa
              do Consumidor.
            </li>
            <li>
              A comunicação do fato oculto, defeito ou avaria ocultas no
              produto, deve ocorrer em até 90 (noventa) dias corridos, a partir
              da data do recebimento da mercadoria, conforme artigos 12 a 18, do
              CDC – Código de Defesa do Consumidor.
            </li>
          </ul>
          <h3>Precisa de ajuda?</h3>
          <p className={styles["refund-email"]}>
            Contate-nos por e-mail: <a target="_blank" href="mailto:suporte@felipe-menu.xyz"><b>suporte@felipe-menu.xyz</b></a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Refund;