import "./MyStyle.css";
import style from "./NewStyle.module.css";
function Welcome(props) {
  let cName = props.isPrimaryColor ? "primaryColor" : "";
  return (
    <div>
      <h1 className={`${cName} font-xl`}>Welcome User!!</h1>
      <h2 className={style.basicStyle}>ModuleStyle</h2>
    </div>
  );
}

export default Welcome;
