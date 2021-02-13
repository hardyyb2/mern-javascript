import { Layout } from "../layout";
import { Routes } from "../Routes";

import "../styles/GlobalStyles.css";
import "../styles/TypoGraphy.css";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
};

export default App;
