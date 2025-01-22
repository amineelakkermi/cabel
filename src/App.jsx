import React, { Suspense } from 'react';
import { HeroSection, Footer, ScrollToTop, Navbar } from './components';

const Vision = React.lazy(() => import('./components/Vision'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
const Message = React.lazy(() => import('./components/Message'));
const Features = React.lazy(() => import('./components/Features'));
const QualitySection = React.lazy(() => import('./components/QualitySection'));
const Products = React.lazy(() => import('./components/Products'));

const App = () => {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <ScrollToTop />
        <Navbar />
        <HeroSection />
      </div>
        <Vision />
        <ServicesSection />
        <Message />
        <Features />
        <QualitySection />
        <Products />
      <Footer />
    </div>
  );
};

export default App;
