import { CityFormProps } from '../types/WeatherAppTypes';
import { CityFormStyle, SubmitStyled, InputStyled, LabelStyled } from '../style/CityForm.style';

function CityForm({ cityNameInput, handleSubmitForm, handleChangeCity } : CityFormProps) {
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
