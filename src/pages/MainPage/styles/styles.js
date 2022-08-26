import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 100px;
  color: white;
  & .header--container{
    display: flex;
    flex-direction: row;
    padding: 0px 10px;
  }
  & .header--title{
    color: white;
    text-decoration: none;
    font-size: 40px;
    padding: 0 30px;
  }
`

export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  background-color: lightgray;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  color: black;
`

export const StyledIntro = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  & h1{
    margin: 20px 0px;
  }
  & .intro--subtitle{
    margin: 0px;
    font-size: 20px;
  }
  & .intro--image{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: #d7d7d7
    margin: 30px 0px;
    padding-top: 20px;
  }
`

export const StyledInfo = styled.div`
  padding: 0px 0px 10px 50px;
  & .info--title{
    display: flex;
    margin: 15px 0px;
    cursor: pointer;
    & i{
      padding: 0px 10px;
    }
    & .info--text{
      font-size: 24px;
    }
  }

  & .info--details{
    padding: 10px 30px;
  }
`

export const CollapsibleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`


export const StyledProject = styled.div`
  background-color: ghostwhite;
  border-radius: 25px;
  padding: 20px 30px;
  margin: 5px 0px;
  width: 90%;
  & .project--container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .project--title{
      padding: 0px 0px;
      margin: 5px 0px;
      & a{
        text-decoration: none;
      }
  }

  & .project--desc{
    padding-right: 100px;
  }

  & .project--tag{
    display: flex;
    padding: 0px 15px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background-color: gold;
    width: 100px;
    border-radius: 25px;
  }
`

export const StyledCollapsible = styled.div`
  background-color: ghostwhite;
  border-radius: 25px;
  padding: 20px 30px;
  width: 90%

`