import React, { FC, useContext } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import EditProfile from "./components/EditProfile/EditProfile";
import Register from "./components/Register/Register";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "./components/Register/LoginComponent";
import { userContext } from "./context/LoginContext";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import ErrorPage from "./components/Error/ErrorPage";

const App: FC = () => {
  let { isLogin } = useContext(userContext);
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Register />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path = "*" element={<ErrorPage/>} />

        <Route element={<ProtectedRoute isAuthenticated={isLogin} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
