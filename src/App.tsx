import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/mock";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route?.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
