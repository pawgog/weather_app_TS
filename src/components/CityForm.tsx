import React from 'react';
import { CityFormStyle, SubmitStyled, InputStyled, LabelStyled } from '../style/CityForm.style';

function CityForm({ cityNameInput, handleSubmitForm, handleChangeCity } : {
  cityNameInput: string,
  handleChangeCity : React.ChangeEventHandler<HTMLInputElement>,
  handleSubmitForm : React.FormEventHandler<HTMLFormElement>
}) {
  return (
    <CityFormStyle>
      <form onSubmit={handleSubmitForm}>
        <InputStyled type="text" name="city" id="city" value={cityNameInput} onChange={handleChangeCity} />
        <LabelStyled htmlFor="city">
          Search city:
        </LabelStyled>
        <SubmitStyled type="submit" value="Submit" />
      </form>
    </CityFormStyle>  
)};

export default CityForm;
