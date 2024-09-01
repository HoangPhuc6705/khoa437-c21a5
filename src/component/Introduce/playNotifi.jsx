import React from "react"
import styles from './styles.module.css'

function Playnotifi({ isPlay }) {
  return (
    <div 
    className={styles.playNotifi}
    key={isPlay}>
      <span>Chế độ slideshow: {isPlay ? 'Tiếp tục' : 'Tạm dừng'}</span>
    </div>
  )
}

export default React.memo(Playnotifi);

