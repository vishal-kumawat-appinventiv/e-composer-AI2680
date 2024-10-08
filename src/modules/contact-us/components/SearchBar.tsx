// Search Bar for Contact Us Page (Hero Section)
// Static data
const SearchBar: React.FC = () => {
  return (
    <div className="w-[90%] lg:w-[35%] mx-auto flex justify-between bg-white items-center gap-2 rounded-l-full rounded-r-full px-1 pl-4 py-1">
      <Input />
      <Button />
    </div>
  );
};

export default SearchBar;

// Input for Search Bar
const Input: React.FC = () => {
  return (
    <input
      id="search"
      type="text"
      placeholder="Search for answers..."
      className="outline-none border-none text-sm lg:text-lg px-3 w-full"
    />
  );
};

// Button for Search Bar
const Button: React.FC = () => {
  return (
    <button className="bg-black text-sm lg:text-xl text-white rounded-l-full rounded-r-full px-5 lg:px-10 py-4 hover:bg-purple-200 hover:text-black transition-colors duration-500">
      Search
    </button>
  );
};
