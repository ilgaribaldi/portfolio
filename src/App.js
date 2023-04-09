import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { BrowserRouter as Router, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import About from './views/about/index'
import Projects from './views/projects/index'
import Contact from './views/contact/index'

const { Header, Content, Footer } = Layout

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [selectedKeys, setSelectedKeys] = useState(['/portfolio'])

  const UpdateMenuItem = () => {
    const location = useLocation()

    useEffect(() => {
      setSelectedKeys([location.pathname])
    }, [location.pathname])

    return null
  }

  useEffect(() => {
    document.title = "Marcelo's Portfolio"
  }, [])

  return (
    <Router>
      <ScrollToTop/>
      <UpdateMenuItem />
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={selectedKeys}
              style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}
            >
              <Menu.Item
                key="/about"
                style={{ fontWeight: 'bold', letterSpacing: '0.05rem' }}
              >
                <NavLink to="/portfolio" end>About</NavLink>
              </Menu.Item>
              <Menu.Item
                key="/projects"
                style={{ fontWeight: 'bold', letterSpacing: '0.05rem' }}
              >
                <NavLink to="/portfolio/projects">Projects</NavLink>
              </Menu.Item>
              <Menu.Item
                key="/contact"
                style={{ fontWeight: 'bold', letterSpacing: '0.05rem' }}
              >
                <NavLink to="/portfolio/contact">Contact</NavLink>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content
          style={{
            padding: '0 20px',
            marginTop: 64,
            background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
          }}
        >
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/portfolio" element={<About />} />
              <Route path="/portfolio/projects" element={<Projects />} />
              <Route path="/portfolio/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Marcelo Villarreal ©{new Date().getFullYear()} Created with Ant Design
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
