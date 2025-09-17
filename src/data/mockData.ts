// Mock data for Police Dashboards
export interface Alert {
  id: number;
  type: string;
  location: string;
  time: string;
  severity: 'high' | 'medium' | 'low';
  coordinates?: { lat: number; lng: number };
  touristId?: string;
  description?: string;
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
  coordinates?: { lat: number; lng: number };
  description?: string;
}

export interface PatrolCar {
  car: string;
  status: 'responding' | 'investigating' | 'patrolling' | 'available';
  location: string;
  officer: string;
  eta: string;
  coordinates?: { lat: number; lng: number };
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
  evidence?: string[];
  description?: string;
}

export interface Tourist {
  id: string;
  name: string;
  nationality: string;
  passportNo: string;
  phoneNumber: string;
  currentLocation: string;
  checkInDate: string;
  hotelName: string;
  emergencyContact: string;
  verified: boolean;
  riskLevel: 'low' | 'medium' | 'high';
}

export interface Hotspot {
  id: number;
  name: string;
  location: string;
  riskLevel: 'high' | 'medium' | 'low';
  incidentCount: number;
  coordinates: { lat: number; lng: number };
  recentIncidents: string[];
}

// State Level Data
export const stateAlerts: Alert[] = [
  { 
    id: 1, 
    type: 'SOS Emergency', 
    location: 'Red Fort, Delhi', 
    time: '2 min ago', 
    severity: 'high',
    coordinates: { lat: 28.6562, lng: 77.2410 },
    touristId: 'T001',
    description: 'Tourist reported harassment by local vendors'
  },
  { 
    id: 2, 
    type: 'Scam Report', 
    location: 'Connaught Place, Delhi', 
    time: '15 min ago', 
    severity: 'medium',
    coordinates: { lat: 28.6289, lng: 77.2065 },
    touristId: 'T002',
    description: 'Overcharging at restaurant, tourist needs assistance'
  },
  { 
    id: 3, 
    type: 'Tourist Lost', 
    location: 'India Gate, Delhi', 
    time: '32 min ago', 
    severity: 'low',
    coordinates: { lat: 28.6129, lng: 77.2295 },
    touristId: 'T003',
    description: 'Foreign tourist unable to find way back to hotel'
  },
  { 
    id: 4, 
    type: 'Hotspot Alert', 
    location: 'Chandni Chowk, Delhi', 
    time: '1 hour ago', 
    severity: 'medium',
    coordinates: { lat: 28.6506, lng: 77.2334 },
    description: 'High tourist traffic area, increased patrol needed'
  },
  { 
    id: 5, 
    type: 'Merchant Fraud', 
    location: 'Karol Bagh, Delhi', 
    time: '2 hours ago', 
    severity: 'high',
    coordinates: { lat: 28.6519, lng: 77.1909 },
    touristId: 'T004',
    description: 'Fake gemstone scam reported by multiple tourists'
  }
];

