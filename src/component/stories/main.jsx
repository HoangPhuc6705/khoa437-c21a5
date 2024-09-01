import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import "@fontsource/quicksand"
import styles from './style.module.css';
import './lazyloading.css'
import story from './stories';

function Stories({ onShowImages, getImage }) {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    root: null,
    rootMargin: '1000px'
  })

  useEffect(() => {
    // Preload image
    const preloadImage = (url) => {
      const img = new Image();
      img.src = url;
    }
    for (const i in story) {
      preloadImage(story[i]);
    }

    // Responesive page
    const viewportHeight = document.querySelector('.stories_page');
    const viewportHeightPx = viewportHeight.clientHeight;
    const viewportHeightToVh = (viewportHeightPx / window.innerHeight) * 100;
    // viewportHeight.style.height = viewportHeightToVh < 100 ? '100vh' : 'auto';
  }, []);

  return (
    <div
      className={styles.container + ' stories_page'}
      ref={ref}>
      <div className={styles.image_box}>
        {story.map((image, index) => (
          <div
            className={styles.item}
            key={index}
            onClick={() => {
              onShowImages();
              getImage(image);
            }
            }>
            <Images img={image} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Images({ img }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <div ref={ref}>
      <img
        src={img}
        loading='lazy'
      />
      <div
        className={styles.loading}
        style={{
          opacity: inView ? '0' : '1'
        }}></div>
      {!inView || <div className={styles.overlay_image}>
        <span>Xem chi tiết</span>
      </div>}
    </div>
  )
}

export default Stories;