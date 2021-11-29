import { useEffect, useMemo, useState } from "react";
import { fetchData } from "../data";
import { ALPHABET, MONTHS } from "../data/constants";

export const useUsersPage = () => {
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const [sortedUser, setSortedUser] = useState([]);
  const [selectedArray, setSelectedArray] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("selectedArray");
    if (localData) {
      setSelectedArray(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedArray", JSON.stringify(selectedArray));
  }, [selectedArray]);

  const reorderedMonths = useMemo(() => {
    const currentMonth = new Date().getMonth();
    const newOrderedMonths = MONTHS.slice(currentMonth).concat(
      MONTHS.slice(0, currentMonth)
    );
    const usersWithBirthday = newOrderedMonths.map(({ number, title }) => ({
      month: title,
      users: selectedArray
        .sort((a, b) => (b.lastName < a.lastName ? 1 : -1))
        .filter((user) => new Date(user.dob).getMonth() + 1 === number),
    }));
    return usersWithBirthday;
  }, [selectedArray]);

  useEffect(() => {
    fetchData().then((data) => {
      setUsersData(data);
      setLoading(false);
      const sortedArray = ALPHABET.map((letter) => ({
        letter,
        users: data.filter((user) => {
          return user.firstName.charAt(0).toLowerCase() === letter;
        }),
      }));
      setSortedUser(sortedArray);
    });
  }, []);

  const handlerAdd = (event) => {
    let user = usersData.find((user) => user.id === event.target.name);
    setSelectedArray([...selectedArray, user]);
  };
  const handlerRemove = (event) => {
    let user = usersData.find((user) => user.id === event.target.name);
    setSelectedArray((prevSelectedArr) =>
      prevSelectedArr.filter((item) => item.id !== user.id)
    );
  };

  return {
    loading,
    sortedUser,
    selectedArray,
    handlerAdd,
    handlerRemove,
    reorderedMonths,
  }
}