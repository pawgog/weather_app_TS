import styled from 'styled-components';

export const SelectStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 12px 0;

  & select, option {
    text-transform: capitalize;
  }

  & select {
    padding: 5px;
  }
`
