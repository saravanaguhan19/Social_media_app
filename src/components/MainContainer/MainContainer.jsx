import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import Box from "@mui/material/Box";

import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList";

export default function RowAndColumnSpacing() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      sx={{ width: "100%", mt: "4rem" }}
    >
      <Grid
        container
        alignItems={"start"}
        justifyContent={"center"}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid md={6}>
          {/* Users */}
          <UserList />
        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          md={6}
        >
          {/* Posts */}
          <PostCardList />
        </Grid>
      </Grid>
    </Box>
  );
}
