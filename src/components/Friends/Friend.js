import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const navigate = useNavigate();
  const showFriend = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h2>Name:{name}</h2>
      <Link to={"/friend/" + id}>Show details</Link>
      <button onClick={showFriend}>
        {username} id:{id}
      </button>
    </div>
  );
};

export default Friend;
