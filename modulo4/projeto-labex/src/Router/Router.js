import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import CreateTripsPage from "../pages/CreateTripsPage/CreateTripsPage";
import Error from "../pages/ErrorPage/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/aplication" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripsPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
