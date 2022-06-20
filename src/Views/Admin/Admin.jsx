import React, { useEffect, useState } from "react";
import styles from "./Admin.module.scss";
import AdminTable from "../../components/AdminsTable/AdminsTable";
import CustomButton from "../../components/CustomButton/CustomButton";
import AddAdminModal from "../../components/AdminsTable/AddAdmin/AddAdmin";
import { getAllAdmins } from "../../api/ApiMethods";
import Paginator from "../../components/Paginator/Paginator";
import SearchInput from "../../components/SearchInput/SearchInput";
import { ReactComponent as Plus } from "../../assets/svg/plus.svg";
import { CircularProgress } from "@mui/material";

export default function Admin() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pager, setPager] = useState({});
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 2,
    search: "",
  });

  const fetchPlayers = async () => {
    setLoading(true);
    try {
      const result = await getAllAdmins({ ...query });
      setAdmins(result.pageOfItems);
      setPager(result.pager);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, [query]);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.topText}>Admins</p>
        <div className={styles.subContainer}>
          <SearchInput setQuery={setQuery} />
          <CustomButton
            label={"Add new"}
            containerStyle={{ width: "130px" }}
            labelStyle={{ fontSize: 16 }}
            startIcon={<Plus className={styles.plusIcon} />}
            onClick={() => setShowFormModal(true)}
          />
        </div>
        {!loading ? (
          !!admins?.length ? (
            <>
              <AdminTable admins={admins} pager={pager} setAdmins={setAdmins} />
              <Paginator pager={pager} setQuery={setQuery} />
            </>
          ) : (
            <span>No admins found!</span>
          )
        ) : (
          <CircularProgress size={55} style={{ alignSelf: "center" }} />
        )}
      </div>
      <AddAdminModal
        showFormModal={showFormModal}
        setShowFormModal={setShowFormModal}
      />
    </>
  );
}
