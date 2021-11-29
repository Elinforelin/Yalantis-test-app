export const fetchData = async () => {
  return await fetch(
    "https://yalantis-react-school-api.yalantis.com/api/task0/users"
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
