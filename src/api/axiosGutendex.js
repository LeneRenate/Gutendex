import axios from "axios";

const BASE_URL = "https://gutendex.com/books";

const fetchAllBooks = async () => {
  const res = await axios.get(BASE_URL);
  console.log(res.results);
};

const fetchBookById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.title;
};

// Make more general?
const fetchBookByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}?topic=${category}`);
  return res.results;
};

export { fetchAllBooks, fetchBookById, fetchBookByCategory };
