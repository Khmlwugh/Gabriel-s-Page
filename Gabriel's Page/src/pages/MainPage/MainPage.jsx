import Header from "../../components/Header"
import About from "./components/About"
import Education from "./components/Education"
import Info from "./components/Info"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import { CollapsibleContainer } from "./styles/styles"

function MainPage(){
  return (
    <div>
      <Header/>
      <Intro/>
      <CollapsibleContainer>
        <Info text='About' details={<About/>}/>
        <Info text='Education' details={<Education/>}/>
        <Info text='Projects' details={<Projects/>}/>
      </CollapsibleContainer>
    </div>
  )
}

export default MainPage