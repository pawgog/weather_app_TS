import styled from 'styled-components';

export const LabelStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.3rem;
  color: #fff;
  background-color: #475d5b;

  & > .city__name {
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const SunIconStyle = styled.span`
  display: flex;
  align-items: center;
  width: 240px;
  & span {
    min-width: 75px;
  }
`
