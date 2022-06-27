import React, { useEffect, useState } from "react";
import styles from "./Clubs.module.scss";
import { getPaginatedClubs } from "../../api/ApiMethods";
import ClubsTable from "./../../components/ClubsTable/ClubsTable";
import Paginator from "../../components/Paginator/Paginator";
import SearchInput from "../../components/SearchInput/SearchInput";
import { CircularProgress } from "@mui/material";

export default function Club() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pager, setPager] = useState({});
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 7,
    search: "",
  });

  const fetchClubs = async () => {
    setLoading(true);
    try {
      const result = await getPaginatedClubs({ ...query });
      setClubs(result.pageOfItems);
      setPager(result.pager);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClubs();
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.topText}>Clubs</p>
        <SearchInput setQuery={setQuery} />
      </div>
      {!loading ? (
        !!clubs?.length ? (
          <>
            <ClubsTable clubs={clubs} pager={pager} setClubs={setClubs} />
            <Paginator pager={pager} setQuery={setQuery} />
          </>
        ) : (
          <span>No clubs found!</span>
        )
      ) : (
        <CircularProgress size={55} style={{ alignSelf: "center" }} />
      )}
    </div>
  );
}
