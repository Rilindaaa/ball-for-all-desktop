import React, { useState } from "react";
import styles from "./Admin.module.scss";
import AdminTable from "../../components/AdminsTable/AdminsTable";
import CustomButton from "../../components/CustomButton/CustomButton";
import AddAdminModal from "../../components/AdminsTable/AddAdmin/AddAdmin";

export default function Admin() {
  const [showFormModal, setShowFormModal] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <p className={styles.topText}>Admins</p>
          <CustomButton
            label={"Add new"}
            containerStyle={{ width: "160px", height: "35px" }}
            onClick={() => setShowFormModal(true)}
          />
        </div>
        <AdminTable />
      </div>
      <AddAdminModal
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
      />
    </>
  );
}
