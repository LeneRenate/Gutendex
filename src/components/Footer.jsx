import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wholeFooter}>
      <div className={styles.upperFooter}>
        <section className={styles.storySection}>
          <p>
            This project is built on the Gutendex-API, which again is based on
            the Gutenberg Project - an online library with over 75.000 ebooks.
          </p>
          <p>Project Gutenberg Mission Statement:</p>
          <em>"To encourage the creation and distribution of eBooks"</em>
        </section>
        <section className={styles.linkSection}>
          <p>Read more:</p>
          <a href="https://gutendex.com/" target="_blank">
            Gutendex API
          </a>
          <a href="https://www.gutenberg.org/" target="_blank">
            Project Gutenberg
          </a>
        </section>
      </div>
      <section className={styles.bottomSection}>
        <p>
          © 2025 ▫️ <em>Your literary adventure starts here</em> ▫️ Built with
          React
        </p>
      </section>
    </footer>
  );
}
