import React from "react";

import styles from "./Post.module.scss";
import getFullName from "../../helpers/extractFullname";
import Avatar from "./../Avatar/Avatar";
import CustomButton from "./../CustomButton/CustomButton";
import formatDate from "./../../helpers/formatDate";

export default function Post({ post, handleDeletePost }) {
  const media = post?.media;
  const isVideo = post?.media?.endsWith(".mp4");

  return (
    <div className={styles.container}>
      <>
        <div className={styles.topContainer}>
          <div className={styles.userData}>
            <Avatar
              name={getFullName(post.User)}
              size={45}
              image={post.User?.profilePic}
            />
            <div className={styles.dateContainer}>
              <h3 className={styles.name}>{getFullName(post.User)}</h3>
              <span className={styles.date}>{formatDate(post?.createdAt)}</span>
            </div>
          </div>
          <CustomButton
            label="Delete"
            variant="outlined"
            color="#ff0000"
            onClick={() => handleDeletePost()}
            containerStyle={{ width: "100px", height: "40px" }}
            labelStyle={{ fontSize: "12px" }}
          />
        </div>
        <div className={styles.middleContainer}>
          <p className={styles.description}>{post?.content}</p>
          {media &&
            (!isVideo ? (
              <img src={media} className={styles.image} />
            ) : (
              <video className={styles.image} src={media} controls />
            ))}
        </div>
      </>
    </div>
  );
}
