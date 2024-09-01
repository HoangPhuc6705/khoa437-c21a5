import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import VietNamPatternOfTheDrums from "./vietnampatternofdrums";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faGraduationCap,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "@fontsource/lora";
import "@fontsource/quicksand";
import "@fontsource/inter";
import c21a5_1 from '../image/c21a5_1.webp'
import c21a5_2 from '../image/c21a5_2.webp'
import c21a5_3 from "../image/c21a5_3.webp";
import c21a5_4 from '../image/party.webp'

const content = [
  'Chúng tôi là tiểu đội 5 thuộc đại đội 21, là sinh viên ngành Công nghệ thực phẩm & Công nghệ thông tin thuộc Trường Đại học Nông Lâm TPHCM',
  'Là người con của mảnh đất Việt Nam, chúng tôi có cơ hội được học tại đây nhằm mục đích học tập và rèn luyện tư duy, tư tưởng và phát huy truyền thống vẻ vang của ông cha ta nhằm nâng cao lòng yêu nước, nâng cao trách nhiệm của tuổi trẻ đối với nhiệm vụ bảo vệ Tổ quốc.'
]

function Page2({ onShowImages, getImage }) {
  const paragraph1 = content[0].split('');
  const paragraph2 = content[1].split('');

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  function handleScrollPage() {
    const targetHeight = document.documentElement.clientHeight;
    window.scrollTo({
      top: targetHeight * 2,
      behavior: 'smooth'
    })
  }

  function preloadImage(url) {
    const img = new Image();
    img.src = url;
  }

  useEffect(() => {
    preloadImage(c21a5_1);
    preloadImage(c21a5_2);
    preloadImage(c21a5_3);
  }, []);

  return (
    <div
      className={styles.container}
      ref={ref}>
      <VietNamPatternOfTheDrums inView={inView} />
      <div className={styles.top_overlay}></div>
      <div className={styles.bottom_overlay}></div>
      <div className={`${styles.left_panel} ${styles.panel}`}>
        <main className={styles.content}>
          <div className={styles.basic_info}>
            <div className={styles.info}>
              <div className={styles.icon}>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                />
              </div>
              {inView ? <CourseStudyIndex /> : <span>K0 CNTP & K0 CNTT</span>}
            </div>

            <div className={styles.info}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              {inView ? <QuantityMember /> : <span>0 THÀNH VIÊN</span>}
            </div>

            <div className={styles.line_info}></div>
          </div>

          <div className={styles.content_main}>
            <p>
              {!inView || paragraph1.map((value, index) => (
                <span
                  key={index}
                  style={{
                    animation: 'letter 0.1s forwards',
                    animationTimingFunction: 'step-start',
                    animationDelay: `${index * 0.01}s`
                  }}>{value}</span>
              ))}
            </p>
            <br />
            <p>
              {!inView || paragraph2.map((value, index) => (
                <span
                  key={index}
                  style={{
                    animation: 'letter 0.1s forwards',
                    animationTimingFunction: 'step-start',
                    animationDelay: `${(index * 0.01) + (paragraph1.length * 0.01)}s`
                  }}>{value}</span>
              ))}
            </p>
            <br />
          </div>

          <div className={styles.icon}>
            <FontAwesomeIcon icon={faBookOpen} />
          </div>
        </main>
      </div>
      <div className={`${styles.right_panel} ${styles.panel}`}>
        <img
          src={c21a5_1}
          style={{ transform: "translate(-55%, -78%)" }}
          onClick={() => {
            onShowImages();
            getImage(c21a5_1);
          }} />
        <img
          src={c21a5_2}
          style={{ transform: "translate(30%, 80%)", zIndex: "2" }}
          onClick={() => {
            onShowImages();
            getImage(c21a5_2);
          }} />
        <img
          src={c21a5_4}
          style={{ transform: "translate(-10%, 0%)" }}
          onClick={() => {
            onShowImages();
            getImage(c21a5_4);
          }} />
      </div>
    </div>
  );
}

function QuantityMember() {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity === 12) return;

    const count = setInterval(() => {
      setQuantity(previous => previous + 1);
    }, 80);

    return () => {
      clearInterval(count);
    }
  }, [quantity]);

  return (
    <span>{quantity} THÀNH VIÊN</span>
  )
}

function CourseStudyIndex() {
  const [cntp, setCntp] = useState(0);
  const [cntt, setCntt] = useState(0);

  const timeSet = 5;

  useEffect(() => {
    if (cntp === 49) return;

    const count = setInterval(() => {
      setCntp(previous => previous + 1);
    }, timeSet);

    return () => {
      clearInterval(count);
    }
  }, [cntp]);

  useEffect(() => {
    if (cntt === 50) return;

    const count = setInterval(() => {
      setCntt(previous => previous + 1);
    }, timeSet);

    return () => {
      clearInterval(count);
    }
  }, [cntt]);

  return (
    <span>K{cntp} CNTP & K{cntt} CNTT</span>
  )
}

export default Page2;