export const stateCases: TouristCase[] = [
  {
    id: 1,
    touristName: 'James Wilson',
    nationality: 'United Kingdom',
    caseType: 'Credit Card Fraud',
    status: 'investigating',
    priority: 'high',
    assignedOfficer: 'DCP Rajesh Sharma',
    location: 'Connaught Place',
    reportedAt: '2024-01-15 14:30',
    evidence: ['Card statement', 'CCTV footage', 'Merchant receipt'],
    description: 'Tourist card cloned at ATM, fraudulent transactions detected'
  },
  {
    id: 2,
    touristName: 'Emma Thompson',
    nationality: 'Australia',
    caseType: 'Overcharging Scam',
    status: 'resolved',
    priority: 'normal',
    assignedOfficer: 'ACP Priya Patel',
    location: 'Chandni Chowk',
    reportedAt: '2024-01-15 10:15',
    evidence: ['Receipt', 'Audio recording'],
    description: 'Restaurant charged 5x normal rate, money recovered and returned'
  },
  {
    id: 3,
    touristName: 'Michael Brown',
    nationality: 'Canada',
    caseType: 'Fake Merchandise',
    status: 'open',
    priority: 'normal',
    assignedOfficer: 'Inspector Amit Kumar',
    location: 'Janpath Market',
    reportedAt: '2024-01-15 16:45',
    evidence: ['Product photos', 'Payment receipt'],
    description: 'Sold fake handicrafts claiming to be authentic, investigation ongoing'
  },
  {
    id: 4,
    touristName: 'Lisa Anderson',
    nationality: 'USA',
    caseType: 'Taxi Overcharge',
    status: 'resolved',
    priority: 'normal',
    assignedOfficer: 'SI Vikram Singh',
    location: 'IGI Airport',
    reportedAt: '2024-01-14 22:30',
    evidence: ['GPS route', 'Meter reading'],
    description: 'Taxi driver charged 3x meter rate, penalty imposed and refund given'
  },
  {
    id: 5,
    touristName: 'Robert Taylor',
    nationality: 'Germany',
    caseType: 'Hotel Booking Fraud',
    status: 'investigating',
    priority: 'high',
    assignedOfficer: 'Inspector Meera Joshi',
    location: 'Paharganj',
    reportedAt: '2024-01-16 09:20',
    evidence: ['Booking confirmation', 'Payment proof'],
    description: 'Fake hotel booking website, tourist arrived to non-existent hotel'
  }
];

// District Level Data
export const districtIncidents: Incident[] = [
  {
    id: 1,
    type: 'SOS Alert',
    location: 'Sector 18 Market, Noida',
    tourist: 'Alex Johnson (UK)',
    patrol: 'PCR-07',
    status: 'responding',
    time: '3 min ago',
    priority: 'urgent',
    coordinates: { lat: 28.5685, lng: 77.3259 },
    description: 'Tourist pressed panic button, lost and feeling unsafe'
  },
  {
    id: 2,
    type: 'Scam Report',
    location: 'New Delhi Railway Station',
    tourist: 'Sophie Miller (Germany)',
    patrol: 'PCR-12',
    status: 'investigating',
    time: '18 min ago',
    priority: 'high',
    coordinates: { lat: 28.6431, lng: 77.2197 },
    description: 'Fake travel agency scam, tourist needs immediate assistance'
  },
  {
    id: 3,
    type: 'Geo-fence Breach',
    location: 'Old Delhi Area',
    tourist: 'Chen Wei (China)',
    patrol: 'PCR-03',
    status: 'monitoring',
    time: '45 min ago',
    priority: 'normal',
    coordinates: { lat: 28.6508, lng: 77.2311 },
    description: 'Tourist entered high-risk area without guide, monitoring required'
  },
  {
    id: 4,
    type: 'Merchant Complaint',
    location: 'Select City Walk Mall',
    tourist: 'Jennifer Davis (USA)',
    patrol: 'PCR-15',
    status: 'resolved',
    time: '2 hours ago',
    priority: 'normal',
    coordinates: { lat: 28.4955, lng: 77.0734 },
    description: 'Dispute resolved, merchant agreed to refund overcharged amount'
  },
  {
    id: 5,
    type: 'Medical Emergency',
    location: 'Humayun Tomb',
    tourist: 'Pierre Dubois (France)',
    patrol: 'PCR-08',
    status: 'responding',
    time: '12 min ago',
    priority: 'urgent',
    coordinates: { lat: 28.5933, lng: 77.2507 },
    description: 'Tourist collapsed due to heat, ambulance and patrol dispatched'
  }
];

