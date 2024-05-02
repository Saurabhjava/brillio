import axios from "axios";
import { useEffect, useState } from "react";

function DataFatching() {
  const [empData, setEmpData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then((response) => {
        console.log(response);
        setEmpData(response.data);
      })
      .catch((error) => {
        setErrorMsg("Error in fatching Data");
      });
  }, []);
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          {empData.length
            ? empData.map((e) => (
                <tr key={e.empid}>
                  <td>{e.empid}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.dob}</td>
                </tr>
              ))
            : errorMsg}
        </tbody>
      </table>
    </div>
  );
}
export default DataFatching;
