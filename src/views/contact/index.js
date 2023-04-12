import React from 'react';
import { Avatar, Typography, Row, Col, Divider } from 'antd';
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import './index.css';
import Particles from 'react-particles-js';

const { Title, Text } = Typography;

const Contact = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <Particles
        className="particles-background"
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#000',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000',
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: false,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="contact-container" style={{ padding: '2rem' }}>
        <Title level={2} style={{ marginBottom: '2rem' }}>
          Contact Me
        </Title>
        <Row justify="center" gutter={[32, 32]}>
          <Col style={{ textAlign: 'center' }}>
            <a href="mailto:marcelovillarrealx@outlook.com">
              <Avatar
                size={64}
                icon={<MailOutlined />}
                style={{ backgroundColor: '#FDB813' }}
              />
            </a>
            <Text style={{ display: 'block', marginTop: '1rem' }}>
              <a href="mailto:marcelovillarrealx@outlook.com">Email</a>
            </Text>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <a
              href="https://www.linkedin.com/in/marcelo-villarreal-64b605263"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar
                size={64}
                icon={<LinkedinOutlined />}
                style={{ backgroundColor: '#0A66C2' }}
              />
            </a>
            <Text style={{ display: 'block', marginTop: '1rem' }}>
              <a
                href="https://www.linkedin.com/in/marcelo-villarreal-64b605263"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Text>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <a
              href="https://github.com/ilgaribaldi"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar
                size={64}
                icon={<GithubOutlined />}
                style={{ backgroundColor: '#24292E' }}
              />
            </a>
            <Text style={{ display: 'block', marginTop: '1rem' }}>
              <a
                href="https://github.com/ilgaribaldi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Text>
          </Col>
        </Row>
        <Divider style={{ marginTop: '2rem', marginBottom: '2rem' }} />
        <Row justify="center" gutter={[32, 32]}>
          <Col>
            <EnvironmentOutlined
              style={{ marginRight: '4px', color: '#1890ff' }}
            />
            <Text strong>Location: </Text>
            <Text>SPGG, Mexico</Text>
          </Col>
          <Col>
            <PhoneOutlined style={{ marginRight: '4px', color: '#52c41a' }} />
            <Text strong>Phone: </Text>
            <Text>+52 (81) 8396-1930</Text>
          </Col>
          <Col>
            <ScheduleOutlined
              style={{ marginRight: '4px', color: '#faad14' }}
            />
            <Text strong>Availability: </Text>
            <Text>Varies</Text>
          </Col>
        </Row>
        <Divider style={{ marginTop: '2rem', marginBottom: '2rem' }} />
      </div>
    </div>
  );
};

export default Contact;
