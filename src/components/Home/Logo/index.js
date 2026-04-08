import { useEffect, useState } from 'react';
import LogoE from '../../../assets/images/E.png';
import './index.scss';

const Logo = () => {
  const [letterClass, setLetterClass] = useState('');

  useEffect(() => {
    // This triggers the fade-in after 2 seconds 
    // (enough time for the bounce and SVG draw to start)
    const timer = setTimeout(() => {
      setLetterClass('animate');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="logo-container">
      <img
        className={`solid-logo ${letterClass}`}
        src={LogoE}
        alt="Developer Logo"
      />
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="svg-container"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="svg-path"
          fill="none"
          d="M80,60 H320 V120 H140 V170 H280 V230 H140 V280 H320 V340 H80 Z"
        />
      </svg>
    </div>
  );
};

export default Logo;