export const patrolCars: PatrolCar[] = [
  {
    car: 'PCR-07',
    status: 'responding',
    location: 'Sector 18, Noida',
    officer: 'SI Rajesh Sharma',
    eta: '3 min',
    coordinates: { lat: 28.5685, lng: 77.3259 }
  },
  {
    car: 'PCR-12',
    status: 'investigating',
    location: 'New Delhi Railway Station',
    officer: 'HC Priya Patel',
    eta: 'On site',
    coordinates: { lat: 28.6431, lng: 77.2197 }
  },
  {
    car: 'PCR-03',
    status: 'patrolling',
    location: 'India Gate Area',
    officer: 'Constable Amit Kumar',
    eta: 'Available',
    coordinates: { lat: 28.6129, lng: 77.2295 }
  },
  {
    car: 'PCR-15',
    status: 'available',
    location: 'Connaught Place PS',
    officer: 'SI Vikram Singh',
    eta: 'Ready',
    coordinates: { lat: 28.6289, lng: 77.2065 }
  },
  {
    car: 'PCR-08',
    status: 'responding',
    location: 'Humayun Tomb',
    officer: 'HC Meera Joshi',
    eta: '8 min',
    coordinates: { lat: 28.5933, lng: 77.2507 }
  },
  {
    car: 'PCR-21',
    status: 'patrolling',
    location: 'Red Fort Area',
    officer: 'Constable Arjun Yadav',
    eta: 'Available',
    coordinates: { lat: 28.6562, lng: 77.2410 }
  }
];

// Additional Mock Data
export const tourists: Tourist[] = [
  {
    id: 'T001',
    name: 'James Wilson',
    nationality: 'United Kingdom',
    passportNo: 'GB123456789',
    phoneNumber: '+44-7700-900123',
    currentLocation: 'Red Fort, Delhi',
    checkInDate: '2024-01-15',
    hotelName: 'Hotel Imperial',
    emergencyContact: '+44-20-7946-0958',
    verified: true,
    riskLevel: 'high'
  },
  {
    id: 'T002',
    name: 'Emma Thompson',
    nationality: 'Australia',
    passportNo: 'AU987654321',
    phoneNumber: '+61-400-123-456',
    currentLocation: 'Connaught Place, Delhi',
    checkInDate: '2024-01-14',
    hotelName: 'The Claridges',
    emergencyContact: '+61-2-9876-5432',
    verified: true,
    riskLevel: 'medium'
  },
  {
    id: 'T003',
    name: 'Michael Brown',
    nationality: 'Canada',
    passportNo: 'CA456789123',
    phoneNumber: '+1-416-555-0123',
    currentLocation: 'India Gate, Delhi',
    checkInDate: '2024-01-16',
    hotelName: 'Taj Palace',
    emergencyContact: '+1-647-555-0987',
    verified: false,
    riskLevel: 'low'
  }
];

