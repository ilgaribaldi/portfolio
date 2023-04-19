import React from 'react';
import { BackgroundParticles } from '../../components/particles';
import Links from './components/links';
import Info from './components/info';

const Contact = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          padding: '2rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Links />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Info />
      </div>
      <div
        style={{
          minHeight: '55vh',
          position: 'relative',
          zIndex: 0,
        }}
      >
        <BackgroundParticles id="2" />
      </div>
    </div>
  );
};

export default Contact;
