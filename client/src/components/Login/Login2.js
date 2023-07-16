import React from 'react'
import  { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login2 = () => {
  const [usn, setusn] = useState("");
  const [passwordd, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  const [passtext, setpasstext] = useState("password");
  // eslint-disable-next-line
  const port = "http://localhost:7000";
  // eslint-disable-next-line
  const Port = "https://expensive-hem-elk.cyclic.app";

  let navigate = useNavigate();
  function regestr() {
    navigate("/regester");
  }
  function clicki() {
    const dat = {
      usn: usn,
      password: passwordd,
    };
    console.log(dat);
    axios
      .post(port + "/api/user/login", dat)
      .then((res) => {
        if (res.data.auth) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("uid", res.data.uid);
          navigate("/");
        }
      })
      .catch((err) => {
        alert("alert INVALID Password or usn" + err);
        navigate("/login");
      });
  }
  return (
    <div className='pb-64 bg-gradient-to-b flex justify-center items-center from-yellow-400 to-yellow-500' >
      <div className='pl-24 pr-32 pt-10 pb-10 m-28 rounded-lg bg-black text-white flex flex-col items-center justify-center'>
        <h1 className='text-white text-4xl '>Sign in to your account</h1>
        <div className='flex flex-col mt-16 '>
       
        <input className='p-3 rounded-lg'type="text"
        placeholder='Enter USN' id='usn' 
                  onChange={(e) => {
                    if (e.target.value.length > 10) {
                      e.target.value = e.target.value.slice(0, 10);
                    }
                    setusn(e.target.value.toString());
                  }}
                  maxLength={35}
                />
                
        <input className='p-3 mt-8 rounded-lg' id='password'
        placeholder='Enter Password'
        type={passtext}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        maxLength={35}
                />
        <div className='flex flex-row justify-between mt-10'>          
        <button className='bg-sky-700 mr-6 rounded-sm text-white p-2 justify-start hover:bg-white hover:text-sky-700'
        
        onClick={regestr}
                >Create one ? </button>
        <button className='bg-green-600 mr-2 rounded-sm text-white p-2 justify-start hover:bg-white hover:text-green-600'
        
        onClick={clicki}
                >Sign in</button>
                </div>
                </div>
      </div>
    </div>
  )
}

export default Login2