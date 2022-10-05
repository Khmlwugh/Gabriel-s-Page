import Container from "../../Stack/components/Container"
import { StyledDetailsPage } from "../styles/styles"
import Entry from "./Entry"

function Details(){

  return(
    <StyledDetailsPage>
      <Container title='Work Experience' state={true}>
        <Entry title='Quality and Training Manager' org='Majorel' date='03/2020' description="Led a regional team of quality auditors, trainers, and local coordinators from Colombia and Perú in a customer service project for a major Retail company"></Entry>  
      </Container>
      <Container title='Education' state={false}>
        <Entry title='Web Development Bootcamp' org='Codeable' date='01/2022' description='Codeable’s immersive 6-month program covers CS fundamentals, full stack technologies being Ruby on Rails, Postgresql and React. As well as, focusing on soft skills and English proficiency to ensure employability.' />
      </Container>
      <Container title='Interests' state={false}>

      </Container>
    </StyledDetailsPage>
  )
}

export default Details