import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Dongui from "./pages/donate/donategui.js";
import Mydonation from "./pages/donate/mydonation.js";
import Mypage from "./pages/donate/mypage.js";
import Nickname from "./pages/donate/nickname.js";
import Process1 from "./pages/donate/process1.js";
import Process2 from "./pages/donate/process2.js";
import Process3 from "./pages/donate/process3.js";
import Process4 from "./pages/donate/process4.js";
import Process5 from "./pages/donate/process5.js";
import Process6 from "./pages/donate/process6.js";
import Done from "./pages/donate/done.js";
import AgencyLogin from "./pages/reciever/agencylogin.js";
import AgencySignUp from "./pages/reciever/agencysignup.js";
import BookList from "./pages/reciever/booklist.js";
import BookInfo from "./pages/reciever/bookinfo.js";
import Finish from "./pages/reciever/finish.js";
import Choose from "./pages/main/choose.js";
import Gui from "./pages/main/gui.js";
import Check from "./pages/main/check.js";
import Login from "./pages/main/userlogin.js";
import Usersingup from "./pages/main/usersignup.js";

const PageRoute = () => {
  const {} = useParams();
  return (
    <Routes>
      <Route path="/" element={<Gui />}></Route>
      <Route path="/choose" element={<Choose />}></Route>
      <Route path="/check" element={<Check />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Usersingup />}></Route>
      <Route path="/donate/gui" element={<Dongui />}></Route>
      <Route path="/donate/nickname" element={<Nickname />}></Route>
      <Route path="/donate/process1" element={<Process1 />}></Route>
      <Route path="/donate/process2" element={<Process2 />}></Route>
      <Route path="/donate/process3" element={<Process3 />}></Route>
      <Route path="/donate/process4" element={<Process4 />}></Route>
      <Route path="/donate/process5" element={<Process5 />}></Route>
      <Route path="/donate/process6" element={<Process6 />}></Route>
      <Route path="/donate/done" element={<Done />}></Route>
      <Route path="/donate/mypage" element={<Mypage />}></Route>
      <Route path="/donate/mydonation" element={<Mydonation />}></Route>
      <Route path="/reciever/agencylogin" element={<AgencyLogin />}></Route>
      <Route path="/reciever/agencysignup" element={<AgencySignUp />}></Route>
      <Route path="/reciever/booklist" element={<BookList />}></Route>
      <Route path="/reciever/bookinfo" element={<BookInfo />}></Route>
      <Route path="/reciever/finish" element={<Finish />}></Route>
    </Routes>
  );
};

export default PageRoute;
