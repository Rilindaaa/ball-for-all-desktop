import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { AuthContext } from "../contexts/AuthContext";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  const { authData } = useContext(AuthContext);

  if (!authData.id) {
    return children;
  }
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <div className={styles.subContainer}>{children}</div>
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
