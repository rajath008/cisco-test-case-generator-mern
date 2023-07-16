import React, { useState } from "react";
import BugReportIcon from "@mui/icons-material/BugReport";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const quest = [
  {
    num: 1,
    name: "Write a python program to find the number of distinct elements in a given array  ",
  },
  {
    num: 2,
    name: "Write a python program to implement linear search and binary search",
  },
  {
    num: 3,
    name: "Write a python program to read,print,add and multiply 2 matrices",
  },
  {
    num: 4,
    name: "Write a python program to implement a uniform cost search algorithm.",
  },
  {
    num: 5,
    name: "Write a python program to implement the tic-tac-tow game and demonstrate the steps.",
  },
  {
    num: 6,
    name: "Write a python program to implement Map coloring problem using Graph coloring algorithm.",
  },
]; 
const AIMLquestion = () => {
  const navigate = useNavigate();
  const [qno, setqno] = useState(1);
  return (
    <>
      <div className="p-10 bg-black flex-row flex justify-between text-white text-2xl ">
        <h1>Artificial Intelligence and Machine Learning </h1>

        <BugReportIcon sx={{ fontSize: 40 }} />
      </div>
      <div className="bg-gradient-to-b from-yellow-500 justify-between align-middle to-yellow-400 grid grid-cols-2  ">
        {quest.map((q) => {
          {/* setqno(qno + 1); */}
          return (
            <div class="flex flex-col rounded-lg ml-auto mr-auto mt-10 mb-10 max-w-sm bg-black text-white pb-5 pt-5 overflow-hidden shadow-lg">
              <div class="px-10 py-5">
                <div class="font-bold text-xl mb-2">
                  {q.num}.{q.name}
                </div>
                <p className="pt-3 text-white">
                  <span>
                    <InfoIcon className="mr-2"></InfoIcon>
                  </span>{" "}
                  Note : If multiple test cases are present seperate the inputs
                  with a space in between them.
                </p>
              </div>
              <button
                className="m-auto bg-yellow-400 text-black p-4 rounded-lg hover:bg-white hover:text-yellow-500"
                onClick={() => {
                  localStorage.setItem("ques", q.name);
                  localStorage.setItem("qno", q.num);
                  navigate("/input-test-cases");
                }}
              >
                Choose
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AIMLquestion;
