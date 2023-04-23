import { useEffect, useState } from "react";
import { getCatFacts } from "../../../../../api/getCatFacts";

export const useNotes = () => {
  const [catsfacts, setCatfacts] = useState([]);

  useEffect(() => {
    getCatFacts()
      .then((res) => {
        setCatfacts(res.data);
      })
      .catch((err) => {
        setCatfacts([]);
      });
  }, []);

  return catsfacts
};
