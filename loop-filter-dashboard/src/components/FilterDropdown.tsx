import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

interface FilterDropdownProps {
  title: string;
  options: number[];
  selected: number[];
  onChange: (selected: number[]) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ title, options, selected, onChange }) => {
  const formattedOptions = options.map((num) => ({ name: `${num}`, value: num }));
  const selectedOptions = formattedOptions.filter((opt) => selected.includes(opt.value));

  const handleSelect = (selectedList: any) => {
    onChange(selectedList.map((item: any) => item.value));
  };

  const handleRemove = (selectedList: any) => {
    onChange(selectedList.map((item: any) => item.value));
  };

  return (
    <div style={{ margin: '10px', width: '200px' }}>
      <label><strong>{title}</strong></label>
      <Multiselect
        options={formattedOptions}
        selectedValues={selectedOptions}
        displayValue="name"
        onSelect={handleSelect}
        onRemove={handleRemove}
        showCheckbox
        showArrow
      />
    </div>
  );
};

export default FilterDropdown;
