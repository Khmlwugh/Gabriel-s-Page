import Container from "../../Stack/components/Container"
import { StyledDetailsPage } from "../styles/styles"
import Entry from "./Entry"

function Details(){

  return(
    <StyledDetailsPage>
      <Container title='Work Experience' state={true}>
        <Entry title='Quality and Training Manager' org='Majorel' date_start='03/2020' date_end='01/2022' description="Led a regional team of quality auditors, trainers, and local coordinators from Colombia and Perú in a customer service project for a major Retail company"></Entry>  
      </Container>
      <Container title='Education' state={false}>
        <Entry title='Web Development Bootcamp' org='Codeable' date_start='02/2022' date_end='07/2022' description='Codeable is an immersive 6-month program covers CS fundamentals, full stack technologies being Ruby on Rails, Postgresql and React. As well as, focusing on soft skills and English proficiency to ensure employability.' />
        <Entry title='Psychology Undergrad' org='UNMSM' date_start='04/2013' date_end='12/2019' description='I graduated from Psychology school in 2019, during which I took an internship in Recruiting and Selection.' />
      </Container>
      <Container title='Interests' state={false}>

      </Container>
    </StyledDetailsPage>
  )
}

export default Details