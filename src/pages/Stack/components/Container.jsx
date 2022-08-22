import { StyledContainer } from "../styles/styles"
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Container({title, children}){
  const [open, setOpen] = useState(false)

  return(
    <StyledContainer>
      <h3 onClick={() => setOpen(!open)}>{title}</h3>
      {open && children}
    </StyledContainer>
  )


}

export default Container