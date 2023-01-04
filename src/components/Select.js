import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const handleChange = (e) => {
    onSelect(e.target.value);
  }

  console.log(options, 'opts')

  return (
    <select name={titleKey} id={valueKey} onChange={handleChange}>
      <option value='all'>{allTitle}</option>
      {options.map(opt => 
        <option value={opt.id || opt.code} key={opt.id || opt.code}>{opt.name}</option>
      )}
    </select>
  );
}

export default Select;