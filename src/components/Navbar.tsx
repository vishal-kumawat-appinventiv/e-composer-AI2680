import { useNavigate } from "react-router-dom";
import { LOGO_IMG } from "../utils/mock";
import NavSelect from "./NavSelect";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <section className="sticky top-0 z-50 flex items-center justify-between w-full p-3 bg-[#f1f1f1] border border-b">
      <div className="w-full flex items-center justify-between lg:hidden">
        <div className="flex gap-2">
          <img src={LOGO_IMG} alt="logo" className="object-cover w-8 h-8" />
          <h1 className="text-2xl font-bold">EComposer</h1>
        </div>
        <NavSelect />
      </div>
      <div
        className="hidden lg:flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={LOGO_IMG} alt="logo" className="object-cover w-8 h-8" />
        <h1 className="text-2xl font-bold">EComposer</h1>
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <NavSelect />
        <div className="bg-white border border-black rounded px-2 flex items-center">
          <i className="bi bi-search"></i>
          <input
            id={new Date().toString()}
            type="text"
            placeholder="Type something to find template"
            className="outline-none border-none text-sm px-3 w-full"
          />
        </div>
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
