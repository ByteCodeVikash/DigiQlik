import React from 'react';
import Services from '../components/Services';
import MarketingBranding from '../components/MarketingBranding';
import FAQ from '../components/FAQ';

const ServicesPage = () => {
  return (
    <div className="page-services">
      <FAQ />
      <Services />
      <MarketingBranding />
    </div>
  );
};

export default ServicesPage;
