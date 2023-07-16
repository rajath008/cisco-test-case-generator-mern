import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DisplayTestCases from "../components/DisplayTestCases";

const DisplayCN = () => {
    let navigate = useNavigate();
    const port = "http://localhost:7000";
    useEffect(() => {
      axios
        .get(port + "/api/user/isUserAuth", {
          headers: { "x-access-token": localStorage.getItem("token") },
        })
        .then((response) => {
          if (!response.data.auth) {
            // navigate("/login");
            // setload(response.data.auth);
          } else {
            // setload(true);
          }
        });
    }, []);
  return <>
  <DisplayTestCases name="Computer Networks"></DisplayTestCases>
  </>;
};

export default DisplayCN;
