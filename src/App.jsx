import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import RegisterContact from './pages/login/registerContact/RegisterContact';


import './App.css';
import LoginPage from './pages/login/loginPage/LoginPage';
import Home from './pages/home/Home';
import { useEffect } from 'react';
import Scanner from './pages/scanner/Scanner';
import Splash from './pages/splash/Splash';
import RegisterFinalPage from './pages/login/registerFinalPage/RegisterFinalPage';
import ResgiterPage from './pages/login/registerPage/ResgiterPage';
import Profile from './pages/user/profile/Profile';



import OnBoarding from './pages/onBoarding/OnBoarding'




//const navigate = useNavigate()


function App() {


  useEffect(() => {

    //navigate("/OnBoarding")
  }, [])

  return (

    <>
      <OnBoarding></OnBoarding>

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<Home></Home>} />

          <Route
            path='/login'
            element={<LoginPage></LoginPage>} />

          <Route
            path='register'
            element={<ResgiterPage></ResgiterPage>} />

          <Route
            path='/register/registerContact'
            element={<RegisterContact></RegisterContact>} />

          <Route
            path='register/final'
            element={<RegisterFinalPage></RegisterFinalPage>} />

          <Route
            path='/user/profile'
            element={<Profile></Profile>} />

          <Route
            path='/scanner'
            element={<Scanner></Scanner>} />

          {/* <Route 
          path='/scanner/result' 
          element={ } /> */}

          <Route
            path='/splash'
            element={<Splash></Splash>} />



          {/* <Route path='/allergy' element={ } /> */}



        </Routes>

      </BrowserRouter>



    </>

  )

}

export default App;
