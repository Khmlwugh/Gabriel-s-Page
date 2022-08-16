import Header from "../../components/Header"
import About from "./components/About"
import Education from "./components/Education"
import Info from "./components/Info"
import Intro from "./components/Intro"
import Projects from "./components/Projects"

function MainPage(){
  return (
    <div>
      <Header/>
      <Intro/>
      <div>
        <Info text='About' details={<About/>}/>
        <Info text='Education' details={<Education/>}/>
        <Info text='Projects' details={<Projects/>}/>
      </div>
    </div>
  )
}

export default MainPage