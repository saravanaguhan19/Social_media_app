import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function useUserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/user/${id}`, {
        headers: { "app-id": import.meta.env.VITE_APP_ID },
      })
      .then((response) => {
        console.log(response.data);
        setUser({ ...response.data });
        setLoading(false);
      });
  }, []);

  return [user, loading];
}
