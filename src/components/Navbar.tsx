import { useNavigate } from "react-router-dom";
import { LOGO_IMG } from "../utils/mock";
import React from "react";

const Navbar = () => {
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
    <section className="sticky top-0 z-50 flex items-center justify-between w-full p-3 bg-[#f1f1f1] border border-b">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={LOGO_IMG} alt="logo" className="object-cover w-8 h-8" />
        <h1 className="text-2xl font-bold">EComposer</h1>
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <select
          name="category"
          id="category"
          className="border border-black rounded bg-white border-none outline-none px-2 py-1 cursor-pointer"
          onChange={handleCategoryChange}
        >
          <option value="1">Blog Listing</option>
          <option value="2">Contact Us</option>
        </select>
        <input
          type="text"
          placeholder="Type something to find template"
          className="border border-black rounded px-2"
        />
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <button className="text-white bg-black p-1 text-sm rounded-lg px-2">
          Try this demo now
        </button>
        <button className="text-white bg-black p-1 text-sm rounded-lg px-2">
          Get app free
        </button>
      </div>
    </section>
  );
};

export default Navbar;
