import classes from "./emploees.module.css";
import List from "./List";

const Emploees = ({ sortedUser, ...props }) => {
  return (
    <div className={classes.wrap}>
      <h2>Emploees</h2>
      {sortedUser.map((item) => (
        <div key={item.letter}>
          <h3>{item.letter.toUpperCase()}</h3>
          {!item.users.length ? (
            "No emploees"
          ) : (
            <List users={item.users} {...props} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Emploees;
