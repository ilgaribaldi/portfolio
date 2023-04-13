import React from 'react';
import { Menu, Layout } from 'antd';
import {
  NavLink,
} from 'react-router-dom';
import { HomeOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';

const { Header } = Layout;

const MyHeader = () => {
  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 2,
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
  );
};

export default MyHeader;
