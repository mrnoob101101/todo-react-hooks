import {
  StyledInput,
  AddButton,
  SortButtonStyled,
  ButtonDeleteCheckedStyled,
} from "./Input.styles";

export const Input = ({ handleSubmit, handleChangeInputValue, value }) => {
  return (
    <StyledInput
      type="text"
      placeholder="Enter your task"
      value={value}
      onChange={handleChangeInputValue}
      onKeyDown={handleSubmit}
    />
  );
};

export const ButtonForAdd = ({ addTodoByButton }) => {
  return <AddButton onClick={addTodoByButton}>Add</AddButton>;
};
