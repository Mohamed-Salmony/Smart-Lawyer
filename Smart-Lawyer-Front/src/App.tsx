import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnalysisPage from "./pages/AnalysisPage";
import AnalysisResultsPage from "./pages/AnalysisResultsPage";
import LibraryPage from "./pages/LibraryPage";
import UploadPage from "./pages/UploadPage";
import DashboardPage from "./pages/DashboardPage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import MyFilesPage from "./pages/MyFilesPage";
import Dashboard from './pages/Dashboard';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/analysis/results" element={<AnalysisResultsPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/my-files" element={<MyFilesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
