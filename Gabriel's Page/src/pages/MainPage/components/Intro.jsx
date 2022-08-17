import { StyledIntro } from "../styles/styles"

function Intro() {

  return (
    <StyledIntro>
      <h1>Gabriel Flores</h1>
      <p className='intro--subtitle'>Full Stack Developer Jr</p>
      <div className="intro--image">
        <img src='src/assets/madvillainy.png' alt='' />
      </div>
    </StyledIntro>
  )
}

export default Intro