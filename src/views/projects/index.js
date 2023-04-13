import React from 'react';
import { Typography, Row } from 'antd';
import Project1 from './components/project1'
import Project2 from './components/project2'

const { Title } = Typography;

const Projects = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Projects</Title>
      <Row gutter={[16, 16]}>
        <Project1 />
        <Project2 />
      </Row>
    </div>
  );
};

export default Projects;
