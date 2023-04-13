import React from 'react';
import Particles from 'react-particles-js';
import particlesParams from './params';

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
};

const BackgroundParticles = () => {
  return <Particles params={particlesParams} style={style} />;
};

export default BackgroundParticles;
