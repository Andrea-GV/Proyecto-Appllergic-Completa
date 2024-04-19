import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterContact from './pages/login/registerContact/RegisterContact'

import './App.css'

import OnBoarding from './pages/onBoarding/OnBoarding'

import LoginPage from './pages/login/loginPage/LoginPage'



function App() {

  return (

    <>
      <OnBoarding></OnBoarding>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<RegisterContact></RegisterContact>}>

          </Route>
        </Routes>

      </BrowserRouter>

      <LoginPage></LoginPage>

    </>

  )

}

export default App;
