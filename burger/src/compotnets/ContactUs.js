import styles from "./ContactUs.module.css";

function contactUs() {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <h1>Contact Us</h1>
        <div>Pok Street | Hong Kong</div>
        <div>+852 3062 4700</div>
        <div>info@ddiburger.com</div>
      </div>

      <div className={styles["right-container"]}>
        <div className={styles["right-top-container"]}>
          <input type="text" id="name" />
          <input type="text" id="email" />
        </div>
        <input type="text" id="msg" />
        <button>submit</button>
      </div>
    </div>
  );
}

export default contactUs;
