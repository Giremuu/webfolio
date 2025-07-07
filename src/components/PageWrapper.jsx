import React from 'react';
import CursorGlow from './CursorGlow';
import Header from './Header';
import Footer from './Footer';

function PageWrapper({ children, showFooter = true }) {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden isolation-auto z-0">
      <CursorGlow />
      <Header />
      <div className="pt-28 z-0 relative">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default PageWrapper;
