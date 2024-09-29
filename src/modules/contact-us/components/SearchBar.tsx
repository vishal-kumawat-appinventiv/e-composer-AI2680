const SearchBar = () => {
  return (
    <div className="w-[90%] lg:w-[35%] mx-auto flex justify-between bg-white items-center gap-2 rounded-l-full rounded-r-full px-1 pl-4 py-1">
      <Input />
      <Button />
    </div>
  );
};

export default SearchBar;

const Input = () => {
  return (
    <input
      type="text"
      placeholder="Search for answers..."
      className="outline-none border-none text-sm lg:text-lg px-3 w-full"
    />
  );
};

const Button = () => {
  return (
    <button className="bg-black text-sm lg:text-xl text-white rounded-l-full rounded-r-full px-5 lg:px-10 py-4 hover:bg-purple-200 hover:text-black transition-colors duration-500">
      Search
    </button>
  );
};
