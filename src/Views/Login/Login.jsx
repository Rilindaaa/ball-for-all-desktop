import styles from "./Login.module.scss";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ReactComponent as Logo } from "../../assets/svg/logo-black.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../api/ApiMethods";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate();

  const { handleSignIn } = useContext(AuthContext);

  const handleLogin = async (data) => {
    const response = await login(data);
    if (response.status === 200) {
      handleSignIn(response.data);
      navigate("/");
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
          <CustomButton label={"Login"} />
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
