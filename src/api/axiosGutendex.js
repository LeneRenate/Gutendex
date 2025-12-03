import axios from "axios";

const BASE_URL = "https://gutendex.com/books";

const fetchBooks = (params = {}) => {
  axios.get(BASE_URL, { params });
};

const fetchBookById = (id) => {
  axios.get(`${BASE_URL}/${id}`);
};

export { BASE_URL, fetchBooks, fetchBookById };
