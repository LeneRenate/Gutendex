import axios from "axios";

export const fetchAllBooks = async () => {
  const res = await axios.get("https://gutendex.com/books");
  console.log(res.results);
};

// export const fetchAllCategories = async () => {
//   const res = await axios.get("");
//   return res;
// };
