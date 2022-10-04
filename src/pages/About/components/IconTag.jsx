import styled from "styled-components"
import { StyledDetails } from "../styles/styles"

function IconTag({icon, tag}){

  return(
    <StyledDetails>
      <i className={icon}></i>
      <p>{tag}</p>
    </StyledDetails>
  )
}

export default IconTag