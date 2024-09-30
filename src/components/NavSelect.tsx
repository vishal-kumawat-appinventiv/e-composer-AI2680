import React from "react";
import { useNavigate } from "react-router-dom";

// Nav Select for Navbar
// Role - Renders the dropdown to navigate to other pages
const NavSelect = () => {
  const navigate = useNavigate();

  // Handles the change event of the dropdown
  // Navigates to the corresponding page based on the selected value
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    if (selectedValue === "1") {
      navigate("/");
    } else if (selectedValue === "2") {
      navigate("/contact");
    }
  };

  return (
    <select
      name="category"
      id={Date.now().toString()}
      className="border-2 rounded-lg bg-white outline-none px-2 py-1 cursor-pointer"
      onChange={handleCategoryChange}
      // Sets the default value based on the current page
      defaultValue={window.location.pathname === "/" ? "1" : "2"}
    >
      <option value="1">Blog Listing</option>
      <option value="2">Contact Us</option>
    </select>
  );
};

export default NavSelect;
