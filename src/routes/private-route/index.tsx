import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isUser: boolean;
}

const PrivateRoute: React.FC<Props> = ({ children, isUser }) => {
  return isUser ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
