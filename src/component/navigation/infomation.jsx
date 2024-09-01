import styles from './styles.module.css'

function InformationForUs({ logo }) {

  return (
    <div className={styles.box}>
      {logo ? <img src={logo}  /> : null}
    </div>
  )
}

export default InformationForUs;