import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {
  SignUp,
  Login,
  Homepage,
  Verification,
  ForgotPassword,
  CreateNewPassword,
  ProfilePage,
  UpdatePasswordPage,
  EditProfilePage,
  MyDeliveries,
  NotFound,
  RidersLocation,
  MyRequest,
  RatingsPage,
  RiderFormPage,
} from "./pages";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";
import { SelectRider } from "./components";

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            localStorage.getItem("token") ? (
              <>
                <NotFound />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route exact path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<CreateNewPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route
          path="/location"
          element={
            <ProtectedRoutes>
              <RidersLocation />
            </ProtectedRoutes>
          }
        />
        <Route path="/rate" element={<RatingsPage />} />
        <Route path="/select-rider" element={<SelectRider />} />
        <Route path="/request-form" element={<RiderFormPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoutes>
              <EditProfilePage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/my_deliveries"
          element={
            <ProtectedRoutes>
              <MyDeliveries />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/my_request"
          element={
            <ProtectedRoutes>
              <MyRequest />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoutes>
              <UpdatePasswordPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
