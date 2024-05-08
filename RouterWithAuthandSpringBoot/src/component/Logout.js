import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  auth.logout();

  return navigate("/");
};
