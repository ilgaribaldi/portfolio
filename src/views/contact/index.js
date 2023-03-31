import React from 'react'
import { Avatar, Typography, Row, Col, Divider } from 'antd'
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'
import './index.css'

const { Title, Text } = Typography

const Contact = () => {
  return (
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
          <Text strong>Location: </Text>
          <Text>SPGG, Mexico</Text>
        </Col>
        <Col>
          <Text strong>Phone: </Text>
          <Text>+52 (81) 8396-1930</Text>
        </Col>
        <Col>
          <Text strong>Availability: </Text>
          <Text>Varies</Text>
        </Col>
      </Row>
      <Divider style={{ marginTop: '2rem', marginBottom: '2rem' }} />
    </div>
  )
}

export default Contact

