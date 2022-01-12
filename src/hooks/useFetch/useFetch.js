import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(url);
      setLoading(false);
      setData(response);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, data, error };
};

export default useFetch;
