import { useContext } from "react";

import PostCard from "../PostCard";
import PostCardContext from "../../providers/PostProvider";

function PostCardList() {
  const { posts, setPosts } = useContext(PostCardContext);

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
