import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import RegisterContact from "./pages/login/registerContact/RegisterContact";

import "./App.css";
import LoginPage from "./pages/login/loginPage/LoginPage";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Scanner from "./pages/scanner/Scanner";
import Splash from "./pages/splash/Splash";
import RegisterFinalPage from "./pages/login/registerFinalPage/RegisterFinalPage";
import ResgiterPage from "./pages/login/registerPage/ResgiterPage";
import Profile from "./pages/user/profile/Profile";
import AllergyPage from "./pages/login/allergyPage/AllergyPage";
import Valoracion from "./components/valoracion/Valoracion";
import OnBoarding from './pages/onBoarding/OnBoarding'
import ScannerResult from "./pages/scannerResult/ScannerResult";

//const navigate = useNavigate()

function App() {
  useEffect(() => {
    //navigate("/OnBoarding")

  }, []);


  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path="/allergy" element={<AllergyPage></AllergyPage>}></Route>


          <Route path="/" element={<Home></Home>} />

          <Route path="/login" element={<LoginPage></LoginPage>} />

          <Route path="/register" element={<ResgiterPage></ResgiterPage>} />

          <Route
            path="/register/registerContact"
            element={<RegisterContact></RegisterContact>}
          />

          <Route
            path="/register/final"
            element={<RegisterFinalPage></RegisterFinalPage>}
          />

          <Route path="/user/profile" element={<Profile></Profile>} />

          <Route path="/scanner" element={<Scanner></Scanner>} />

          <Route 
          path='/scanner/result' 
          element={<ScannerResult></ScannerResult> } />

          <Route path="/splash" element={<Splash></Splash>} />

          {/* <Route path='/allergy' element={ } /> */}

          <Route path="/valoracion" element={<Valoracion></Valoracion>} />


          <Route path="/slides" element={<OnBoarding></OnBoarding>}/>



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
