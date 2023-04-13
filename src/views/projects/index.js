import React from 'react';
import { Row } from 'antd';
import Project1 from './components/project1'
import Project2 from './components/project2'

const Projects = () => {
  return (
    <div style={{ padding: 24 }}>
      <Row gutter={[16, 16]}>
        <Project1 />
        <Project2 />
      </Row>
    </div>
  );
};

export default Projects;
