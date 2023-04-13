import React from 'react';
import { Divider } from 'antd';
import Profile from './components/profile';
import Employment from './components/employment';
import KeyTechSkills from './components/key-tech-skills';
import Education from './components/education';

const About = () => {
  return (
    <div style={{padding: 24}}>
      <Profile />
      <Divider />
      <Employment></Employment>
      <Divider />
      <Education />
      <Divider />
      <KeyTechSkills />
    </div>
  );
};

export default About;
