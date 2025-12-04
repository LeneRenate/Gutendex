import axios from "axios";

const BASE_URL = "https://gutendex.com/books";

const fetchBooks = async (params = {}) => {
  const res = await axios.get(BASE_URL, { params });
  console.log(res.data);
  return res.data;
};

const fetchBookById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  console.log(res.data);
  return res.data;
};

fetchBookById(100);

const fetchBooksByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}?topic=${category}`);
  const data = res.data;
  const books = data.results;
  // console.log(books);
  return books;
};

// fetchBooksByCategory("mystery");

export { BASE_URL, fetchBooks, fetchBookById, fetchBooksByCategory };
