import styles from "./NavBar.module.scss";
import logoSvg from "../../assets/fiveguard_logo.svg";

function Navbar() {
  return (
    <>
      <header className={styles["app-header"]}>
        <div className={`${styles["navbar"]} ${"container-limit"}`}>
          <div className={styles["left-side"]}>
            <div className={styles["logo-container"]}>
              <img src={logoSvg} alt="Logo" />
            </div>
            <div className={styles["menu-itens-container"]}>
              <ul>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Stats</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["right-side"]}>
            <div className={styles["user-account-container"]}>
              <a className={styles["login-in"]} href="">
                Login
              </a>
              <a className={styles["sign-up"]} href="">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
