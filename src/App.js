import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Asignup from "./components/Asignup";
import Alogin from "./components/Alogin";
import Studentfeedback from "./components/Studentfeedback";
import Managementfeedback from "./components/Managementfeedback";
import Msignup from './components/Msignup';
import Mlogin from './components/Mlogin';
import Registration from './components/Registration';
import AdminMain from './components/AdminMain';
import Home from "./components/Home/Home";
import Details from "./components/Details";
import School from "./components/School";
import Govtschl from "./components/Govtschl";


function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/main" exact element={<Main />} />}
      <Route path="/Asignup" exact element={<Asignup />} />
      <Route path="/Alogin" exact element={<Alogin />} />
      <Route path="/Msignup" exact element={<Msignup />} />
      <Route path="/Mlogin" exact element={<Mlogin />} />
      <Route path="/sfeedback" exact element={<Studentfeedback />} />
      <Route path="/mfeedback" exact element={<Managementfeedback />} />
      <Route path="/registration" exact element={<Registration/>} />
      <Route path="/studdetails" exact element={<AdminMain/>} />
      <Route path="/details" exact element={<Details/>} />
      <Route path="/school" exact element={<School/>} />
      <Route path="/gschool" exact element={<Govtschl/>} />
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/sfeedback" exact element={<Studentfeedback />} /> */}
      {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
    </Routes>
  );
}

export default App;
