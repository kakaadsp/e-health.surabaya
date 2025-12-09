import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layanan from "./pages/Layanan";
import CompassSelect from "./pages/CompassSelect";
import FacilityList from "./pages/FacilityList";
import FacilityDetail from "./pages/FacilityDetail";
import Schedule from "./pages/Schedule";
import Registration from "./pages/Registration";
import Queue from "./pages/Queue";
import Tutorial from "./pages/Tutorial";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/layanan/:type" element={<CompassSelect />} />
          <Route path="/layanan/:type/:region" element={<FacilityList />} />
          <Route path="/fasilitas/:id" element={<FacilityDetail />} />
          <Route path="/jadwal/:facilityId/:service" element={<Schedule />} />
          <Route path="/pendaftaran/:facilityId/:service/:date" element={<Registration />} />
          <Route path="/antrian" element={<Queue />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
