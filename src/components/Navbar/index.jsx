import { useState } from "react";
import styles from "./NavBar.module.scss";
import logoSvg from "../../assets/fiveguard_logo.svg";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className={styles["app-header"]}>
        <div className={`${styles["navbar"]} ${"container-limit"}`}>
          <div className={styles["left-side"]}>
            <div className={styles["logo-container"]}>
              <img src={logoSvg} alt="Logo" />
            </div>
            <div
              className={`${styles["menu-itens-container"]} ${
                isActive ? styles.active : ""
              }`}
            >
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">Stats</a>
              <a href="">FAQ</a>
              <a href="">Contact</a>
            </div>
          </div>
          <div className={styles["right-side"]}>
            <a className={styles["login-in"]} href="">
              Login
            </a>
            <a className={styles["sign-up"]} href="">
              Sign Up
            </a>
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
