
import React from 'react';
import { useIsMobile } from '../../hooks/use-mobile';
import MobileHero from './MobileHero';
import DesktopHero from './DesktopHero';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default Hero;
