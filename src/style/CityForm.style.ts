import styled from 'styled-components';

export const CityFormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  & form {
    position: relative;
    display: flex;
    min-width: 400px;
    box-shadow: 1px 3px 20px 1px rgb(0 0 0 / 30%);
  }
`

export const TitleStyled = styled.div`
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`

export const SubmitStyled = styled.input`
  position:relative;
  padding: 10px 20px;
  color: #00473e;
  background-color: #faae2b;
  outline: none;
  border: 0;
  font-weight: bold;
  font-family: Montserrat, Arial, serif;
  text-transform: uppercase;
  border-radius: 2px;
  transition: all .5s;
  &:not([disabled]):hover {
    cursor: pointer;
    background-color: #eca833;
  }
`

export const InputStyled = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0.5rem;
  border-bottom: 2px solid #c0c0c0;
  box-shadow: none;
  color: #111;
  font-family: Montserrat, Arial, serif;

  &:invalid {
    outline: 0;
  }
  &:focus,
  &:not([value=""]) {
    border-color: #00473e;
  }
  &:focus~label,
  &:not([value=""])~label {
    font-size: 14px;
    top: -24px;
    color: #00473e;
  }
`

export const LabelStyled = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #c0c0c0;
  transition: 0.2s all;
  cursor: text;
`
