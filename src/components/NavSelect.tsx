import React from "react";
import { useNavigate } from "react-router-dom";

const NavSelect = () => {
  const navigate = useNavigate();

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
      id="category"
      className="border-2 rounded-lg bg-white outline-none px-2 py-1 cursor-pointer"
      onChange={handleCategoryChange}
    >
      <option value="1">Blog Listing</option>
      <option value="2">Contact Us</option>
    </select>
  );
};

export default NavSelect;
