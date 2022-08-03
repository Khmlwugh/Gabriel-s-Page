import { StyledHeader } from "../pages/MainPage/styles/styles"
import Button from "../pages/MainPage/components/Button"

function Header(){

  return(
    <StyledHeader>
      Header
      <Button text='Stack'/>
      <Button text='About'/>
    </StyledHeader>
  )
}

export default Header