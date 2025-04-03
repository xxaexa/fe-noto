import { Routes, Route } from "react-router-dom";
import {
  Layout,
  Account,
  UpdateAccount,
  InformationAccount,
  Note,
  UpdateNote,
  AddNote,
  Login,
  Register,
} from "./pages/";
import { useMediaQuery } from "./hook/useMediaQuery";
import Navbar from "./components/navigation/Navbar";
import ProtectedRoute from "./components/protection/Route";

const App = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isDesktop ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            >
              <Route
                path="update/:id"
                element={
                  <ProtectedRoute>
                    <UpdateAccount />
                  </ProtectedRoute>
                }
              />
              <Route
                path="information"
                element={
                  <ProtectedRoute>
                    <InformationAccount />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="note"
              element={
                <ProtectedRoute>
                  <Note />
                </ProtectedRoute>
              }
            >
              <Route
                path="add"
                element={
                  <ProtectedRoute>
                    <AddNote />
                  </ProtectedRoute>
                }
              />
              <Route
                path="update/:id"
                element={
                  <ProtectedRoute>
                    <UpdateNote />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/update/:id"
              element={
                <ProtectedRoute>
                  <UpdateAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/information"
              element={
                <ProtectedRoute>
                  <InformationAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="/note"
              element={
                <ProtectedRoute>
                  <Note />
                </ProtectedRoute>
              }
            />
            <Route
              path="/note/add"
              element={
                <ProtectedRoute>
                  <AddNote />
                </ProtectedRoute>
              }
            />
            <Route
              path="/note/update/:id"
              element={
                <ProtectedRoute>
                  <UpdateNote />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
