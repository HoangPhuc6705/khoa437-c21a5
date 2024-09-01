import { useState } from "react";
import styles from "./styles.module.css";
import InformationForUs from "./infomation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.panel3}>
      <div className={styles.panel3__panel}>
        <div
          onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faFacebook} />
          {/* {!show || <InformationForUs logo={logo} />} */}
        </div>
        <div
          onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faInstagram} />
          {/* {!show || <InformationForUs logo={null}/>} */}
        </div>
        <div
          onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faYoutube} />
          {/* {!show || <InformationForUs logo={null} />} */}
        </div>
      </div>
    </div>
  );
}

export default Contact;