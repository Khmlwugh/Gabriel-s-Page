import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Stack from './pages/Stack/Stack'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/stack" element={<Stack/>}/>
        </Routes>
      </BrowserRouter>  
)
}

export default App
