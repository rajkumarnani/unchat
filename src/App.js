import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./style.scss";
import { AuthContext } from "./context/AuthContext";

const App = () => {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <div>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/">
         <Route index element={<ProtectedRoute><Home/></ProtectedRoute>} />
         <Route path="login" element={<Login/>} />
         <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
