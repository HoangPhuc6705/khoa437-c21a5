import styles from './styles.module.css'
import './animation.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import '@fontsource/lora'
import '@fontsource/prata'
import { useEffect, useState } from 'react';

function Options({ onShowOptions }) {
  const [index, setIndex] = useState(0);

  const animationName = [
    'fade_in 0.2s',
    'fade_out 0.2s forwards'
  ]

  function handleScrollPage(pageIndex) {
    const targetHeight = document.documentElement.clientHeight;
    window.scrollTo({
      top: targetHeight * pageIndex,
      behavior: 'smooth'
    })
  }

  function handleCloseOption() {
    setIndex(1);
    const timer = setTimeout(onShowOptions, 200);
    return () => clearTimeout(timer);
  }

  return (
    <div
      className={styles.overlay}
      style={{
        animation: animationName[index]
      }}>
      <div
        className={styles.cancel}
        onClick={handleCloseOption}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={styles.options}>
        <span onClick={() => {
          setTimeout(() => {
            handleScrollPage(0);
          }, 500);
          handleCloseOption();
        }}>Home</span>
        <span onClick={() => {
          setTimeout(() => {
            handleScrollPage(1);
          }, 500);
          handleCloseOption();
        }}>Introduce</span>
        <span onClick={() => {
          setTimeout(() => {
            handleScrollPage(2);
          }, 500);
          handleCloseOption();
        }}>Members</span>
        <span onClick={() => {
          setTimeout(() => {
            handleScrollPage(3);
          }, 500);
          handleCloseOption();
        }}>Our story</span>
        <div style={{
          width: 'calc(100% + 2em)',
          height: '1px',
          backgroundColor: '#e4e4e4'
        }}></div>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Options;