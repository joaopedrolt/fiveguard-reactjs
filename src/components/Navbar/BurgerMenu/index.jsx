import React from "react";
import styles from "./BurgerMenu.module.scss";

function BurgerMenu({ isActiveState, setIsActive }) {
  return (
    <div
      className={`${styles["burger-menu-container"]} ${
        isActiveState ? styles.active : ""
      }`}
      onClick={() => {
        setIsActive(!isActiveState);
      }}
    ></div>
  );
}

export default BurgerMenu;