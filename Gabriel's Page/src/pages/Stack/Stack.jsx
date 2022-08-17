import Header from "../../components/Header";
import Container from "./components/Container";
import { StyledStack } from "./styles/styles";

function Stack() {

  return (
    <>
      <Header/>
      <StyledStack>
        <Container title='Currently using'/>
        <Container title='Currently learning'/>
        <Container title='Learning soon'/>
      </StyledStack>
    </>

  )
}

export default Stack