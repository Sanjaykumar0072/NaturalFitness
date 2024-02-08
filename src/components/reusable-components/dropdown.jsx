import React, { useState, useEffect, useRef } from "react";

export default function Dropdown({ data, placeholder, onSelectChange }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    const clickedItem = data.find((item) => item.id === id);
    if (selectedItem && selectedItem.id === id) {
      // Deselect the item if it's already selected
      setSelectedItem(null);
      onSelectChange(null); // Send null to parent component to indicate deselection
    } else {
      setSelectedItem(clickedItem);
      onSelectChange(clickedItem); // Send selected item to parent component
    }
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

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem ? selectedItem.label : placeholder}
        <img
          src="/public/svg/arrow.svg"
          alt="arrow"
          style={{ transform: `${isOpen ? "rotate(90deg)" : "none"}`, width: "10px", transition: "0.3s ease" }}
        />
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`dropdown-item ${item.id === selectedItem?.id && "selected"}`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
