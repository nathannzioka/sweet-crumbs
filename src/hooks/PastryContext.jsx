import { useEffect, useState } from "react";

function usePastries() {
  const [pastries, setPastries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/pastries")
      .then((response) => response.json())
      .then((data) => {
        setPastries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return {
    pastries,
    setPastries,
    loading,
  };
}

export default usePastries;