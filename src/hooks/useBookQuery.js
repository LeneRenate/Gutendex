import { useState, useEffect } from "react";
import axios from "axios";
import { axioxGutendex } from "../api/axiosGutendex";

export const useBookQuery = (initialUrl, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axioxGutendex.get(url, {
          params: url.includes(axioxGutendex.defaults.baseURL) ? {} : params,
          cancelToken: source.token,
        });
        setData(res.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();

    return () => {
      source.cancel("Component unmounted or URL changed");
    };
  }, [url, params]);

  return { data, loading, error, setUrl };
};
