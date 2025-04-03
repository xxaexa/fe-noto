import { Navigate, useLocation } from "react-router-dom";
import {
  getUserFromLocalStorage,
  saveLocation,
} from "../../utils/localStorage";

import { WrapperProps } from "../../types";

const ProtectedRoute = ({ children }: WrapperProps) => {
  const user = getUserFromLocalStorage();
  const location = useLocation();

  if (!user) {
    saveLocation(location);
    return <Navigate to="/login" />;
  }

  return <>{children}</>; // Use React.Fragment or a wrapper div if necessary
};

export default ProtectedRoute;
