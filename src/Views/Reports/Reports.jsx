import React, { useEffect, useState } from "react";
import styles from "./Reports.module.scss";
import { deletePost, getAllReports, getAllUsers } from "../../api/ApiMethods";
import Avatar from "../../components/Avatar/Avatar";
import getFullName from "./../../helpers/extractFullname";
import Post from "../../components/Post/Post";
import { useSnackbar } from "notistack";
import { CircularProgress } from "@mui/material";
import UserSelector from "../../components/UserSelector/UserSelector";

export default function Vacancy() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchReports = async (id) => {
    setLoading(true);
    try {
      const reports = await getAllReports({ id });
      setReports(reports.data);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    const users = await getAllUsers();
    setUsers(
      users?.map((user) => {
        const fullName = getFullName(user);
        return {
          label: fullName,
          value: user.id,
        };
      })
    );
  };

  useEffect(() => {
    fetchReports();
    fetchUsers();
  }, []);

  const handleDeletePost = async (id) => {
    const res = await deletePost(id);
    if (res.status === 200) {
      enqueueSnackbar("Post was deleted!", { variant: "info" });
      setReports(reports.filter((report) => report.Post.id !== id));
    }
  };

  const handleClubFilter = (data) => {
    const id = data.target.value === "all" ? "" : data.target.value;
    fetchReports(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.topText}>Reports</p>
        <UserSelector options={users} onChange={handleClubFilter} />
      </div>
      <div className={styles.reports}>
        {!loading ? (
          reports?.length ? (
            reports.map((report) => {
              const fullName = getFullName(report.User);
              return (
                <div className={styles.report}>
                  <div className={styles.reporter}>
                    <h3>Reporter:</h3>
                    <div>
                      <Avatar
                        size={40}
                        name={fullName}
                        image={report.User.profilePic}
                      />
                      <div className={styles.reporterData}>
                        <h4>{fullName}</h4>
                        <p>{report.User.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.reason}>
                    <h3>Reason:</h3>
                    <span>{report.reason}</span>
                  </div>
                  <div className={styles.post}>
                    <h3>Post:</h3>
                    <Post
                      post={report.Post}
                      handleDeletePost={() => handleDeletePost(report.Post.id)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <h4>No reports found!</h4>
          )
        ) : (
          <CircularProgress size={55} style={{ alignSelf: "center" }} />
        )}
      </div>
    </div>
  );
}
