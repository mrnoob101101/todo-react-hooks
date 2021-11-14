import styled from "styled-components";

export const StyledInput = styled.input`
  background: white;
  box-sizing: border-box;
  width: 500px;
  height: 50px;
  font-size: 23px;
  font-weight: normal;
  padding-left: 15px;
  border: 5px solid #193441;
  border-radius: 12px;
  color: gray;
  font-family: "Tinos", serif;
  margin-bottom: 14px;
  :focus {
    outline: 0;
    border: 5px solid #193441;
    background-color: #fcfff5;
    transition: 0.7s linear;
    font-size: 23px;
    color: rgb(32, 32, 32);
  }
`;

export const AddButton = styled.button`
  background-color: #193441;
  border: 2px none;
  color: white;
  padding: 8px 20px 16px 20px;
  height: 40px;
  border-radius: 7px;
  margin: 5px;
  font-size: 20px;
  :hover {
    background-color: #3e606f;
  }
`;
