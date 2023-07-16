import AIMLquestion from '../components/AIMLquestion'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChooseAIML = () => {

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
  return (
    <AIMLquestion/>
  )
}

export default ChooseAIML