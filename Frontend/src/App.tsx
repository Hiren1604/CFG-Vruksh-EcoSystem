import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import NewCourse from "./pages/NewCourse";
import CourseDetail from "./pages/CourseDetail";
import Requests from "./pages/Requests";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Auth from './pages/Auth'
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminRequests from "./pages/AdminRequests";
import AdminSettings from "./pages/AdminSettings";
import AdminCourses from "./pages/AdminCourses";
import Students from "./pages/Students";
import NGOs from "./pages/NGOs";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="auth" element={<Auth/>} />
            <Route path="/login" element={<LoginForm title="Login" description="Welcome back! Please sign in to continue" />} />
            <Route path="/signup" element={<SignupForm onBackClick={() => window.history.back()} />} />
            
            {/* NGO Routes */}
            <Route element={<Layout />}>
              <Route path="ngo-dashboard" element={<Dashboard />} />
              <Route path="ngo-analytics" element={<Analytics />} />
              <Route path="ngo-courses" element={<Courses />} />
              <Route path="ngo-course-detail/:id" element={<CourseDetail />} />
              <Route path="ngo-new-course" element={<NewCourse />} />
              <Route path="ngo-profile" element={<Profile />} />
              <Route path="ngo-requests" element={<Requests />} />
              <Route path="ngo-settings" element={<Settings />} />
            </Route>

            {/* Admin Routes */}
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="admin-analytics" element={<AdminAnalytics/>} />
            <Route path="admin-requests" element={<AdminRequests/>} />
            <Route path="admin-settings" element={<AdminSettings/>} />
            <Route path="admin-students" element={<Students/>} />
            <Route path="admin-ngos" element={<NGOs/>} />
            <Route path="admin-courses" element={<AdminCourses/>} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
