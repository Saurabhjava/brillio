import axios from "axios";
import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });
  const auth = useAuth();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/users/login", user)
      .then((response) => {
        if (response.data === "Valid") {
          auth.login(user.userId);
          navigate("/profile");
        } else {
          setMsg("Invalid User");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container" style={{ height: "200px", width: "200px" }}>
      <div>
        <label>UserName</label>
        <input
          type="text"
          className="form-control"
          name="userId"
          value={user.userId}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={user.password}
          onChange={changeHandler}
        />
      </div>
      <div>
        <button
          className="btn btn-primary"
          style={{ marginTop: "5px" }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <h4>{msg}</h4>
    </div>
  );
}
export default Login;
