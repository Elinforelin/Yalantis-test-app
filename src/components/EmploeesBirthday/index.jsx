import BirthdayList from "./BirthdayList";
import classes from "./emploeesBirthday.module.css";

const EmploeesBirthday = (props) => {
  return (
    <div className={classes.wrap}>
      <h2>Emploees Birthday</h2>
      {!props.selectedArray.length
        ? "Emploees List is empty"
        : props.reorderedMonths.map(({ month, users }) => (
            <div key={month}>
              <h2>{month}</h2>
              {!users.length ? (
                <div>No emploees </div>
              ) : (
                <ul>
                  {users.map((user) => (
                    <BirthdayList user={user} key={user.id} />
                  ))}
                </ul>
              )}
            </div>
          ))}
    </div>
  );
};

export default EmploeesBirthday;
