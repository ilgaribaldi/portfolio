import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import MyHeader from './components/my-header/index';
import MyContent from './components/my-content/index';

const { Footer } = Layout;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    document.title = "Marcelo's Portfolio";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <MyHeader />
        <MyContent />
        <Footer style={{ textAlign: 'center' }}>
          Marcelo Villarreal ©{new Date().getFullYear()} Created with Ant Design
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
