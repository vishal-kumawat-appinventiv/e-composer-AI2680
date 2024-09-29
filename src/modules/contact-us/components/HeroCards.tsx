const HeroCards = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full px-4">
      <Card1 />
      <Card2 />
    </section>
  );
};

export default HeroCards;

const Card1 = () => {
  return (
    <div className="bg-white flex flex-col p-4 justify-center items-center gap-3 h-full w-full overflow-hidden rounded-xl border-2">
      <i className="bi bi-geo-alt text-red-500 text-4xl"></i>
      <h4 className="text-2xl text-black">Order Tracking</h4>
      <p className="text-sm text-gray-500">
        Log in to check the status of your order
      </p>
      <button className="text-white bg-black py-2 px-4 rounded-l-full rounded-r-full hover:bg-purple-200 hover:text-black transition-colors duration-500">
        Track yout order <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="bg-white flex flex-col p-4 justify-center items-center gap-3 h-full w-full overflow-hidden rounded-xl border-2">
      <i className="bi bi-box-seam text-red-500 text-4xl"></i>
      <h4 className="text-2xl text-black">Return & Exchange</h4>
      <p className="text-sm text-gray-500">
        We make it easy to return and exchange styles
      </p>
      <button className="text-white bg-black py-2 px-4 rounded-l-full rounded-r-full hover:bg-purple-200 hover:text-black transition-colors duration-500">
        Start a return <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};
