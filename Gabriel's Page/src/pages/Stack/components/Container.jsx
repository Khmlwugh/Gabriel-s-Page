import { StyledContainer } from "../styles/styles"

function Container({title}){

  return(
    <StyledContainer>
      <h3>{title}</h3> 
      <div>
        Texto que debería ser un componente
      </div>
    </StyledContainer>
  )


}

export default Container