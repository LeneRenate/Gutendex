import backgroundImage from "../assets/bgHome_full.png";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.imgWrapper}>
        <img
          src={backgroundImage}
          alt="Reading a book under warm lighting in bed, with the text: Your literary adventure starts here"
        />
      </div>
    </>
  );
}
