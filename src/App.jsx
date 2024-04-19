import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterContact from './pages/login/registerContact/RegisterContact'

import './App.css'
import LoginPage from './pages/login/loginPage/LoginPage'
import AllergyPage from './pages/login/allergyPage/AllergyPage'


function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<RegisterContact></RegisterContact>}></Route>
          <Route path="/allergy" element={<AllergyPage></AllergyPage>}></Route>

        
        </Routes>

      </BrowserRouter>

      <LoginPage></LoginPage>

    </>

  )

}

export default App;
