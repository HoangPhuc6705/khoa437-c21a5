import React, { memo, useEffect, useState } from "react";
import PlayNotifi from "./playNotifi";
import './style.css'
import styles from "./styles.module.css";
import bg1 from '../image/introducce_image.webp';
import bg2 from '../image/luongsonCopy.webp';
import bg3 from '../image/c21a5_1.webp';
import bg4 from '../image/keoco.webp';
import bg5 from '../image/party.webp';
import bg6 from '../image/gala.webp';
import "@fontsource/roboto";
import "@fontsource/lora";
import "@fontsource/quicksand"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePause, faCirclePlay } from "@fortawesome/free-regular-svg-icons"

function Page1() {
  const [index, setIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(true);

  const img = [
    bg1, bg2, bg3, bg4, bg6
  ];

  function handleScrollPage() {
    const targetHeight = document.documentElement.clientHeight;
    window.scrollTo({
      top: targetHeight,
      behavior: 'smooth'
    })
  }

  function handleChangeBackground() {
    if (index === img.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    let sliderTime;
    if (isPlay) {
      sliderTime = setInterval(handleChangeBackground, 5000);
      const image_slider = document.querySelector('.image_slider');
      image_slider.style.backgroundImage = `url(${img[index]})`;
    }
    return () => clearInterval(sliderTime);
  }, [index, isPlay]);

  useEffect(() => {
    function preloadImage(url) {
      const img = new Image();
      img.src = url;
    }
    for (let i in img) {
      preloadImage(img[i]);
    }
  }, []);

  return (
    <div
      className={styles.container + ' image_slider'}>
      <div className={styles.bottom_overlay}></div>
      <div className={styles.introduce}>
        <div className={styles.introduce__panel}>
          <div>
            <h1>C21A5.</h1>
          </div>
          <div className={styles.panel__content}>
            <div className={styles.line}></div>
            <p>
              Chúng tôi là tiểu đội 5, thuộc đại đội 21 của khoá 437 môn học
              Quốc phòng và An ninh tại Trung tâm giáo dục Quốc phòng và An ninh
              thuộc Đại học Quốc gia TPHCM.
            </p>
          </div>
          <button type="button" onClick={handleScrollPage}>Khám phá</button>
        </div>
      </div>
      <div
        className={styles.play_or_pause}
        onClick={() => setIsPlay(!isPlay)}>
        <FontAwesomeIcon icon={isPlay ? faCirclePause : faCirclePlay} />
      </div>
      <PlayNotifi isPlay={isPlay} />
    </div>
  );
}

export default Page1;
