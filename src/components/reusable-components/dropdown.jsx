import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';

export default function Dropdown({ data, placeholder, defaultDropdownItem, onSelectChange }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultDropdownItem || null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    const clickedItem = data.find((item) => item.id === id);
    setSelectedItem(clickedItem);
    onSelectChange(clickedItem);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Update the selected item when the defaultDropdownItem prop changes
  useEffect(() => {
    setSelectedItem(defaultDropdownItem || null);
  }, [defaultDropdownItem]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem ? selectedItem.label : placeholder}
        <img
          src="/svg/arrow.svg"
          alt="arrow"
          style={{ transform: `${isOpen ? "rotate(90deg)" : "none"}`, width: "10px", transition: "0.3s ease" }}
        />
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`dropdown-item ${selectedItem && item.id === selectedItem.id ? "selected" : ""}`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultDropdownItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string
  }),
  onSelectChange: PropTypes.func.isRequired
};
