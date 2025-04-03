import { Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../../utils/localStorage";

import { WrapperProps } from "../../types";

const ProtectedRoute = ({ children }: WrapperProps) => {
  const user = getUserFromLocalStorage();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // Use React.Fragment or a wrapper div if necessary
};

export default ProtectedRoute;
