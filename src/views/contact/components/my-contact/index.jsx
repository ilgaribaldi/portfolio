import React from 'react';
import { Avatar, Row, Col, Divider, Typography } from 'antd';
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import './index.css';

const { Title, Text } = Typography;

const MyContact = () => {
  return (
    <div style={{ padding: '2rem', position: 'relative', zIndex: 1 }}>
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
      <div style={{ zIndex: 2, backgroundColor: 'white' }}>
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

export default MyContact