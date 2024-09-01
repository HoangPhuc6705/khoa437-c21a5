import { useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/roboto";
import "@fontsource/lora";
import "@fontsource/prata";


function Navigation({ onShowOptions }) {

  function handleScrollPage() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.panel1}>
        <div className={styles.logo}>
          <h1>Nong Lam University</h1>
        </div>
        <div className={styles.bars} onClick={onShowOptions}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={styles.panel2}>
        <div onClick={handleScrollPage}>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Navigation;
