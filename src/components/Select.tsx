import '../style/Select.style';

function Select() {
  return (
    <div>
      <label htmlFor="weather">Change weather details:</label>
      <select name="weather" id="weather">
        <option value="temp">Temperature</option>
        <option value="humidity">Humidity</option>
        <option value="pressure">Pressure</option>
      </select>      
    </div>
    );
  }

export default Select;
