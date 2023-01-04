import React from 'react';

const Select = ({ options, valueKey, titleKey, allTitle, value, onSelect }) => {
  const handleChange = (e) => {
    const selectedAirline = e.target.value;
    onSelect(selectedAirline);
  }

  return (
    <select name={titleKey} id={valueKey} onChange={handleChange}>
      <option value='all'>{allTitle}</option>
      {options.map(opt => 
        <option value={opt.id} key={opt.id}>{opt.name}</option>
      )}
    </select>
  );
}

export default Select;