import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex,

`
export const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 275px;
  & i{
    padding: 0px 5px;
  }
  & p{
    padding: 0px 5px;
  }
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
    height: 300px;
    width: 300px;
    border-radius: 150px;
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
        font-size: 36px;
      }
    }
  }

  & .details-container{
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`

export const StyledEntry = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 15px 0px;
  & .title-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    }
    & h4{
      margin: 0px;  
    }
  }
  & .desc-container{
    padding: 10px 30px;
    & h3{
      margin: 0px;
    }
  }
`

export const StyledDetailsPage = styled.div`
  padding: 10px 0px;  
  width: 60vw;
`