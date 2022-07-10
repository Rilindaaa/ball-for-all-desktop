import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateAd } from "../../../api/ApiMethods";
import styles from "./EditAd.module.scss";
import { useState } from "react";
import CustomCheckBox from "../../CustomCheckBox/CustomCheckBox";
import { useEffect } from "react";
import FileUpload from "./../../FileUpload/FileUpload";

export default function EditAd({
  editAd,
  showFormModal,
  setShowFormModal,
  ads,
  setAds,
}) {
  const [adImage, setAdImage] = useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: editAd.title,
      description: editAd.description,
      url: editAd?.url,
      order: editAd.order,
      active: editAd.active,
    },
  });

  useEffect(() => {
    setAdImage(editAd.image);
  }, [editAd]);

  const handleUpdate = (data) => {
    const updatedAds = [];
    ads?.map((ad) => {
      if (ad.id === editAd.id)
        updatedAds.push({ ...ad, ...data, image: adImage });
      else updatedAds.push(ad);
    });

    return updatedAds;
  };

  const handleEditAd = async (data) => {
    const res = await updateAd({ ...data, image: adImage }, editAd.id);
    if (res.status === 200) {
      const updatedAds = handleUpdate(data);
      setAds(updatedAds);
    }
    setShowFormModal(false);
  };

  return (
    <Modal open={showFormModal} onClose={() => setShowFormModal(false)}>
      <Box className={styles.modal}>
        <div className={styles.container}>
          <span className={styles.addNewAdmin}>Edit Ad</span>
          <form onSubmit={handleSubmit(handleEditAd)}>
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
              defaultValue={editAd.active}
              control={control}
              errors={errors}
            />
            <FileUpload
              defaultImage={editAd.image}
              setUploadedImage={setAdImage}
            />

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
                type="submit"
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
