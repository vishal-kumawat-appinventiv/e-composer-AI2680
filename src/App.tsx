import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/mock";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/private-route";
import PublicRoute from "./routes/public-route";

const App = () => {
  // Assuming user is logged in (comming from auth)
  const isUser = true;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Routing via HOC */}
        {ROUTES.map((route, index) =>
          route.isPrivate ? (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute isUser={isUser}>
                  <route.component />
                </PrivateRoute>
              }
            />
          ) : (
            <Route
              key={index}
              path={route.path}
              element={
                <PublicRoute isUser={isUser}>
                  <route.component />
                </PublicRoute>
              }
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
