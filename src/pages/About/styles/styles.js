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
      margin: 20px 0px;
      background: lavender;
      width: 50%;
      height: 150px;
    }

  }
`