const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <section className="border rounded-xl flex py-10 px-2 lg:px-0 w-full items-center justify-evenly flex-col sm:flex-row">
        <div className="mb-4 sm:mb-0">
          <i className="bi bi-send text-5xl"></i>
        </div>
        <MiddleText />
        <SubscribeInput />
      </section>
    </div>
  );
};

export default NewsLetter;

const SubscribeInput = () => {
  return (
    <div className="border rounded flex items-center gap-2 px-2 py-1 justify-between w-full sm:w-auto mt-4 sm:mt-0">
      <input
        id="email"
        type="text"
        placeholder="Enter your email here.."
        autoComplete="off"
        className="outline-none border-none text-sm px-2 w-full sm:w-auto"
      />
      <button className="rounded text-white font-bold text-sm flex gap-1 bg-black px-4 lg:px-8 py-2 hover:bg-red-400">
        Subscribe <i className="bi bi-arrow-up-right text-white"></i>
      </button>
    </div>
  );
};

const MiddleText = () => {
  return (
    <div className="flex flex-col gap-2 text-center sm:text-left">
      <h3 className="text-xl lg:text-3xl text-black font-bold">
        Inside Design: <br />
        Stories & interviews
      </h3>
      <p className="text-sm text-gray-500 px-5 lg:px-0">
        Subscribe to learn about new product features, the latest in <br />
        technology, and updates
      </p>
    </div>
  );
};
