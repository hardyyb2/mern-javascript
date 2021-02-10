import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { homeOperations } from "./duck";

import styles from "./Home.module.css";

const HomeComponent = () => {
  const { error, loading } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [err, setErr] = useState("");

  const [oldName, setOldName] = useState("");
  const [oldAge, setOldAge] = useState("");

  const checkDetails = () => {
    let userDetails = localStorage.getItem("userDetails");
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
          <input
            type="text"
            placeholder="Enter Name..."
            value={newName}
            name="name"
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Enter Age..."
            value={newAge}
            name="age"
            onChange={handleChange}
            className={styles.input}
          />

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Wait" : "Submit"}
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
