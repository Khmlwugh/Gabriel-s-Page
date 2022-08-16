import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'

function Info({text, details}){
  const [isOpen, setisOpen] = useState(false)

  return(
    <div>
      <div>
        {!isOpen && <i class="ri-arrow-right-s-line" onClick={() => {setisOpen(!isOpen)}}/>}
        {isOpen && <i class="ri-arrow-down-s-line" onClick={() => {setisOpen(!isOpen)}}/>}
        <div>{text}</div>
      </div>
      {isOpen && <div>{details}</div>}
    </div>
  )
}

export default Info