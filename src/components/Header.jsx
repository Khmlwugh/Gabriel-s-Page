import { StyledHeader } from "../pages/MainPage/styles/styles"
import Button from "../pages/MainPage/components/Button"
import {Link} from 'react-router-dom'

function Header(){

  return(
    <StyledHeader>
      <Link className='header--title'to='/'>
        Gabriel Flores Bardales
      </Link>
      <div className='header--container'>
        <Button text='About'/>
        <Button text='Stack'/>
        <Button text='Resources'/>
      </div>
    </StyledHeader>
  )
}

export default Header