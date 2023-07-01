import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/Form/RegisterForm";
import Navbar from "./components/Navbar/Navbar";
import SuccessModal from "./components/Modal/SuccessModal";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";

function App() {
  //this state variable controls when the modal which informs the user that the form is submiited successfully is to be shown
  const [openModal, setOpenModal] = useState(false);

  /*this is a callback function given as props to the child elements ie the RegisterForm and SuccessModal 
  to retrieve info which helps decide when the modal is to be shown*/
  const toggleSuccesModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <RegisterForm
        toggleSuccesModal={toggleSuccesModal}
        openModal={openModal}
      />
      <SuccessModal
        toggleSuccesModal={toggleSuccesModal}
        openModal={openModal}
      /> */}
    </div>
  );
}

export default App;
