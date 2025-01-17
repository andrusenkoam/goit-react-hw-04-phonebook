import styled from 'styled-components';

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 4px;
  border: 1px solid rgb(14, 42, 25);
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    font-size: 18px;
    color: rgb(5, 95, 8);
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(241, 137, 137);
    cursor: pointer;
    transition: color 500ms ease;

    &:hover,
    &:focus {
      color: rgb(231, 7, 7);
    }
  }
`;
