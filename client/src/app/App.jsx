import { Routes } from "../Routes";

import "../styles/GlobalStyles.css";
import "../styles/TypoGraphy.css";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <Routes />
    </div>
  );
};

export default App;
