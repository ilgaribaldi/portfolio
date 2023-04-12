import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import About from './views/about/index';
import Projects from './views/projects/index';
import Contact from './views/contact/index';
import { HomeOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;

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
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            backgroundColor: '#001529',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              margin: '0 auto',
              maxWidth: 1200,
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={['1']}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexGrow: 1,
                border: 'none',
              }}
            >
              <Menu.Item
                key="/portfolio"
                style={{
                  fontWeight: 'bold',
                  letterSpacing: '0.05rem',
                  margin: '0 10px',
                  border: 'none',
                  position: 'relative',
                }}
              >
                <NavLink to="/portfolio" style={{ color: '#fff' }}>
                  <HomeOutlined style={{ marginRight: 8 }} />
                  About
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: 2,
                      backgroundColor: '#1890ff',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="/projects"
                style={{
                  fontWeight: 'bold',
                  letterSpacing: '0.05rem',
                  margin: '0 10px',
                  border: 'none',
                  position: 'relative',
                }}
              >
                <NavLink to="/projects" style={{ color: '#fff' }}>
                  <ProjectOutlined style={{ marginRight: 8 }} />
                  Projects
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: 2,
                      backgroundColor: '#1890ff',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </NavLink>
              </Menu.Item>
              <Menu.Item
                key="/contact"
                style={{
                  fontWeight: 'bold',
                  letterSpacing: '0.05rem',
                  margin: '0 10px',
                  border: 'none',
                  position: 'relative',
                }}
              >
                <NavLink to="/contact" style={{ color: '#fff' }}>
                  <MailOutlined style={{ marginRight: 8 }} />
                  Contact
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: 2,
                      backgroundColor: '#1890ff',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </NavLink>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content
          style={{
            marginTop: 64,
            background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
          }}
        >
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/portfolio" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Marcelo Villarreal ©{new Date().getFullYear()} Created with Ant Design
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
