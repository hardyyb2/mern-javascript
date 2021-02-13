import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Input } from "../common";
import { getFromLocalStorage } from "../utils/functions";
import { USER_DETAILS_KEY } from "../utils/constants";

import { homeOperations } from "../store/ducks";

import styles from "../styles/PageStyles/Home.module.css";

const HomeComponent = () => {
  const { error } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [err, setErr] = useState("");

  const [oldName, setOldName] = useState("");
  const [oldAge, setOldAge] = useState("");

  const checkDetails = () => {
    let userDetails = getFromLocalStorage(USER_DETAILS_KEY);
    if (userDetails) {
      userDetails = JSON.parse(userDetails);
      setOldName(userDetails.name);
      setOldAge(userDetails.age);
    }
  };

  useEffect(() => {
    checkDetails();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newName) {
      return setErr("Please enter Name");
    } else if (!newAge) {
      return setErr("Please enter Age");
    }
    dispatch(homeOperations.addName(newName, parseInt(newAge)));
    setTimeout(() => {
      checkDetails();
    }, 1000);
  };

  const handleChange = (event) => {
    setErr("");
    const elem = event.target.name;
    const val = event.target.value;
    if (elem === "name") {
      setNewName(val);
    } else if (elem === "age") {
      setNewAge(val);
    }
  };

  return (
    <div className={styles.root}>
      {oldName ? (
        <div className={styles.details}>
          Welcome, {oldName} ( {oldAge} )
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input value={newName} name="name" onChange={handleChange} />
          <Input value={newAge} name="age" onChange={handleChange} />
          <button type="submit" className={styles.button}>
            Submit
          </button>
          <div className={styles.error}>
            {err} <br /> {error}
          </div>
        </form>
      )}
    </div>
  );
};

export default HomeComponent;
