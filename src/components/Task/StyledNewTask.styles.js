import styled from "styled-components";

export const StyledNewTask = styled.div`
  font-size: 23px;
  padding-left: 15px;
  margin: 10px;
  background-color: #fcfff5;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: #f2f5eb;
  }
`;

export const TaskContainer = styled.div``;

export const Text = styled.p`
  ${(props) =>
    props.isCompleted
      ? "text-decoration: line-through;\n" +
        "  color: gray;\n" +
        "  transition: 1s;"
      : "none"};
  display: flex;
  margin-top: 0;
  line-height: 1.2;
  font-family: "Tinos", serif;
  margin-block-end: 0.1em;
`;

export const Date = styled.p`
  font-size: 15px;
  text-align: right;
  margin: 0 5px 5px 5px;
  padding: 3px;
  font-family: "Roboto", sans-serif;
`;

export const ImgCheckBoxStyled = styled.img`
  margin: 10px 3px 7px 3px;
  :hover {
    transform: scale(1.2);
    transition: 0.4s;
`;

export const ImgDeleteStyled = styled.img`
  margin: 10px 3px 5px 3px;
  :hover {
    transform: scale(1.2);
    transition: 0.4s;
`;
