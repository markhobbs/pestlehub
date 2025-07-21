// useFetch.jsx
import {useState,useEffect} from "react";
import {headers} from "../utils/headers";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, { headers })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;