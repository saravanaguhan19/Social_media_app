import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../PostCard";

function PostCardList() {
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

  return posts.length == 0
    ? "Loading..."
    : posts.map((post) => (
        <PostCard
          content={post.text}
          image={post.image}
          authorFirstName={post.owner.firstName}
          key={post.id}
        />
      ));
}

export default PostCardList;
