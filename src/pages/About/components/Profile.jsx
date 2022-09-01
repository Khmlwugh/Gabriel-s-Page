import { StyledProfile } from "../styles/styles"

function Profile(){

  return(
    <StyledProfile>
      <div className='image-container'>
        <img className='image-container--image' src='src/assets/smiths.jpg' alt=''/>
        <h3>Gabriel Flores</h3>
      </div>
      <div className="socials-container">
        <div>
          <a href='https://github.com/Khmlwugh'  alt='' target='_blank'>
            <i className="ri-github-fill"/>
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/dev-gabriel-flores/' alt='' target='_blank'>
            <i className="ri-linkedin-box-fill"/>
          </a>
        </div>
      </div>
      <div className='description-container'>
        <div className='description--title'>
          Full-Stack Developer Jr
        </div>
        <div className='description--box'>
          Developer using Ruby on Rails and React.
        </div>
      </div>
    </StyledProfile>
  )
}

export default Profile