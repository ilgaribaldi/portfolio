import React from 'react';
import KeyTechSkills from './components/key-tech-skills';

const Skills = () => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'white',
        padding: 24,
        minHeight: '85vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <KeyTechSkills/>
      </div>
    </div>
  );
};

export default Skills;
