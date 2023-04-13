import React from 'react';
import { Avatar, Row, Col, Typography } from 'antd';
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import './index.css';

const { Text } = Typography;

const Links = () => {
  return (
    <Row justify="center" gutter={[32, 32]}>
      <Col style={{ textAlign: 'center' }}>
        <a href="mailto:marcelovillarrealx@outlook.com">
          <Avatar
            size={64}
            icon={<MailOutlined />}
            style={{ backgroundColor: '#FDB813', zIndex: 1 }}
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
            style={{ backgroundColor: '#0A66C2', zIndex: 1 }}
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
            style={{ backgroundColor: '#24292E', zIndex: 1 }}
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
  );
};

export default Links;
