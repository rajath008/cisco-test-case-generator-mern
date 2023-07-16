import React from "react";
import BugReportIcon from "@mui/icons-material/BugReport";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const quest = [
  {
    num: 1,
    name: "Write a program for error detecting code using CRC algorithm",
  },
  {
    num: 2,
    name: "Write a program to implement Distance Vector routing algorithm to build a routing table for the given node.",
  },
  {
    num: 3,
    name: "Write a client server echo program using UDP socket and analysis the UDP packets by capturing the data using Wireshark.",
  },
  {
    num: 4,
    name: "Using TCP/IP sockets, write a client – server program, the client sends the file name and the server sends back the content of requested text file if present.",
  },
  {
    num: 5,
    name: "Using FIFO files as IPC channel, write a client – server program, thclient sends the file name and the server sends back the content of requested text file if present.",
  },
  {
    num: 6,
    name: "Using TCP/IP sockets, implement concurrent server to handle multiple requests by client at a time.",
  },
];

const CNquestion = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-10 bg-black flex-row flex justify-between text-white text-2xl ">
        <h1>Computer networks</h1>

        <BugReportIcon sx={{ fontSize: 40 }} />
      </div>
      <div className="bg-gradient-to-b from-yellow-500 justify-between align-middle to-yellow-400 grid grid-cols-2  ">
        {quest.map((q) => {
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
                className="m-auto bg-yellow-400 text-black p-4 rounded-lg hover:bg-white hover:text-yellow-500 "
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
export default CNquestion;
