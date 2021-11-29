const BirthdayList = ({ user }) => {
  return (
    <li>
      {user.firstName} {user.lastName}
      {" - "}
      {new Date(user.dob).toDateString()}
    </li>
  );
};

export default BirthdayList;
