import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
function Home() {
  const { authData } = useContext(AuthContext);
  return (
    <div>
      <h1>This is the home page</h1>
      <span>
        Welcome
        <p>
          {`${authData?.[authData.role]?.firstName} ${
            authData?.[authData.role]?.lastName
          }`}
        </p>
      </span>
    </div>
  );
}

export default Home;
