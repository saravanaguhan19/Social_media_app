import Input from "./Input/Input";
import MainContainer from "./MainContainer/MainContainer";
import Navbar from "./Navbar/Navbar";
import PostCardContext from "../providers/PostProvider";
import { useState, useEffect } from "react";
import axios from "axios";
function SocialApp() {
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

  return (
    <div>
      <PostCardContext.Provider value={{ posts, setPosts }}>
        
        <Input />
        <MainContainer />
      </PostCardContext.Provider>
    </div>
  );
}

export default SocialApp;
