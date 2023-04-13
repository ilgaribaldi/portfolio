import React from 'react';
import BackgroundParticles from '../../components/particles';
import MyContact from './components/my-contact';


const Contact = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        backgroundColor: 'white',
      }}
    >
      <BackgroundParticles />
      <MyContact />
    </div>
  );
};

export default Contact;
