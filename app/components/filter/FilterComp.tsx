interface Option {
  id: string;
  label: string;
}

interface Props {
  title: string;
  options: Option[];
  onSelectionChange: (selection: string[]) => void;
  selectedOptions: string[];
}

const FilterComp: React.FC<Props> = ({ title, options, onSelectionChange, selectedOptions }) => {
  const handleCheckboxChange = (label: string) => {
    const updatedSelection = selectedOptions.includes(label)
      ? selectedOptions.filter(item => item !== label)
      : [...selectedOptions, label];
    onSelectionChange(updatedSelection);
  };

  return (
    <div className="w-full sm:w-[182px] h-auto sm:h-[110px] dark:bg-none p-4 text-center">
      <h5 className="text-lg font-bold mb-2">{title}</h5>
      <div>
        {options.map((option) => (
          <div key={option.id} className="flex items-center mb-2">
            <input
              id={`checkbox-${option.id}`}
              type="checkbox"
              className="h-4 w-4 border-4 border-blue-300 accent-[#3BF4C7]"
              checked={selectedOptions.includes(option.label)}
              onChange={() => handleCheckboxChange(option.label)}
            />
            <label
              htmlFor={`checkbox-${option.id}`}
              className="ml-2 block text-sm text-black dark:text-[#D5D5D5]"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComp;
