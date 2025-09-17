import { useState } from "react";
import MainPage from "@/components/MainPage";
import PoliceLandingPage from "@/components/PoliceLandingPage";
import LoginPage from "@/components/LoginPage";
import DashboardSelector from "@/components/DashboardSelector";
import StateDashboard from "@/components/StateDashboard";
import ZonalDashboard from "@/components/ZonalDashboard";

const Index = () => {
  const [selectedDashboard, setSelectedDashboard] = useState<'main' | 'landing' | 'login' | 'selector' | 'state' | 'zonal'>('main');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'state' | 'zonal' | null>(null);

  const handlePoliceDashboardClick = () => {
    setSelectedDashboard('landing');
  };

  const handleAccessDashboards = () => {
    setSelectedDashboard('login');
  };

  const handleLogin = (role: 'state' | 'zonal') => {
    setIsAuthenticated(true);
    setUserRole(role);
    setSelectedDashboard(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setSelectedDashboard('landing');
  };

  const handleDashboardSelect = (type: 'state' | 'zonal') => {
    setSelectedDashboard(type);
  };

  const handleBackToSelector = () => {
    if (isAuthenticated) {
      setSelectedDashboard(userRole!);
    } else {
      setSelectedDashboard('login');
    }
  };

  const handleBackToLanding = () => {
    setSelectedDashboard('landing');
  };

  const handleBackToLogin = () => {
    setSelectedDashboard('login');
  };

  const handleBackToMain = () => {
    setSelectedDashboard('main');
  };

  return (
    <div className="min-h-screen">
      {selectedDashboard === 'main' && (
        <MainPage onPoliceDashboardClick={handlePoliceDashboardClick} />
      )}
      {selectedDashboard === 'landing' && (
        <PoliceLandingPage 
          onAccessDashboards={handleAccessDashboards}
          onBack={handleBackToMain}
        />
      )}
      {selectedDashboard === 'login' && (
        <LoginPage 
          onLogin={handleLogin}
          onBack={handleBackToLanding}
        />
      )}
      {selectedDashboard === 'state' && (
        <StateDashboard onBack={handleBackToLanding} onLogout={handleLogout} />
      )}
      {selectedDashboard === 'zonal' && (
        <ZonalDashboard onBack={handleBackToLanding} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default Index;
