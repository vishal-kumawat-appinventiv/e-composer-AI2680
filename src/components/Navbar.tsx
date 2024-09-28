import { LOGO_IMG } from "../utils/mock";

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50 flex items-center justify-between w-full p-3 bg-[#f1f1f1] border border-b">
      <div className="flex items-center gap-2">
        <img src={LOGO_IMG} alt="logo" className="object-cover w-8 h-8" />
        <h1 className="text-2xl font-bold">EComposer</h1>
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <h3 className="text-sm text-black">Lifestyle Blog Listing</h3>
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
        <button className="text-white bg-black p-1 text-sm rounded-lg px-2  ">
          Get app free
        </button>
      </div>
    </section>
  );
};

export default Navbar;
