import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createAd } from "../../../api/ApiMethods";
import styles from "./CreateAd.module.scss";
import FileUpload from "../../FileUpload/FileUpload";
import { useState } from "react";
import CustomCheckBox from "../../CustomCheckBox/CustomCheckBox";

export default function CreateAd({ showFormModal, setShowFormModal, setAds }) {
  const [adImage, setAdImage] = useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateAd = async (data) => {
    const res = await createAd({ ...data, image: adImage });
    if (res.status === 200) {
      setAds((prevState) => [res.data, ...prevState]);
    }
    reset();
    setShowFormModal(false);
  };
  return (
    <Modal open={showFormModal} onClose={() => setShowFormModal(false)}>
      <Box className={styles.modal}>
        <div className={styles.container}>
          <span className={styles.addNewAdmin}>New Ad</span>
          <form onSubmit={handleSubmit(handleCreateAd)}>
            <CustomInput
              label={"Title"}
              name="title"
              control={control}
              errors={errors}
              type={"text"}
            />
            <CustomInput
              label={"Description"}
              name="description"
              control={control}
              errors={errors}
              type={"text"}
              multiline
            />
            <CustomInput
              label={"URL"}
              name="url"
              control={control}
              errors={errors}
              type={"text"}
              multiline
            />
            <CustomInput
              label={"Order"}
              name="order"
              control={control}
              errors={errors}
              type={"number"}
              multiline
            />
            <CustomCheckBox
              label={"Active"}
              name="active"
              control={control}
              errors={errors}
            />
            <FileUpload setUploadedImage={setAdImage} />

            <div className={styles.buttonContainer}>
              <CustomButton
                label={"Save"}
                containerStyle={{
                  width: "150px",
                  height: "40px",
                }}
                labelStyle={{
                  fontSize: "15px",
                }}
              />
              <CustomButton
                label={"Cancel"}
                onClick={() => setShowFormModal(false)}
                containerStyle={{
                  width: "150px",
                  height: "40px",
                  border: "1px solid gray",
                  backgroundColor: "transparent",
                  color: "gray",
                }}
                labelStyle={{
                  fontSize: "15px",
                }}
              />
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

const schema = yup.object({
  title: yup.string().required().label("Title"),
  description: yup.string().required().label("description"),
  url: yup.string().url().required().label("URL"),
  order: yup.number().label("Order"),
});
