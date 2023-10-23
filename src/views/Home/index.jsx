import styles from "./Home.module.scss";

function Home() {
  return (
    <>
      <section className={`section ${styles.home}`}>
        <div className={`${styles["home-container"]} container-limit`}>
          <div className={styles["home-content"]}>
            <h2 className={styles["home-title"]}>
            Fivesharp<br></br>O Maior do FiveM
            </h2>
            <p className={styles["home-desc"]}>
              FiveSharp é uma adição incrível para aqueles que desejam elevar
              sua experiência de jogo no FiveM a um novo patamar. Com recursos
              que aprimoram a jogabilidade, e a diversão geral. O FiveSharp se
              destaca como uma escolha popular entre os entusiastas do FiveM.
            </p>
            <a className="button">Adquirir Agora</a>
          </div>
          <div className={styles["home-image"]}>
            <img src="./dashboard.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
