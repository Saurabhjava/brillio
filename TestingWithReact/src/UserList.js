import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((usr) => (
          <li key={usr.id}>{usr.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
