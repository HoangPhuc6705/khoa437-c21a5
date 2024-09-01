import styles from './style.module.css'
import '../stories/lazyloading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function ShowImage({ imagePath, onShowImages }) {
  const [index, setIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  const animationName = [
    'fade_in 0.2s',
    'fade_out 0.2s forwards'
  ]

  function handleCloseShowImage() {
    setIndex(1);
    const timer = setTimeout(onShowImages, 200);
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;

    const myImage = document.querySelector('.myImage');

    myImage.addEventListener('load', () => {
      setImgHeight(myImage.clientHeight);
      setImgWidth(myImage.clientWidth);
      const imgHeightVh = (imgHeight / window.innerHeight) * 100;
    })
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        animation: animationName[index]
      }}>
      <div
        className={styles.overlay}
        onClick={() => {
          handleCloseShowImage();
        }}></div>
      <div
        className={styles.close}
        onClick={() => {
          handleCloseShowImage();
        }}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <img
        data-src={imagePath}
        className='myImage lazyload' />
    </div>
  )
}

export default ShowImage;