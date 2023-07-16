import React, { useEffect, useState } from "react";
import BugReportIcon from "@mui/icons-material/BugReport";
import InfoIcon from "@mui/icons-material/Info";
// import { useStatStyles } from "@chakra-ui/react";
import axios from "axios";

const DisplayTestCases = (props) => {
  const [quest, setquest] = useState([]);
  const port = "http://localhost:7000";
  const p=""
  useEffect(() => {
    axios
      .get(port + "/api/testcase/accepted/all/" + props.name)
      .then((resp) => {
        setquest(resp.data);
        console.log(quest);
      });
  }, []);

  return (
    <>
      <div className="p-10 bg-black flex-row flex justify-between text-white text-2xl ">
        <h1>
          Submitted Test cases for{" "}
          <span className="text-yellow-400">{props.name} </span>
          <div>
            <button className="mt-3 bg-yellow-500 p-3 rounded-lg text-black hover:bg-white hover:text-yellow-500">
              Accepted Testcases{" "}
            </button>
          </div>
        </h1>

        <BugReportIcon sx={{ fontSize: 40 }} />
      </div>

      <div className="bg-gradient-to-b from-yellow-500 justify-between align-middle to-yellow-400 grid grid-cols-2  ">
        {quest.map((q) => {
          return (
            <div class="flex flex-col rounded-lg ml-auto mr-auto mt-10 mb-10 max-w-sm bg-black text-white pb-5 pt-5 overflow-hidden shadow-lg">
              <div class="px-10 py-5">
                <div class="font-bold text-xl mb-2">
                  {q.num}.{q.ques}
                </div>
              </div>
              <div className="flex justify-center items-center m-10">
                <textarea
                  className="text-black p-3"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={q.testcase}
                  readOnly
                ></textarea>
              </div>
              <div className="flex justify-between"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default DisplayTestCases;
