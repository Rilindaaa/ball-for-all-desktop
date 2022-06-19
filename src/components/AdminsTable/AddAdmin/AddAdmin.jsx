import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerAdmin } from "../../../api/ApiMethods";
import styles from "./AddAdmin.module.scss";

export default function AddAdminModal({ showFormModal, setShowFormModal }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addAdmin = async (data) => {
    await registerAdmin({ ...data, role: "Admin" });
    setShowFormModal(false);
  };
  return (
    <Modal open={showFormModal} onClose={() => setShowFormModal(false)}>
      <Box className={styles.modal}>
        <div className={styles.container}>
          <span className={styles.addNewAdmin}>Add New Admin</span>
          <form onSubmit={handleSubmit(addAdmin)}>
            <CustomInput
              label={"Firstname"}
              name="firstName"
              control={control}
              errors={errors}
              type={"text"}
            />
            <CustomInput
              label={"Lastname"}
              name="lastName"
              control={control}
              errors={errors}
              type={"text"}
            />
            <CustomInput
              label={"Email"}
              name="email"
              control={control}
              errors={errors}
              type={"text"}
            />
            <CustomInput
              name="password"
              control={control}
              label={"Password"}
              errors={errors}
              type={"password"}
            />
            <div className={styles.buttonContainer}>
              <CustomButton
                label={"Save"}
                containerStyle={{
                  width: "150px",
                  height: "40px",
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
              />
            </div>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

const schema = yup.object({
  firstName: yup.string().required().label("Firstname"),
  lastName: yup.string().required().label("Lastname"),
  email: yup.string().email("Invalid email format").required().label("Email"),
  password: yup.string().required().label("Password"),
});
