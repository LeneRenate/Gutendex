import { Link } from "react-router-dom";
import { categories } from "../utils/categories";
import styles from "../styles/CategoryList.module.css";

export default function CategoryList() {
  return (
    <div className={`${styles.catList} flex flex-row justify-around`}>
      {categories.map((cat) => (
        <Link
          className={`${styles.catCard} flex flex-col`}
          key={cat.id}
          to={`category/${cat.apiQuery}`}
        >
          <li className={`${styles.listEl} flex flex-col items-center`}>
            <img className={styles.catIcon} src={cat.icon} alt={cat.name} />
            <p className={styles.catName}>{cat.name}</p>
          </li>
        </Link>
      ))}
    </div>
  );
}
