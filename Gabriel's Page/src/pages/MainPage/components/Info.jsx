import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'
import { StyledInfo } from '../styles/styles'

function Info({text, details}){
  const [isOpen, setisOpen] = useState(false)

  return(
    <StyledInfo>
      <div className='info--title' onClick={() => {setisOpen(!isOpen)}}>
        {!isOpen && <i className="ri-arrow-right-s-line" />}
        {isOpen && <i className="ri-arrow-down-s-line"/>}
        <div className='info--text'>{text}</div>
      </div>
      {isOpen && <div className='info--details'>{details}</div>}
    </StyledInfo>
  )
}

export default Info