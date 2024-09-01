import { useInView } from 'react-intersection-observer'
import styles from './style.module.css'
import '../Page2/animation.css'
import '@fontsource/quicksand'
import '@fontsource/roboto'
import '@fontsource/lora'
import '@fontsource/inter'

const content = [
  'Trong khoảng thời gian ở trong trung tâm Quốc phòng An Ninh, tụi mình đã được trải nghiệm rất nhiều thứ từ lối sống, kỉ luật trong quân đội. Học được những kĩ năng chiến đấu và những đường lối của Đảng trong công cuộc bảo vệ Đất nước.',
  'Ngoài ra tụi mình còn được gặp nhau và làm quen với những người bạn mới trong tiểu đội, cùng nhau học hỏi, rèn luyện và có những phút giây đẹp đẽ trong tiểu đội và đại đội. Ba tuần vừa qua phải gọi là rất vui, rất tuyệt vời, những khoảng khắc ngắn ngủi ngồi ghế đá ăn kem chuối và ngắm hồ Đá hay những lúc ngủ la liệt trong hội trường với 2 cái quạt khổng lồ, phải nói là mát. Những hôm học ngoài bãi tập tụi mình được luyện tập với mấy quả lựu đạn (có vài lần ném xém trúng người ta) hoặc những tư thế bắn yêu cầu nhiều cử động phức tạp mà phải luyện đi luyện lại nhiều lần để phục vụ cho thi học phần, nói chung đó là những trải nghiệm thú vị và để lại nhiều dấu ấn khó phai.',
  'Thật ra là còn nhiều những điều thú vị mà mình chưa kể ở đây nhưng nhiêu đây đã đủ cho mọi người biết rằng học Quốc phòng An ninh nó vui cỡ nào, để lại nhiều kỉ niệm đẹp trong cuộc đời của mỗi sinh viên.',
  'Một lần nữa xin cảm ơn mọi người đã theo dõi trang website giới thiệu C21A5 của tụi mình, chúc mọi người một ngày vui vẻ.'
]


function FinallyPage() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <div
      className={styles.container}
      ref={ref}>
      <div className={styles.top_overlay}></div>
      <div className={styles.bottom_overlay}></div>
      {!inView ||
        <div className={styles.main}>
          <div className={styles.title}>
            <h1
              style={{
                animation: 'text_up 0.4s'
              }}>LỜI KẾT</h1>
          </div>
          <p>
            {content[0].split('').map((value, index) => (
              <span
                style={{
                  opacity: '0',
                  animation: 'step_text 0.1s forwards',
                  animationDelay: `${0.02 * index}s`,
                  animationTimingFunction: 'step-start'
                }}
                key={index}>{value}</span>
            ))}
          </p>
          <p>
            {content[1].split('').map((value, index) => (
              <span
                style={{
                  opacity: '0',
                  animation: 'step_text 0.1s forwards',
                  animationDelay: `${(0.02 * index) + (0.02 * content[0].length)}s`,
                  animationTimingFunction: 'step-start'
                }}
                key={index}>{value}</span>
            ))}
          </p>
          <p>
            {content[2].split('').map((value, index) => (
              <span
                style={{
                  opacity: '0',
                  animation: 'step_text 0.1s forwards',
                  animationDelay: `${(0.02 * index) + (0.02 * content[0].length) + (0.02 * content[1].length)}s`,
                  animationTimingFunction: 'step-start'
                }}
                key={index}>{value}</span>
            ))}
          </p>
          <p>
            {content[3].split('').map((value, index) => (
              <span
                style={{
                  opacity: '0',
                  animation: 'step_text 0.1s forwards',
                  animationDelay: `${(0.02 * index) + (0.02 * content[0].length) + (0.02 * content[1].length) + (0.02 * content[2].length)}s`,
                  animationTimingFunction: 'step-start'
                }}
                key={index}>{value}</span>
            ))}
          </p>
        </div>}


      <div className={styles.copyright}>
        <span>© Bản quyền thuộc by Tô nguyễn Hoàng Phúc - Sinh viên Trường Đại học Nông Lâm TPHCM</span>
      </div>
    </div>
  )
}

export default FinallyPage;