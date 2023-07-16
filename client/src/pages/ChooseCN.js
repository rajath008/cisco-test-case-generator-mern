import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CNquestion from "../components/CNquestion";

const ChooseCN = () => {
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
  return <CNquestion />;
};

export default ChooseCN;
