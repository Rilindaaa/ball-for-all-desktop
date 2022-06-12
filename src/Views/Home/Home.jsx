import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import styles from "./Home.module.scss";
function Home() {
  const { authData } = useContext(AuthContext);
  return <div className={styles.container}></div>;
}

export default Home;
