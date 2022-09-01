import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex,

`


export const StyledProfile = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  & .image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h3{
      margin: 15px 0px;
    }
  }

  & .image-container--image{
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }

  & .description-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .description--box{
      display: flex;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      margin: 20px 0px;
      background: lavender;
      width: 65%;
      height: 100px;
      align-text: center;
      padding: 10px;
    }
  }
  & .socials-container{
    display: flex;
    justify-content: center;
    align-items: center;
    & a{
      padding: 0px 10px;
      color: black;
      & i{
        font-size: 24px;
      }
    }
  }
`