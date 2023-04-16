import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadSeaAnemonePreset } from 'tsparticles-preset-sea-anemone';
import { particlesParams, seaAnemoneParams, hexagonParams } from './params';

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

const BackgroundSeaAnemone = ({ id }) => {
  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={seaAnemoneParams}
      style={style}
    />
  );
};

const BackgroundHexagons = ({ id }) => {
  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={hexagonParams}
      style={style}
    />
  );
};

const BackgroundParticlesSeaAnemone = ({ id }) => {
  const seaAnemoneInit = async (main) => {
    console.log(main);
    await loadSeaAnemonePreset(main);
    await loadFull(main);
  };

  return (
    <Particles
      id={id}
      init={seaAnemoneInit}
      loaded={particlesLoaded}
      options={{ preset: 'seaAnemone' }}
      style={style}
    />
  );
};

export { BackgroundParticles, BackgroundSeaAnemone, BackgroundHexagons, BackgroundParticlesSeaAnemone };
