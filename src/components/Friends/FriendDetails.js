import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friendId]);

  return (
    <div>
      <h1>hi dost ki khobor: {friendId}</h1>
      <h3>Name:{friend.name}</h3>
      <h4>Email:{friend.email}</h4>
      <p>
        <small>City:{friend.address?.city}</small>
      </p>
    </div>
  );
};

export default FriendDetails;
