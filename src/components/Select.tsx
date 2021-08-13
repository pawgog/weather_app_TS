import { v4 as uuidv4 } from 'uuid';
import { TSelectTag } from '../types/WeatherAppTypes';
import { SelectStyled } from '../style/Select.style';

function Select({ selectName, selectValues, onChangeSelect } : TSelectTag) {
  return (
    <SelectStyled>
      <select name='weather' id='weather' value={selectName} onChange={e => onChangeSelect(e.target.value)}>
        {selectValues.map((selectValue) => (
          <option key={uuidv4()} value={selectValue}>{selectValue}</option>
        ))}
      </select>      
    </SelectStyled>
    );
  }

export default Select;
