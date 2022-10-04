import Container from "../../Stack/components/Container"
import { StyledDetailsPage } from "../styles/styles"
import Entry from "./Entry"

function Details(){

  return(
    <StyledDetailsPage>
      <Container title='Work Experience' state={true}>
        <Entry title='Quality and Training Manager' org='Majorel' date='03/2020' description="I was responsible for the quality"></Entry>  
      </Container>
      <Container title='Education' state={false}>
        <p>Education 1</p>
      </Container>
      <Container title='Interests' state={false}>

      </Container>
    </StyledDetailsPage>
  )
}

export default Details