export const hotspots: Hotspot[] = [
  {
    id: 1,
    name: 'Chandni Chowk Market',
    location: 'Old Delhi',
    riskLevel: 'high',
    incidentCount: 23,
    coordinates: { lat: 28.6506, lng: 77.2334 },
    recentIncidents: ['Overcharging', 'Fake goods', 'Pickpocketing']
  },
  {
    id: 2,
    name: 'Connaught Place',
    location: 'Central Delhi',
    riskLevel: 'medium',
    incidentCount: 15,
    coordinates: { lat: 28.6289, lng: 77.2065 },
    recentIncidents: ['Credit card fraud', 'Restaurant scams']
  },
  {
    id: 3,
    name: 'Karol Bagh Market',
    location: 'West Delhi',
    riskLevel: 'high',
    incidentCount: 18,
    coordinates: { lat: 28.6519, lng: 77.1909 },
    recentIncidents: ['Gemstone fraud', 'Electronic scams', 'Tour guide fraud']
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
  patrolCarsActive: 6
};

// Enhanced Zonal/District Data
export const zonalAlerts = [
  {
    id: 1,
    type: "Tourist Scam Report",
    severity: "high",
    location: "Connaught Place, Delhi",
    time: "2 mins ago",
    touristId: "TIN789012",
    status: "active",
    description: "Tourist reports overcharging at souvenir shop",
    patrolAssigned: "DL-P-03"
  },
  {
    id: 2,
    type: "Lost Tourist",
    severity: "medium",
    location: "Red Fort Area",
    time: "8 mins ago",
    touristId: "TIN456789",
    status: "active",
    description: "German tourist separated from group",
    patrolAssigned: "DL-P-07"
  },
  {
    id: 3,
    type: "Medical Emergency",
    severity: "urgent",
    location: "India Gate",
    time: "15 mins ago",
    touristId: "TIN234567",
    status: "responding",
    description: "Tourist experiencing chest pain",
    patrolAssigned: "DL-P-01"
  }
];

export const zonalCases = [
  {
    id: "ZC001",
    touristName: "Sarah Johnson",
    touristId: "TIN789012",
    nationality: "USA",
    caseType: "Fraud Complaint",
    description: "Overcharged ₹5000 for taxi ride from airport",
    location: "IGI Airport to Karol Bagh",
    dateReported: "2024-01-15",
    status: "investigating",
    priority: "high",
    assignedOfficer: "Insp. Rajesh Kumar",
    evidence: ["Receipt copy", "Taxi number plate photo"],
    resolution: "",
    merchantDetails: {
      name: "Delhi Taxi Service",
      license: "DL-TAX-2023-4567",
      contact: "+91-9876543210"
    }
  },
  {
    id: "ZC002",
    touristName: "Hans Mueller",
    touristId: "TIN456789",
    nationality: "Germany",
    caseType: "Theft Report",
    description: "Wallet stolen from hotel room",
    location: "Hotel Ashoka, Chanakyapuri",
    dateReported: "2024-01-14",
    status: "resolved",
    priority: "medium",
    assignedOfficer: "SI. Priya Sharma",
    evidence: ["CCTV footage", "Hotel staff statement"],
    resolution: "Wallet recovered, suspect arrested",
    merchantDetails: null
  }
];

export const zonalTourists = [
  {
    id: "TIN789012",
    name: "Sarah Johnson",
    nationality: "USA",
    passportNumber: "US123456789",
    age: 28,
    gender: "Female",
    riskLevel: "low",
    verificationStatus: "verified",
    lastScanned: "2024-01-15 14:30",
    location: "Connaught Place",
    accommodation: "Hotel Metropolitan",
    emergencyContact: "+1-555-0123",
    entryDate: "2024-01-10",
    plannedExit: "2024-01-20"
  },
  {
    id: "TIN456789",
    name: "Hans Mueller",
    nationality: "Germany", 
    passportNumber: "DE987654321",
    age: 45,
    gender: "Male",
    riskLevel: "medium",
    verificationStatus: "pending",
    lastScanned: "2024-01-15 12:15",
    location: "Red Fort",
    accommodation: "Hotel Ashoka",
    emergencyContact: "+49-123-456789",
    entryDate: "2024-01-12",
    plannedExit: "2024-01-22"
  }
];

export const zonalPatrolCars = [
  { car: "DL-P-01", officer: "SI. Amit Verma", status: "responding", location: "India Gate", eta: "3 mins" },
  { car: "DL-P-03", officer: "Const. Ravi Singh", status: "investigating", location: "Connaught Place", eta: "On site" },
  { car: "DL-P-07", officer: "HC. Sunita Devi", status: "patrolling", location: "Red Fort Area", eta: "5 mins" },
  { car: "DL-P-12", officer: "Const. Manoj Kumar", status: "available", location: "CP Metro Station", eta: "8 mins" }
];

export const zonalHotspots = [
  {
    id: 1,
    name: "Connaught Place Market",
    location: "Connaught Place, Delhi",
    riskLevel: "high",
    incidentCount: 15,
    recentIncidents: ["Overcharging", "Fake goods", "Aggressive vendors"],
    recommendations: ["Increase patrol frequency", "Tourist awareness campaign"],
    coordinates: { lat: 28.6315, lng: 77.2167 }
  },
  {
    id: 2,
    name: "Karol Bagh Main Market",
    location: "Karol Bagh, Delhi",
    riskLevel: "medium",
    incidentCount: 8,
    recentIncidents: ["Price manipulation", "Quality issues"],
    recommendations: ["Vendor license verification", "Price display enforcement"],
    coordinates: { lat: 28.6519, lng: 77.1909 }
  }
];

export const zonalStats = {
  activeIncidents: 8,
  touristsTracked: 156,
  patrolCarsActive: 4,
  performanceScore: "92.1%",
  qrScansToday: 89,
  casesResolved: 15
};