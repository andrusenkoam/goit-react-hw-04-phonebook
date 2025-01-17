import styled from 'styled-components';

export const FilterWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & label {
    margin-right: 10px;
    font-size: 20px;
    color: rgb(5, 95, 8);
  }

  & input {
    padding: 5px;
  }
`;
