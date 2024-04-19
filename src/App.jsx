import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterContact from './pages/login/registerContact/RegisterContact'

import './App.css'
import LoginPage from './pages/login/loginPage/LoginPage'


function App() {

  return (

    <>

      <BrowserRouter>

        <Routes>
          <Route path="/user/emergencyContact" element={<RegisterContact></RegisterContact>}>

          </Route>
        </Routes>

      </BrowserRouter>

      {/* <LoginPage></LoginPage> */}

    </>

  )

}

export default App;
