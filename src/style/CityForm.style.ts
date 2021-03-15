import styled from 'styled-components';

export const CityFormStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & form {
    position: relative;
    display: flex;
    min-width: 400px;
  }
`

export const SubmitStyled = styled.input`
  position:relative;
  padding: 10px 20px;
  color: #fff;
  background-color: #4f7ff7;
  outline: none;
  border: 0;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
`

export const InputStyled = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0.5rem 0;
  border-bottom: 2px solid #c0c0c0;
  box-shadow: none;
  color: #111;

  &:invalid {
    outline: 0;
  }
  &:focus,
  &:not([value=""]) {
    border-color: #4f7ff7;
  }
  &:focus~label,
  &:not([value=""])~label {
    font-size: 14px;
    top: -24px;
    color: #4f7ff7;
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
