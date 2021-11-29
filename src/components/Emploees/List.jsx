import React from "react";
import ListItem from "./ListItem";

const List = ({ users, ...props }) => {
  return (
    <ul>
      {users.map((user) => (
        <ListItem key={user.id} user={user} {...props} />
      ))}
    </ul>
  );
};

export default List;
