import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isUser: boolean;
}

const PublicRoute: React.FC<Props> = ({ children, isUser }) => {
  const isOnAuthRoute =
    window.location.pathname === "/login" ||
    window.location.pathname === "/register";

  return isUser && isOnAuthRoute ? <Navigate to="/" /> : <>{children}</>;
};

export default PublicRoute;
