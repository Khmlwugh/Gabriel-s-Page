import { StyledButton } from "../styles/styles"
import { Link } from 'react-router-dom'


function Button({text}){
  return(
    <StyledButton>
      <Link to = {`/${text.toLowerCase()}`}>
        {text}
      </Link>
    </StyledButton>
  )

}

export default Button