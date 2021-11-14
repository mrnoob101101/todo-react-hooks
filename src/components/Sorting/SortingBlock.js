import {
  ButtonDeleteCheckedStyled,
  SortButtonStyled,
} from "./SortingBlock.styles";

export const SortButton = ({ sortByAlphabet }) => {
  return (
    <SortButtonStyled onClick={sortByAlphabet}>
      Sort by alphabet
    </SortButtonStyled>
  );
};

export const ButtonDeleteChecked = ({ deleteChecked }) => {
  return (
    <ButtonDeleteCheckedStyled onClick={deleteChecked}>
      Delete checked
    </ButtonDeleteCheckedStyled>
  );
};
