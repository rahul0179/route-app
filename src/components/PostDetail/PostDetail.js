import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [postId]);

  return (
    <div>
      <h1>Post Details:{posts.id}</h1>
      <h2>Title:{posts.title}</h2>
      <h4>
        <small>Body: {posts.body}</small>
      </h4>
    </div>
  );
};

export default PostDetail;
