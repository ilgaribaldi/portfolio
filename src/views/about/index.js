import React from 'react';
import { Divider } from 'antd';
import Profile from './components/profile';
import Employment from './components/employment';
import Education from './components/education';

const About = () => {
  return (
    <div style={{ padding: 24, minHeight: '90vh' }}>
      <Profile />
      <Divider />
      <Employment></Employment>
      <Divider />
      <Education />
    </div>
  );
};

export default About;
