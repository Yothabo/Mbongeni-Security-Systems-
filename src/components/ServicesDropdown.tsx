import React, { useState, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import dropdownStyles from './ServicesDropdown.module.css';

interface ServicesDropdownProps {
  variant: 'desktop' | 'mobile';
  onItemClick?: () => void;
}

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({ variant, onItemClick }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Handle click outside for desktop dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  const toggleServices = () => {
    // Toggle close if already open
    if (isServicesOpen) {
      setIsServicesOpen(false);
    } else {
      setIsServicesOpen(true);
    }
  };

  const toggleMobileServices = () => {
    // Toggle close if already open
    if (isMobileServicesOpen) {
      setIsMobileServicesOpen(false);
    } else {
      setIsMobileServicesOpen(true);
    }
  };

  const handleMobileItemClick = () => {
    setIsMobileServicesOpen(false);
    if (onItemClick) {
      onItemClick();
    }
  };

  const handleDesktopItemClick = () => {
    setIsServicesOpen(false);
  };

  if (variant === 'desktop') {
    return (
      <div className={dropdownStyles.servicesDropdown} ref={servicesRef}>
        <button 
          className={`${dropdownStyles.servicesButton} ${isServicesOpen ? dropdownStyles.servicesOpen : ''}`}
          onClick={toggleServices}
        >
          Services <FaChevronDown className={dropdownStyles.chevronIcon} />
        </button>
        
        <div className={`${dropdownStyles.servicesMenu} ${isServicesOpen ? dropdownStyles.servicesMenuOpen : ''}`}>
          <div className={dropdownStyles.servicesColumn}>
            <h4 className={dropdownStyles.servicesCategory}>Cameras</h4>
            <a href="#cctv" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>CCTV Systems</a>
            <a href="#number-plate" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Number Plate Recognition</a>
            <a href="#motion" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Motion Detection</a>
            <a href="#night-vision" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Night Vision Cameras</a>
          </div>
          
          <div className={dropdownStyles.servicesColumn}>
            <h4 className={dropdownStyles.servicesCategory}>Fencing</h4>
            <a href="#electric-fence" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Electric Fencing</a>
            <a href="#razor-wire" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Razor Wire Systems</a>
            <a href="#palissade" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Palissade Fencing</a>
            <a href="#gate-motors" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Gate Motors & Automation</a>
          </div>
          
          <div className={dropdownStyles.servicesColumn}>
            <h4 className={dropdownStyles.servicesCategory}>Access Control</h4>
            <a href="#fingerprint" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Fingerprint Scanners</a>
            <a href="#facial" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Facial Recognition</a>
            <a href="#card-access" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Card Access Systems</a>
            <a href="#biometric" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Biometric Systems</a>
          </div>
          
          <div className={dropdownStyles.servicesColumn}>
            <h4 className={dropdownStyles.servicesCategory}>Alarms & Sensors</h4>
            <a href="#alarm-systems" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Alarm Systems</a>
            <a href="#motion-sensors" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Motion Sensors</a>
            <a href="#glass-break" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Glass Break Detectors</a>
            <a href="#smoke-detectors" className={dropdownStyles.serviceItem} onClick={handleDesktopItemClick}>Smoke & Heat Detectors</a>
          </div>
        </div>
      </div>
    );
  }

  // Mobile variant
  return (
    <div className={dropdownStyles.mobileServices}>
      <button 
        className={`${dropdownStyles.mobileServicesButton} ${isMobileServicesOpen ? dropdownStyles.mobileServicesOpen : ''}`}
        onClick={toggleMobileServices}
      >
        Services <FaChevronDown className={dropdownStyles.mobileChevron} />
      </button>
      
      <div className={`${dropdownStyles.mobileServicesMenu} ${isMobileServicesOpen ? dropdownStyles.mobileServicesMenuOpen : ''}`}>
        <div className={dropdownStyles.mobileServicesSection}>
          <h5>Cameras</h5>
          <a href="#cctv" onClick={handleMobileItemClick}>CCTV Systems</a>
          <a href="#number-plate" onClick={handleMobileItemClick}>Number Plate Recognition</a>
          <a href="#motion" onClick={handleMobileItemClick}>Motion Detection</a>
          <a href="#night-vision" onClick={handleMobileItemClick}>Night Vision Cameras</a>
        </div>
        
        <div className={dropdownStyles.mobileServicesSection}>
          <h5>Fencing</h5>
          <a href="#electric-fence" onClick={handleMobileItemClick}>Electric Fencing</a>
          <a href="#razor-wire" onClick={handleMobileItemClick}>Razor Wire Systems</a>
          <a href="#palissade" onClick={handleMobileItemClick}>Palissade Fencing</a>
          <a href="#gate-motors" onClick={handleMobileItemClick}>Gate Motors</a>
        </div>
        
        <div className={dropdownStyles.mobileServicesSection}>
          <h5>Access Control</h5>
          <a href="#fingerprint" onClick={handleMobileItemClick}>Fingerprint Scanners</a>
          <a href="#facial" onClick={handleMobileItemClick}>Facial Recognition</a>
          <a href="#card-access" onClick={handleMobileItemClick}>Card Access Systems</a>
          <a href="#biometric" onClick={handleMobileItemClick}>Biometric Systems</a>
        </div>
        
        <div className={dropdownStyles.mobileServicesSection}>
          <h5>Alarms & Sensors</h5>
          <a href="#alarm-systems" onClick={handleMobileItemClick}>Alarm Systems</a>
          <a href="#motion-sensors" onClick={handleMobileItemClick}>Motion Sensors</a>
          <a href="#glass-break" onClick={handleMobileItemClick}>Glass Break Detectors</a>
          <a href="#smoke-detectors" onClick={handleMobileItemClick}>Smoke Detectors</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
