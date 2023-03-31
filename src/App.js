import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import About from './views/about/index'
import Projects from './views/projects/index'
import Contact from './views/contact/index'

const { Header, Content, Footer } = Layout

function App() {
  const [activeTab, setActiveTab] = useState('1')

  useEffect(() => {
    document.title = "Marcelo's Portfolio"
  }, [])

  const handleMenuClick = (e) => {
    setActiveTab(e.key)
  }

  const renderContent = () => {
    switch (activeTab) {
      case '1':
        return <About />
      case '2':
        return <Projects />
      case '3':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <Layout>
      ;<Header
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
      defaultSelectedKeys={['1']}
      onClick={handleMenuClick}
      style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}
    >
      <Menu.Item
        key="1"
        style={{ fontWeight: 'bold', letterSpacing: '0.05rem' }}
      >
        About
      </Menu.Item>
      <Menu.Item
        key="2"
        style={{ fontWeight: 'bold', letterSpacing: '0.05rem' }}
      >
        Projects
      </Menu.Item>
      <Menu.Item
        key="3"
        style={{ fontWeight: 'bold', letterSpacing: '0.05rem' }}
      >
        Contact
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
          {renderContent()}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Marcelo Villarreal ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  )
}

export default App
