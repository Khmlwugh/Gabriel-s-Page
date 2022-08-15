import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100vw;
  height: 100px;
  color: white;
  & .header--container{
    display: flex;
    flex-direction: row;
  }
  & .header--title{
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