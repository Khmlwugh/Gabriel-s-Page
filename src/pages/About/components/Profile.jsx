import { StyledProfile } from "../styles/styles"

function Profile(){

  return(
    <StyledProfile>
      <div className='image-container'>
        <img className='image-container--image' src='src/assets/smiths.jpg' alt=''/>
        <h4>Gabriel Flores</h4>
      </div>
      <div className='description-container'>
        <div className='description--title'>
          Full-Stack Developer Jr
        </div>
        <div className='description--box'>
          Actual Description
        </div>
      </div>
    </StyledProfile>
  )
}

export default Profile