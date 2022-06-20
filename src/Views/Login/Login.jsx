import styles from "./Login.module.scss";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ReactComponent as Logo } from "../../assets/svg/logo-black.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../api/ApiMethods";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { useSnackbar } from "notistack";

function Login() {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSignIn } = useContext(AuthContext);

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      const res = await login(data);
      if (res.status === 200) {
        handleSignIn(res.data);
      } else {
        enqueueSnackbar(res.response.data, { variant: "error" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.subContainer}>
          <Logo width={320} height={65} />
          <p className={styles.topText}>Login to your account</p>
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className={styles.subContainer}
        >
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
          <CustomButton label={"Login"} loading={loading} />
        </form>
      </div>
    </div>
  );
}

const schema = yup.object({
  email: yup.string().email("Invalid email format").required().label("Email"),
  password: yup.string().required().label("Password"),
});

export default Login;
