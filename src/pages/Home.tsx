import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedCourses from '../components/FeaturedCourses';
import CertificationSection from '../components/CertificationSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroCarousel />
      <FeaturedCourses />
      <CertificationSection />
      <ContactSection />
    </div>
  );
};

export default Home;