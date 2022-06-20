import styles from "./Paginator.module.scss";

import React from "react";
import { Pagination } from "@mui/material";
import CustomSelect from "../CustomSelect/CustomSelect";

const Paginator = ({ pager, setQuery, containerStyle }) => {
  const handleChange = (event, value) => {
    setQuery((prev) => ({ ...prev, page: value }));
  };

  const changePageSize = (event) => {
    setQuery((prev) => ({ ...prev, pageSize: event.target.value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.pagerDetails}>
        <div className={styles.pageRows}>
          <span>Rows per page</span>
          <CustomSelect
            containerStyle={{ padding: "0 10px" }}
            onChange={changePageSize}
            defaultValue={7}
            options={[
              { label: 7, value: 7 },
              { label: 20, value: 20 },
              { label: 50, value: 50 },
              { label: 100, value: 100 },
            ]}
          />
        </div>
        <span className={styles.shownRows}>
          Showing {pager.startIndex + 1} - {pager.endIndex + 1} of{" "}
          {pager.totalItems}
        </span>
      </div>
      <Pagination
        count={pager.totalPages}
        page={pager.currentPage}
        onChange={handleChange}
        color="primary"
      />
    </div>
  );
};

export default Paginator;
