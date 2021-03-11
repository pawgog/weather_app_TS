import React from 'react';
import { CityFormStyle } from '../style/CityForm.style';

function CityForm({ cityNameInput, handleSubmitForm, handleChangeCity } : {
  cityNameInput: string,
  handleChangeCity : React.ChangeEventHandler<HTMLInputElement>,
  handleSubmitForm : React.FormEventHandler<HTMLFormElement>
}) {
  return (
    <CityFormStyle>
      <form onSubmit={handleSubmitForm}>
        <label>
          Search city:
          <input type="text" name="name" value={cityNameInput} onChange={handleChangeCity} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </CityFormStyle>  
)};

export default CityForm;
