import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  }

  console.log(options, 'opts')
  const disabledOption = (opt) => {
    if (opt.disabled) {
      return opt.disabled;
    }
    return false;
  } 

  return (
    <select name={titleKey} id={valueKey} onChange={handleChange}>
      <option value='all'>{allTitle}</option>
      {options.map(opt => 
        <option value={opt[valueKey]} key={opt[valueKey]} disabled={disabledOption(opt)}>{opt.name}</option>
      )}
    </select>
  );
}

export default Select;