import { SelectStyled } from '../style/Select.style';

function Select() {
  return (
    <SelectStyled>
      <label htmlFor="weather">Change weather details:</label>
      <select name="weather" id="weather">
        <option value="temp">Temperature</option>
        <option value="humidity">Humidity</option>
        <option value="pressure">Pressure</option>
      </select>      
    </SelectStyled>
    );
  }

export default Select;
