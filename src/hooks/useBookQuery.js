import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks, fetchBookById } from "../api/axiosGutendex";

export const useAllBook = () => {
  return useQuery({
    queryKey: ["books"],
    queryFn: fetchAllBooks,
  });
};

export const useBookDetails = (id) => {
  return useQuery({
    queryKey: ["bookDetails", id],
    queryFn: () => fetchBookById(id),
    enabled: !!id,
  });
};
