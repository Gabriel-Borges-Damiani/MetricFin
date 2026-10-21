import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import WelcomePage from "../pages/WelcomePage";
import DashboardPage from "../pages/DashboardPage";
import MonthsPage from "../pages/MonthsPage";
import EvolutionPage from "../pages/EvolutionPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/meses" element={<MonthsPage />} />
        <Route path="/evolucao" element={<EvolutionPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
