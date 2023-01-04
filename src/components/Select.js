import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const handleChange = (e) => {
    console.log(value, e.target.value)
    onSelect(e.target.value);
  }

  const disabledOption = (opt) => {
    if (opt.disabled) {
      return opt.disabled;
    }
    return false;
  } 

  console.log(value, 'value')

  return (
    <select name={titleKey} id={valueKey} onChange={handleChange}>
      <option value='all' defaultValue={value}>{allTitle}</option>
      {options.map(opt => 
        <option key={opt[valueKey]} value={opt[valueKey]} selected={opt[valueKey] === value} disabled={disabledOption(opt)}>{opt.name}</option>
      )}
    </select>
  );
}

export default Select;