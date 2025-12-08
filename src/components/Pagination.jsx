import styles from "../styles/Pagination.module.css";

export default function Pagination({
  previous,
  next,
  currentPage,
  onPageChange,
}) {
  return (
    <div className={` ${styles.pageCtrl}`}>
      {previous && (
        <button
          onClick={() => onPageChange(previous)}
          className={styles.prevBtn}
        >
          Previous page
        </button>
      )}
      <span className={styles.pageIndicator}>Page {currentPage}</span>
      {next && (
        <button onClick={() => onPageChange(next)} className={styles.nextBtn}>
          Next page
        </button>
      )}
    </div>
  );
}
