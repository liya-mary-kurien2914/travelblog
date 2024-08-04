//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )


//Write your code here
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deletePost = (id) => {
    axios
      .delete(http://localhost:3001/posts/2351})
      .then((res) => {
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {posts.map((post) => (
        <Card key={post._id} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={post.https://images.app.goo.gl/YVDZ9pVJmhqXdpxB9} alt={post.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
            <Button variant="contained" color="secondary" onClick={() => deletePost(post._id)}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Home;