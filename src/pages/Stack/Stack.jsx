import Header from "../../components/Header";
import Container from "./components/Container";
import StackCard from "./components/StackCard";
import { StyledStack } from "./styles/styles";

function Stack() {

  return (
    <>
      <Header/>
      <StyledStack>
        <Container title='Currently using' state={true}>
          <StackCard title="React" url='https://reactjs.org/'>
            <p>A JavaScript library for building user interface</p>
          </StackCard>
          <StackCard title="Ruby" url='https://www.ruby-lang.org/en/'>
            <p>A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.</p>
          </StackCard>
          <StackCard title="Ruby on Rails" url='https://rubyonrails.org/'>
            <p>Rails is a full-stack framework. It ships with all the tools needed to build amazing web apps on both the front and back end.</p>
          </StackCard>
          <StackCard title="Postgresql" url='https://postgresql.org/'>
            <p>The World's Most Advanced Open Source Relational Database.</p>
          </StackCard>
        </Container>
        <Container title='Currently learning' state={false}>
          <StackCard title="MongoDB" url='https://www.mongodb.com/'>
            <p>The World's Most A  dvanced Open Source Relational Database.</p>
          </StackCard>
          <StackCard title="Python" url='https://www.python.org/'>
            <p>Python is a programming language that lets you work quickly and integrate systems more effectively.</p>
          </StackCard>
        </Container>
          

        <Container title='Learning soon' state={false}>
          <StackCard StackCard title="Node.js" url='https://nodejs.org/en/'>
            <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
          </StackCard>
        </Container>
      </StyledStack>
    </>

  )
}

export default Stack