import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import MainPage from './pages/MainPage/MainPage'
import Resources from './pages/Resources/Resources'
import Stack from './pages/Stack/Stack'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/stack" element={<Stack/>}/>
          <Route path="/resources" element={<Resources/>}/>
        </Routes>
      </BrowserRouter>  
)
}

export default App
