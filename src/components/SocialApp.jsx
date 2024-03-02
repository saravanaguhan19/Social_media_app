import Input from "./Input/Input";
import MainContainer from "./MainContainer/MainContainer";

import PostCardContext from "../providers/PostProvider";
import usePosts from "../hooks/usePosts";

function SocialApp() {
  const { posts, setPosts } = usePosts();

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
