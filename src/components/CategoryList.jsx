import { Link } from "react-router-dom";
import { categories } from "../utils/categories";

export default function CategoryList() {
  return (
    <div className="flex flex-row justify-around">
      {categories.map((cat) => (
        <Link key={cat} to={`/category/${cat}`}>
          {cat}
        </Link>
      ))}
    </div>
  );
}
