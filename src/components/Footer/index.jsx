import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <footer className={styles["app-footer"]}>
        <div className={`${styles["footer"]} ${"container-limit"}`}>
          <div className={styles["left-side"]}>
            <Link to="/" className={styles["logo-container"]}>
              <img src="/fivesharp_logo.png"></img>
            </Link>
            <div className={styles["footer-copyright"]}>
              Copyright © 2023 <p>FiveSharp</p>
            </div>
            <Link to="/Reembolso" className={styles["footer-terms"]}>
              Política de Reembolsos
            </Link>
          </div>

          <div className={styles["right-side"]}>
            <h3>Contato</h3>
            <div className={styles["contact"]}>
              <a target="_black" href="https://discord.com/invite/4VkPWpxCvr">
                <p>Discord:</p> fivesharp
              </a>
              <a href="mailto:suporte@felipe-menu.xyz">
                <p>Email:</p> suporte@felipe-menu.xyz
              </a>
              <a>
                <p>CNPJ:</p> 48.789.638/0001-80
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
