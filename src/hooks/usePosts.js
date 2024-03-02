import { useState, useEffect } from "react";
import axios from "axios";

export default function usePosts(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      console.log(import.meta.env.VITE_APP_ID);
      //we will download the content form dummy api
      axios
        .get("https://dummyapi.io/data/v1/post", {
          headers: { "app-id": import.meta.env.VITE_APP_ID },
        })
        .then((response) => {
          const responseObject = response.data;
          console.log(response.data.data);
          setPosts([...responseObject.data]);
        });
    }, []);

    return {posts ,setPosts };
}