import React, { useEffect, useState } from "react";
import styles from "./Player.module.scss";
import PlayersTable from "../../components/PlayersTable/PlayersTable";
import SearchInput from "../../components/SearchInput/SearchInput";
import { getAllPlayers } from "../../api/ApiMethods";
import Paginator from "../../components/Paginator/Paginator";
import { CircularProgress } from "@mui/material";

export default function Player() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pager, setPager] = useState({});
  const [query, setQuery] = useState({
    page: 1,
    pageSize: 7,
    search: "",
  });

  const fetchPlayers = async () => {
    setLoading(true);
    try {
      const result = await getAllPlayers({ ...query });
      setPlayers(result.pageOfItems);
      setPager(result.pager);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.topText}>Players</p>
        <SearchInput setQuery={setQuery} />
      </div>
      {!loading ? (
        !!players?.length ? (
          <>
            <PlayersTable
              players={players}
              pager={pager}
              setPlayers={setPlayers}
            />
            <Paginator pager={pager} setQuery={setQuery} />
          </>
        ) : (
          <span>No players found!</span>
        )
      ) : (
        <CircularProgress size={55} style={{ alignSelf: "center" }} />
      )}
    </div>
  );
}
