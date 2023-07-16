import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Subjects from "../components/Subjects";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
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
    <>
      <Header />
      <About />
      <Subjects />
      <Footer />
    </>
  );
};

export default Home;
