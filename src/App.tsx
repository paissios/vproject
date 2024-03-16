import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<NotFoundPage />} path="*" />
      </Route>
      <Route element={<PublicRoutes />}>
        <Route element={<LoginPage />} path="/login" />
      </Route>
    </Routes>
  );
}

export default App;
