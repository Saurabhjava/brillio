import { useAuth } from "./Auth";

function Profile() {
  const auth = useAuth();
  return <div>Welcome {auth.userId}</div>;
}
export default Profile;
