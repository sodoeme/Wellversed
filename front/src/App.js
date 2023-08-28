import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Home from "./components/homeComponents/Home";
import Contact from "./components/contactComponents/Contact";
import LoginOrg from "./components/loginComponents/LoginOrg";
import LoginUser from "./components/loginComponents/LoginUser";
import SignUpOrg from "./components/signUpComponents/SignUpOrg";
import SignUpUser from "./components/signUpComponents/SignUpUser";
import Schedule from "./components/scheduleComponents/schedule";
import Orgpf from "./components/profileComponents/Orgpf";
import Userpf from "./components/profileComponents/Userpf";
import Footer from "./components/Footer";


import HeaderFooter from "./components/HeaderFooter";

// import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route element={<HeaderFooter />}>
      <Route path="/" element={<Home />} />

        <Route path="contact" element={<Contact />} />
        <Route path="loginuser" element={<LoginUser />} />
        <Route path="loginorg" element={<LoginOrg />} />
        <Route path="signupuser" element={<SignUpUser />} />
        <Route path="signuporg" element={<SignUpOrg />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="orgpf" element={<Orgpf />} />
        <Route path="userpf" element={<Userpf />} />
      </Route>
    </Route>
  </Routes>
  );
}

export default App;
 