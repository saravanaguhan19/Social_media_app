import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";

function Input() {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function createPost() {
    setIsLoading(true);
    axios
      .post(
        "https://dummyapi.io/data/v1/post/create",
        {
          owner: "60d0fe4f5311236168a109ca",
          text: postText,
          image: imageUrl,
          likes: 0,
          publishDate: new Date(),
        },
        {
          headers: { "app-id": import.meta.env.VITE_APP_ID },
        }
      )
      .then((response) => {
        const responseObject = response.data;
        console.log(responseObject);
        setIsLoading(false);
      });

    console.log("called create post");
  }
  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        id="outlined-basic"
        fullWidth
        label="Your next post..."
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        variant="outlined"
      />
      <TextField
        sx={{ mt: "1rem" }}
        id="outlined-basic"
        fullWidth
        label="Image for your post..."
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        variant="outlined"
      />
      {!isLoading ? (
        <Button sx={{ mt: "1rem" }} variant="contained" onClick={createPost}>
          Submit
        </Button>
      ) : (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      )}
    </Box>
  );
}

export default Input;
