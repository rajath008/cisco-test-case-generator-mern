import "./App.css";
import ChooseAIML from "./pages/ChooseAIML";
import ChooseCN from "./pages/ChooseCN";
import Home from "./pages/Home";
import DisplayAIML from "./pages/DisplayAIML";
import DisplayCN from "./pages/DisplayCN";
import InputTestCases from "./pages/InputTestCase";
import Login2 from "./components/Login/Login2";
import DisplayAcceptedAiml from "./pages/DisplayAcceptedAiml";
import DisplayAcceptedCn from "./pages/DisplayAcceptedCN";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="/choose-aiml" element={<ChooseAIML />}></Route>
        <Route path="/choose-cn" element={<ChooseCN />}></Route>
        <Route path="/display-aiml" element={<DisplayAIML />}></Route>
        <Route path="/display-cn" element={<DisplayCN />}></Route>
        <Route path="/accepted-cn" element={<DisplayAcceptedCn />}></Route>
        <Route path="/accepted-aiml" element={<DisplayAcceptedAiml />}></Route>
        <Route path="/input-test-cases" element={<InputTestCases />}></Route>
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login2" element={<Login2 />} />
        {/* <Route path="dept/login" element={<Deptlogin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
