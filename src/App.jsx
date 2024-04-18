import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterContact from './pages/login/registerContact/RegisterContact'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<RegisterContact></RegisterContact>}>

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
