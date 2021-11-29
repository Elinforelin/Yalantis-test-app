import React from "react";

import classes from "./usersPage.module.css";
import Emploees from "../components/Emploees";
import EmploeesBirthday from "../components/EmploeesBirthday";
import { useUsersPage } from "./useUsersPage";

function UsersPage() {
  const {
    loading,
    sortedUser,
    selectedArray,
    handlerAdd,
    handlerRemove,
    reorderedMonths,
  } = useUsersPage();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.page}>
      <Emploees
        sortedUser={sortedUser}
        selectedArray={selectedArray}
        handlerAdd={handlerAdd}
        handlerRemove={handlerRemove}
      />
      <EmploeesBirthday
        selectedArray={selectedArray}
        reorderedMonths={reorderedMonths}
      />
    </div>
  );
}
export default UsersPage;
