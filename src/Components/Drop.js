import { useState } from "react";

const InputDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(""); // Stores the selected option

  const options = ["Apple", "Banana", "Cherry", "Mango", "Orange", "Pineapple"];

  return (
    <div className="relative w-64">
      {/* Input Box (Clickable) */}
      <input
        type="text"
        placeholder="Select an option"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none cursor-pointer"
        value={selected} // Display selected option
        readOnly // Prevent manual input
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
      />

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelected(option); // Set selected option
                setIsOpen(false); // Close dropdown
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
