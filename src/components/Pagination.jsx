import styles from "../styles/Pagination.module.css";

export default function Pagination({
  previous,
  next,
  currentPage,
  onPageChange,
}) {
  return (
    <div className={styles.pageControl}>
      {previous && (
        <button onClick={() => onPageChange(previous)}>Previous page</button>
      )}
      <span className={styles.pageIndicator}>Page {currentPage}</span>
      {next && <button onClick={() => onPageChange(next)}>Next page</button>}
    </div>
  );
}
