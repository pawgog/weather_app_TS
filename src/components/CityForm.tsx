import { CityFormProps } from '../types/WeatherAppTypes';
import { CityFormStyle, SubmitStyled, TitleStyled, InputStyled, LabelStyled } from '../style/CityForm.style';

function CityForm({ cityNameInput, handleSubmitForm, handleChangeCity } : CityFormProps) {
  return (
    <CityFormStyle>
      <TitleStyled>Check weather forecast in your city:</TitleStyled>
      <form onSubmit={handleSubmitForm}>
        <InputStyled type="text" name="city" id="city" placeholder="City name" value={cityNameInput} onChange={handleChangeCity} />
        <LabelStyled htmlFor="city">
          Search city:
        </LabelStyled>
        <SubmitStyled type="submit" value="Submit" disabled={!cityNameInput} />
      </form>
    </CityFormStyle>  
)};

export default CityForm;
