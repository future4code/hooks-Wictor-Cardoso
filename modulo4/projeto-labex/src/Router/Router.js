import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import CreateTripsPage from "../pages/CreateTripsPage/CreateTripsPage";

export default Router = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="admin" element={<AdminHomePage />} />
        <Route path="aplication" element={<ApplicationFormPage />} />
        <Route path="create" element={<CreateTripsPage />} />
        <Route path="list" element={<ListTripsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="trip" element={<TripDetailsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}


