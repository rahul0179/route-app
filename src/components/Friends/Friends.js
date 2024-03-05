import React from "react";
import { useEffect, useState } from "react";
import Friend from "../Friends/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <div>
        <h2>Hellow friend - How are you</h2>
        <p>Parle kichu tk dhar dis: {friends.length}</p>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
