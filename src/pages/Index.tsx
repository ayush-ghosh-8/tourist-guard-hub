import { useState } from "react";
import MainPage from "@/components/MainPage";
import PoliceLandingPage from "@/components/PoliceLandingPage";
import DashboardSelector from "@/components/DashboardSelector";
import StateLoginPage from "@/components/StateLoginPage";
import ZonalLoginPage from "@/components/ZonalLoginPage";
import StateDashboard from "@/components/StateDashboard";
import ZonalDashboard from "@/components/ZonalDashboard";

const Index = () => {
  const [selectedDashboard, setSelectedDashboard] = useState<'main' | 'landing' | 'selector' | 'state-login' | 'zonal-login' | 'state' | 'zonal'>('main');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'state' | 'zonal' | null>(null);

  const handlePoliceDashboardClick = () => {
    setSelectedDashboard('landing');
  };

  const handleAccessDashboards = () => {
    setSelectedDashboard('selector');
  };

  const handleDashboardSelect = (type: 'state' | 'zonal') => {
    setSelectedDashboard(type === 'state' ? 'state-login' : 'zonal-login');
  };

  const handleStateLogin = () => {
    setIsAuthenticated(true);
    setUserRole('state');
    setSelectedDashboard('state');
  };

  const handleZonalLogin = () => {
    setIsAuthenticated(true);
    setUserRole('zonal');
    setSelectedDashboard('zonal');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setSelectedDashboard('landing');
  };

  const handleBackToSelector = () => {
    setSelectedDashboard('selector');
  };

  const handleBackToLanding = () => {
    setSelectedDashboard('landing');
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
      {selectedDashboard === 'selector' && (
        <DashboardSelector 
          onSelectDashboard={handleDashboardSelect}
          onBack={handleBackToLanding}
        />
      )}
      {selectedDashboard === 'state-login' && (
        <StateLoginPage 
          onLogin={handleStateLogin}
          onBack={handleBackToSelector}
        />
      )}
      {selectedDashboard === 'zonal-login' && (
        <ZonalLoginPage 
          onLogin={handleZonalLogin}
          onBack={handleBackToSelector}
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
