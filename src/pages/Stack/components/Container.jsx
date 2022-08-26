import { StyledContainer } from "../styles/styles"
import {Link} from 'react-router-dom'
import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'

function Container({title, children, state}){
  const [open, setOpen] = useState(state)

  return(
    <StyledContainer>
      <div className='title--container' onClick={() => setOpen(!open)}>
        {!open && <i className="ri-arrow-right-s-line" />}
        {open && <i className="ri-arrow-down-s-line"/>}
        <h3 className='title--text' >{title}</h3>
      </div>
      {open && children}
    </StyledContainer>
  )


}

export default Container