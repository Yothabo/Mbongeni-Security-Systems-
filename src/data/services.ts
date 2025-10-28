export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

export const services: Service[] = [
  // Cameras Category
  {
    id: 1,
    name: "CCTV Systems",
    description: "High-quality surveillance systems for homes and businesses with professional installation and maintenance.",
    category: "cameras"
  },
  {
    id: 2,
    name: "Number Plate Recognition",
    description: "Advanced license plate recognition systems for vehicle tracking and access control.",
    category: "cameras"
  },
  {
    id: 3,
    name: "Pan-Tilt-Zoom Cameras",
    description: "Remote-controlled cameras with 360° coverage, zoom capabilities, and automated tracking.",
    category: "cameras"
  },
  {
    id: 4,
    name: "Thermal Imaging Cameras",
    description: "Heat detection cameras for 24/7 surveillance in complete darkness and challenging conditions.",
    category: "cameras"
  },

  // Fencing Category
  {
    id: 5,
    name: "Electric Fencing",
    description: "Secure perimeter protection with professional installation and compliance with safety standards.",
    category: "fencing"
  },
  {
    id: 6,
    name: "Razor Wire Systems",
    description: "High-security razor wire installations for maximum perimeter protection.",
    category: "fencing"
  },
  {
    id: 7,
    name: "Palissade Fencing",
    description: "Durable palisade fencing solutions for residential and commercial properties.",
    category: "fencing"
  },
  {
    id: 8,
    name: "Bollard & Barrier Systems",
    description: "Vehicle access control with automatic bollards and security barriers.",
    category: "fencing"
  },

  // Access Control Category
  {
    id: 9,
    name: "Fingerprint Scanners",
    description: "Biometric fingerprint access control for secure and convenient entry management.",
    category: "access-control"
  },
  {
    id: 10,
    name: "Facial Recognition",
    description: "Advanced facial recognition systems for touchless access control.",
    category: "access-control"
  },
  {
    id: 11,
    name: "Card Access Systems",
    description: "RFID and smart card access control solutions for businesses and residences.",
    category: "access-control"
  },
  {
    id: 12,
    name: "Intercom & Video Entry",
    description: "Audio and video intercom systems for secure visitor management.",
    category: "access-control"
  },

  // Alarms & Sensors Category
  {
    id: 13,
    name: "Intruder Alarm Systems",
    description: "Comprehensive intruder detection with monitoring and emergency response.",
    category: "alarms-sensors"
  },
  {
    id: 14,
    name: "Motion Sensors",
    description: "Advanced motion detection sensors for indoor and outdoor security.",
    category: "alarms-sensors"
  },
  {
    id: 15,
    name: "Glass Break Detectors",
    description: "Acoustic glass break sensors that detect the sound of breaking glass.",
    category: "alarms-sensors"
  },
  {
    id: 16,
    name: "Smoke & Fire Detection",
    description: "Early warning fire detection systems with smoke and heat sensors.",
    category: "alarms-sensors"
  }
];
