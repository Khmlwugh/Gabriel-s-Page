import Header from "../../components/Header";
import Details from "./components/Details";
import Profile from "./components/Profile";
import { AboutContainer } from "./styles/styles";

function About() {

  return(
    <>
      <Header/>
      <AboutContainer>
        <Profile/>
        <Details/>
      </AboutContainer>
    </>
  )
}

export default About