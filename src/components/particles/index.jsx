import React from 'react';
import Particles from 'react-particles';
import { particlesParams, tunnelParams, confettiParams, hexagonParams } from './params';

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

const BackgroundTunnels = () => {
  return <Particles params={tunnelParams} style={style} />;
};

const BackgroundConfetti = () => {
  return <Particles params={confettiParams} style={style} />;
};

const BackgroundHexagons = () => {
  return <Particles params={hexagonParams} style={style} />;
};

export { BackgroundParticles, BackgroundTunnels, BackgroundConfetti, BackgroundHexagons };
