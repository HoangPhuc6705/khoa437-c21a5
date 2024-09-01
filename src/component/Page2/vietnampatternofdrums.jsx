import { useEffect } from 'react'
import './animation.css'
import styles from './styles.module.css'
import PatternDrums from '../image/hoavantrongdong.png'

function VietNamPatternOfTheDrums({ inView }) {

  return (
    <div className={styles.pattern}>
      <img
        src={PatternDrums}
        className='animate_img'
        style={{
          animation: inView ? 'rotate_pattern_in 2s ease-out forwards, rotate_pattern 50s linear infinite 2s' : ''
        }} />
    </div>
  )
}

export default VietNamPatternOfTheDrums;