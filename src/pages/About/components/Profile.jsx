import { StyledProfile } from "../styles/styles"

function Profile(){

  return(
    <StyledProfile>
      <div className='image-container'>
        <img className='image-container--image' src='src/assets/The-Smiths-The-Queen-Is-Dead.jpg' alt=''/>
        <h4>Gabriel Flores</h4>
      </div>
      <div className='description-container'>
        <div className='description--text'>
          Description
        </div>
        <div>

        </div>
      </div>
    </StyledProfile>
  )
}

export default Profile