import React from 'react';
import Select from 'react-select';

interface FilterDropdownProps {
  title: string;
  options: number[];
  selected: number[];
  onChange: (selected: number[]) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ title, options, selected, onChange }) => {
  // Format options into { value, label } objects for react-select
  const formattedOptions = options.map((value) => ({
    value,
    label: value.toString(),
  }));

  // Pre-select current values
  const selectedOptions = formattedOptions.filter((opt) => selected.includes(opt.value));

  // Handle change from react-select
  const handleChange = (selectedList: any) => {
    const values = selectedList ? selectedList.map((item: any) => item.value) : [];
    onChange(values);
  };

  return (
    <div style={{ margin: '10px', width: '250px' }}>
      <label htmlFor={`${title}-dropdown`}><strong>{title}</strong></label>
      <Select
        inputId={`${title}-dropdown`}
        isMulti
        options={formattedOptions}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={`Select ${title} values`}
      />
    </div>
  );
};

export default FilterDropdown;





