import styled from "styled-components";

export const StyledStack = styled.div`
  padding-top: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledContainer = styled.div`
  background-color: ghostwhite;
  border-radius: 25px;
  margin: 10px 10px;
  padding: 10px 20px;
  width: 90%;
  & .title--container{
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  & .title--text{
    padding-left: 10px;
  }
`

export const StyledCard = styled.div`
  background-color: silver;
  padding: 10px 50px;
  border-radius: 20px;
  margin: 20px 0px;
  & a{
    text-decoration: none;
    color: black;
  }
`