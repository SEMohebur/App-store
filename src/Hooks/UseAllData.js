import { useState, useEffect } from "react";

import axios from "axios";

const useAllData = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/mainData.json")
      .then((data) => setAllData(data.data))
      .catch((er) => setError(er))
      .finally(() => setLoading(false));
  }, []);
  return { allData, loading, error };
};

export default useAllData;
