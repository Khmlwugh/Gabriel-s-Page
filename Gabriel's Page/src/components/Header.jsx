import { StyledHeader } from "../pages/MainPage/styles/styles"
import Button from "../pages/MainPage/components/Button"

function Header(){

  return(
    <StyledHeader>
      <div class='header--title'>
        Gabriel Flores Bardales
      </div>
      <div class='header--container'>
        <Button text='Stack'/>
        <Button text='About'/>
        <Button text='Resources'/>
      </div>
    </StyledHeader>
  )
}

export default Header