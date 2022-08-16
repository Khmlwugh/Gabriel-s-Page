import Header from "../../components/Header"
import Info from "./components/Info"
import Intro from "./components/Intro"

function MainPage(){
  return (
    <div>
      <Header/>
      <Intro/>
      <Info text='About' details='Full Stack Developer based in Lima, Perú.'/>
      <Info text='Education' details='Psychology school graduate, but developer to the bone'/>
      <Info text='Projects' details="The latest project I'm working on is my personal webpage"/>
    </div>
  )
}

export default MainPage