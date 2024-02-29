import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../PostCard";

function PostCardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //we will download the content form dummy api
    axios
      .get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": "65e083fa7fecd49b17c11326" },
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
