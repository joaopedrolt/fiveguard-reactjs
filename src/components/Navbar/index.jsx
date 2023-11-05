import { useState } from "react";
import styles from "./NavBar.module.scss";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className={styles["app-header"]}>
        <div className={`${styles["navbar"]} ${"container-limit"}`}>
          <div className={styles["left-side"]}>
            <div className={styles["logo-container"]}>
              <img src="./fivesharp_logo.png" alt="Logo" />
            </div>
          </div>
          <div className={styles["right-side"]}>
            <div
              className={`${styles["menu-itens-container"]} ${
                isActive ? styles.active : ""
              }`}
            >
              <a href="#features">Features</a>
              <a href="#pricing">Preços</a>
              <a href="#stats">Estatísticas</a>
              <a href="#faq">Perguntas</a>
              <a href="#need-help">Ajuda</a>
            </div>
            <BurgerMenu
              isActiveState={isActive}
              setIsActive={setIsActive}
            ></BurgerMenu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
