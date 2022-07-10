import styles from "./FileUpload.module.scss";

import React, { useState } from "react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

const FileUpload = ({ setUploadedImage, defaultImage = "" }) => {
  const [image, setImage] = useState();

  const onSuccess = (result) => {
    setImage(result.info);
    setUploadedImage(result.info.secure_url);
  };

  return (
    <div className={styles.container}>
      <WidgetLoader />
      <Widget
        resourceType={"image"}
        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
        uploadPreset={process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET}
        buttonText={"Upload image"}
        style={{
          color: "#228176",
          border: "none",
          width: "100%",
          backgroundColor: "transparent",
          borderRadius: "4px",
          borderColor: "#228176",
          borderWidth: "1px",
          borderStyle: "solid",
          height: "40px",
          cursor: "pointer",
        }}
        folder={"ads"}
        cropping={true}
        autoClose={true}
        onSuccess={onSuccess}
        destroy={true}
      />
      <img
        src={image?.secure_url || defaultImage}
        className={styles.imagePreview}
        alt={image?.original_filename}
      />
    </div>
  );
};
export default FileUpload;
