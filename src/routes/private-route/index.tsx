import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isUser: boolean;
}

// If user is logged in and on auth route, render children else redirect to login
const PrivateRoute: React.FC<Props> = ({ children, isUser }) => {
  return isUser ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
