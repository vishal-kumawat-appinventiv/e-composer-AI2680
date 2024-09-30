// Error Fallback UI for Error Boundary (react-error-boundary)
// Role - Renders a fallback UI when an error occurs
// Renders a simple error message with a reload button
const ErroFallbackUi = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[94vh] bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-semibold text-red-600 mb-4">Oops!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Something went wrong. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErroFallbackUi;
