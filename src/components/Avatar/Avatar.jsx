import React, { useState, useEffect } from "react";

import styles from "./Avatar.module.scss";

export default function Avatar({ image, size = 50, name }) {
  const [initials, setInitials] = useState("");

  const extractInitials = () => {
    const fullName = name?.split(" ");
    const result =
      (fullName?.[0]?.charAt(0) || "") + (fullName?.[1]?.charAt(0) || "");
    setInitials(result?.toUpperCase());
  };

  useEffect(() => {
    extractInitials();
  }, [name]);

  return (
    <div
      style={size && { width: size, height: size }}
      className={styles.avatarContainer}
    >
      {!image ? (
        <p style={size && { fontSize: size / 2.5 }} className={styles.initials}>
          {initials}
        </p>
      ) : (
        <img alt={"Avatar"} className={styles.imageStyle} src={image} />
      )}
    </div>
  );
}
