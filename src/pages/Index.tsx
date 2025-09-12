import { useState } from "react";
import MainPage from "@/components/MainPage";
import PoliceLandingPage from "@/components/PoliceLandingPage";
import DashboardSelector from "@/components/DashboardSelector";
import StateDashboard from "@/components/StateDashboard";
import ZonalDashboard from "@/components/ZonalDashboard";

const Index = () => {
  const [selectedDashboard, setSelectedDashboard] = useState<'main' | 'landing' | 'selector' | 'state' | 'zonal'>('main');

  const handlePoliceDashboardClick = () => {
    setSelectedDashboard('landing');
  };

  const handleAccessDashboards = () => {
    setSelectedDashboard('selector');
  };

  const handleDashboardSelect = (type: 'state' | 'zonal') => {
    setSelectedDashboard(type);
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
          onSelect={handleDashboardSelect}
          onBack={handleBackToLanding}
        />
      )}
      {selectedDashboard === 'state' && (
        <StateDashboard onBack={handleBackToSelector} />
      )}
      {selectedDashboard === 'zonal' && (
        <ZonalDashboard onBack={handleBackToSelector} />
      )}
    </div>
  );
};

export default Index;
