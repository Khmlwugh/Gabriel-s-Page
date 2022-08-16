import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'
import { StyledInfo } from '../styles/styles'

function Info({text, details}){
  const [isOpen, setisOpen] = useState(false)

  return(
    <StyledInfo>
      <div class='info--title' onClick={() => {setisOpen(!isOpen)}}>
        {!isOpen && <i class="ri-arrow-right-s-line" />}
        {isOpen && <i class="ri-arrow-down-s-line"/>}
        <div>{text}</div>
      </div>
      {isOpen && <div class='info--details'>{details}</div>}
    </StyledInfo>
  )
}

export default Info