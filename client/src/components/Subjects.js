import React from "react";
import cn from "../assets/cn.jpg";
import aiml from "../assets/aiml.png";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  let navigate = useNavigate();

  return (
    <div className="pt-32 pb-32 pr-10 pl-10 bg-gradient-to-b from-gray-800 to-black text-white flex flex-col ">
      <h1 className="text-5xl text-white">Contribute test cases for ...</h1>
      <div className="flex flex-row justify-between">
        <div class="mt-20 pl-10 pr-10 mb-20 pt-20 pb-20 max-w-lg rounded overflow-hidden bg-gradient-to-b from-yellow-500 to-yellow-400 shadow-lg shadow-yellow-300/75">
          <img class="w-full" src={aiml} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Artificial Intelligence and Machine Learning
            </div>
            <p class="text-gray-700 text-base">
              Provide test cases for graph traversal algorithims in terms of
              graphs and datasets for machine learning algorithms in terms of
              links.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              className="m-auto bg-black p-3 rounded-lg hover:bg-white hover:text-yellow-500"
              onClick={() => {
                localStorage.setItem(
                  "sub",
                  "Artificial Intelligence and Machine Learning"
                );
                navigate("/choose-aiml");
              }}
            >
              Contribute
            </button>
          </div>
        </div>
        <div class="mt-20 pl-10 pr-10 mb-20 pt-20 pb-20 max-w-lg rounded overflow-hidden bg-gradient-to-b from-yellow-500 to-yellow-400 shadow-lg  shadow-yellow-300/75">
          <img
            className="w-full rounded-lg"
            src={cn}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Computer Networks</div>
            <p class="text-gray-700 text-base">
              Provide various input test cases for socket programs and also
              input test cases for routing algoritms in the form of graphs.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              className="m-auto bg-black p-3 rounded-lg hover:bg-white hover:text-yellow-500"
              onClick={() => {
                localStorage.setItem("sub", "Computer Networks");
                navigate("/choose-cn");
              }}
            >
              Contribute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
