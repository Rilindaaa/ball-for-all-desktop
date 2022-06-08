import styles from "./Login.module.scss";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log("dataaaaaa", data);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.subContainer}>
          <p className={styles.topText}>BALL FOR ALL</p>
          <p className={styles.topText}>Login to your account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.subContainer}>
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
        <div className={styles.subContainer}>
          <p className={styles.forgotPassword}>Forgot Password?</p>
          <div className={styles.bottomContainer}>
            <p className={styles.dontHaveAccount}>
              Dont have an account yet? Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const schema = yup.object({
  email: yup.string().required().label("Email"),
  password: yup.string().required().label("Password"),
});

export default Login;
