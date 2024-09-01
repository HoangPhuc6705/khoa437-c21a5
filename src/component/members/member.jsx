import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.css'
import './animation.css'
import membersList from './information';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/lora'
import '@fontsource/poppins'
import '@fontsource/roboto'
import '@fontsource/inter'

function Member() {
  const [index, setIndex] = useState(0);
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8
  })

  const introduce = membersList[index].introduce.split('');

  useEffect(() => {
    if (index === 0) {
      setIsLeft(false);
    } else if (index === membersList.length - 1) {
      setIsRight(false);
    } else {
      setIsLeft(true);
      setIsRight(true);
    }
  }, [index]);

  useEffect(() => {
    function preloadImage(url) {
      const img = new Image();
      img.src = url;
    }
    membersList.forEach((item) => {
      preloadImage(item.image);
    })
  }, []);

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${membersList[index].image})` }}
      ref={ref}>
      <div className={styles.overlay}></div>
      <div className={styles.overlay2}></div>
      <div className={styles.overlay3}></div>
      <div className={styles.arrow}>
        <div
          className={styles.arrow_left}
        >
          {!isLeft || <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => {
              setIndex(index - 1);
            }} />}
        </div>
        <div
          className={styles.arrow_right}
        >
          {!isRight || <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => {
              setIndex(index + 1);
            }} />}
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h1
            key={index}
            style={{
              animation: inView ? 'slideUp .5s forwards' : ''
            }}>{membersList[index].name}</h1>
        </div>
        {!inView || <p key={index}>{introduce.map((value, key) => (
          <span
            className='animation_char'
            style={{
              animation: 'fade 0.1s forwards',
              animationTimingFunction: 'step-start',
              animationDelay: `${0.01 * key}s`
            }}
            key={key}>{value}</span>
        ))}</p>}
      </div>
    </div>
  )
}

export default Member;