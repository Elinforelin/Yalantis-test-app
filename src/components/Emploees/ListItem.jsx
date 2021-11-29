import React from "react";
import classes from "./emploees.module.css";

const ListItem = ({ user, selectedArray, handlerRemove, handlerAdd }) => {
  const isSelected = selectedArray.some((u) => u.id === user.id);

  return (
    <li key={user.id}>
      <div className={isSelected ? classes.active : ""}>
        <h4>
          {user.firstName} {user.lastName}
        </h4>
      </div>
      <label>
        <input
          type="radio"
          value="false"
          onChange={handlerRemove}
          name={user.id}
          checked={!isSelected ? "checked" : ""}
        />
        not active
      </label>
      <label>
        <input
          type="radio"
          value="true"
          onChange={handlerAdd}
          name={user.id}
          checked={isSelected}
        />
        active
      </label>
    </li>
  );
};

export default ListItem;
