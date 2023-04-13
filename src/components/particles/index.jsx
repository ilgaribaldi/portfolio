import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particlesParams } from './params';

const style = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
};

const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const BackgroundParticles = ({ id }) => {
  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesParams}
      style={style}
    />
  );
};

export { BackgroundParticles };
