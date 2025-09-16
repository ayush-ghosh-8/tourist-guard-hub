// Mock data for Police Dashboards
export interface Alert {
  id: number;
  type: string;
  location: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
}

export interface Incident {
  id: number;
  type: string;
  location: string;
  tourist: string;
  patrol?: string;
  status: 'responding' | 'investigating' | 'monitoring' | 'resolved';
  time: string;
  priority: 'urgent' | 'high' | 'normal';
}

export interface PatrolCar {
  car: string;
  status: 'responding' | 'investigating' | 'patrolling' | 'available';
  location: string;
  officer: string;
  eta: string;
}

export interface TouristCase {
  id: number;
  touristName: string;
  nationality: string;
  caseType: string;
  status: 'open' | 'investigating' | 'resolved';
  priority: 'urgent' | 'high' | 'normal';
  assignedOfficer: string;
  location: string;
  reportedAt: string;
}

// State Level Data
export const stateAlerts: Alert[] = [
  { id: 1, type: 'SOS Emergency', location: 'Red Fort, Delhi', time: '2 min ago', severity: 'high' },
  { id: 2, type: 'Scam Report', location: 'Connaught Place, Delhi', time: '15 min ago', severity: 'medium' },
  { id: 3, type: 'Tourist Lost', location: 'India Gate, Delhi', time: '32 min ago', severity: 'low' },
  { id: 4, type: 'Hotspot Alert', location: 'Chandni Chowk, Delhi', time: '1 hour ago', severity: 'medium' },
  { id: 5, type: 'Merchant Fraud', location: 'Karol Bagh, Delhi', time: '2 hours ago', severity: 'high' }
];

export const stateCases: TouristCase[] = [
  {
    id: 1,
    touristName: 'John Smith',
    nationality: 'United Kingdom',
    caseType: 'Credit Card Fraud',
    status: 'investigating',
    priority: 'high',
    assignedOfficer: 'DCP Sharma',
    location: 'Connaught Place',
    reportedAt: '2024-01-15 14:30'
  },
  {
    id: 2,
    touristName: 'Maria Garcia',
    nationality: 'Spain',
    caseType: 'Overcharging Scam',
    status: 'resolved',
    priority: 'normal',
    assignedOfficer: 'ACP Patel',
    location: 'Chandni Chowk',
    reportedAt: '2024-01-15 10:15'
  },
  {
    id: 3,
    touristName: 'David Chen',
    nationality: 'China',
    caseType: 'Fake Merchandise',
    status: 'open',
    priority: 'normal',
    assignedOfficer: 'Inspector Kumar',
    location: 'Janpath Market',
    reportedAt: '2024-01-15 16:45'
  },
  {
    id: 4,
    touristName: 'Sarah Johnson',
    nationality: 'USA',
    caseType: 'Taxi Overcharge',
    status: 'resolved',
    priority: 'normal',
    assignedOfficer: 'SI Singh',
    location: 'Airport',
    reportedAt: '2024-01-14 22:30'
  }
];

// District Level Data
export const districtIncidents: Incident[] = [
  {
    id: 1,
    type: 'SOS Alert',
    location: 'Sector 18 Market',
    tourist: 'John Smith (UK)',
    patrol: 'PCR-07',
    status: 'responding',
    time: '3 min ago',
    priority: 'urgent'
  },
  {
    id: 2,
    type: 'Scam Report',
    location: 'Railway Station',
    tourist: 'Maria Garcia (Spain)',
    patrol: 'PCR-12',
    status: 'investigating',
    time: '18 min ago',
    priority: 'high'
  },
  {
    id: 3,
    type: 'Geo-fence Breach',
    location: 'Old City Area',
    tourist: 'David Chen (China)',
    patrol: 'PCR-03',
    status: 'monitoring',
    time: '45 min ago',
    priority: 'normal'
  },
  {
    id: 4,
    type: 'Merchant Complaint',
    location: 'Shopping Complex',
    tourist: 'Sarah Johnson (USA)',
    patrol: 'PCR-15',
    status: 'resolved',
    time: '2 hours ago',
    priority: 'normal'
  }
];

export const patrolCars: PatrolCar[] = [
  {
    car: 'PCR-07',
    status: 'responding',
    location: 'Sector 18',
    officer: 'SI Sharma',
    eta: '3 min'
  },
  {
    car: 'PCR-12',
    status: 'investigating',
    location: 'Railway Station',
    officer: 'HC Patel',
    eta: 'On site'
  },
  {
    car: 'PCR-03',
    status: 'patrolling',
    location: 'Tourist Area',
    officer: 'Constable Kumar',
    eta: 'Available'
  },
  {
    car: 'PCR-15',
    status: 'available',
    location: 'Police Station',
    officer: 'SI Singh',
    eta: 'Ready'
  }
];

export const stateStats = {
  activeCases: 47,
  sosAlerts: 12,
  officersOnDuty: 156,
  touristVerifications: 234,
  responseTime: '4.2 min',
  resolutionRate: '95.2%'
};

export const districtStats = {
  activeIncidents: 8,
  touristsTracked: 156,
  fraudCases: 23,
  alertsSent: 12,
  performanceScore: '95.2%',
  patrolCarsActive: 4
};