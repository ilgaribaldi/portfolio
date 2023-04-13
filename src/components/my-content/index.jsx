import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import About from '../../views/about/index';
import Projects from '../../views/projects/index';
import Contact from '../../views/contact/index';
import { Layout } from 'antd';


const { Content } = Layout;

const MyContent = () => {
  return (
    <Content
      style={{
        marginTop: 64,
        background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
      }}
    >
      <div style={{ background: '#fff', minHeight: 380 }}>
        <Routes>
          <Route path="/portfolio" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Content>
  );
};

export default MyContent;
