import { useState } from "react";
import DashboardSelector from "@/components/DashboardSelector";
import StateDashboard from "@/components/StateDashboard";
import ZonalDashboard from "@/components/ZonalDashboard";

const Index = () => {
  const [selectedDashboard, setSelectedDashboard] = useState<'selector' | 'state' | 'zonal'>('selector');

  const handleDashboardSelect = (type: 'state' | 'zonal') => {
    setSelectedDashboard(type);
  };

  const handleBack = () => {
    setSelectedDashboard('selector');
  };

  return (
    <div className="min-h-screen">
      {selectedDashboard === 'selector' && (
        <DashboardSelector onSelect={handleDashboardSelect} />
      )}
      {selectedDashboard === 'state' && (
        <StateDashboard onBack={handleBack} />
      )}
      {selectedDashboard === 'zonal' && (
        <ZonalDashboard onBack={handleBack} />
      )}
    </div>
  );
};

export default Index;
