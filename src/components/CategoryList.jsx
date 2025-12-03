import { Link } from "react-router-dom";
import { categories } from "../utils/categories";
import styles from "../styles/CategoryList.module.css";

export default function CategoryList() {
  return (
    <div className={`${styles.catList} flex flex-row justify-around`}>
      {categories.map((cat) => (
        <Link
          className={`${styles.catCard} flex flex-col items-center`}
          key={cat.name}
          to={`/category/${cat.name}`}
        >
          <img className={styles.catIcon} src={cat.icon} />
          <p className={styles.catName}>{cat.name}</p>
        </Link>
      ))}
    </div>
  );
}
