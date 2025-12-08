import axios from "axios";

const BASE_URL = "https://gutendex.com/books";

const fetchBooks = async (params = {}) => {
  const res = await axios.get(BASE_URL, { params });
  // console.log(`fetchBooks: ${res.data}`);
  return res.data;
};

const fetchBookById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  // console.log(`fetchBooksById: ${res.data}`);
  return res.data;
};

// fetchBookById(100);

const fetchBooksByCategory = async (category) => {
  const res = await axios.get(`${BASE_URL}?topic=${category}`);
  const data = res.data;
  const books = data.results;
  // console.log(`fetchBooksByCat: ${books}`);
  return books;
};

// fetchBooksByCategory("mystery");

const fetchFromUrl = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export {
  BASE_URL,
  fetchBooks,
  fetchBookById,
  fetchBooksByCategory,
  fetchFromUrl,
};
