import axios from "axios";
import { useEffect, useState } from "react";

function FindEmployee() {
  const [empData, setEmpData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [empid, setEmpid] = useState(1);
  const [empidFromButtonClick, setEmpidFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/employees/${empidFromButtonClick}`)
      .then((response) => {
        console.log(response.data);
        setEmpData(response.data);
      })
      .catch((error) => {
        setEmpData({});
        setErrorMsg("Employee Not Found");
      });
  }, [empidFromButtonClick]);
  const clickHandler = () => {
    setEmpidFromButtonClick(empid);
  };
  return (
    <div>
      Employee Id
      <input
        type="text"
        value={empid}
        onChange={(e) => setEmpid(e.target.value)}
      />
      <button className="btn btn-primary" onClick={clickHandler}>
        Search
      </button>
      {Object.keys(empData).length !== 0 ? (
        <table className="table table-bordered">
          <tbody>
            <tr key={empData.empid}>
              <td>{empData.empid}</td>
              <td>{empData.name}</td>
              <td>{empData.email}</td>
              <td>{empData.dob}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>{errorMsg}</p>
      )}
    </div>
  );
}
export default FindEmployee;
