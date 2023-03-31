import React from 'react'
import { Avatar, Typography, Row, Col } from 'antd'
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'

const { Title, Text } = Typography

const Contact = () => {
  return (
    <div>
      <Title level={2}>Contact</Title>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={64}
            icon={<MailOutlined />}
            style={{ backgroundColor: '#FDB813' }}
          />
          <Text style={{ display: 'block', marginTop: '10px' }}>
            <a href="mailto:marcelovillarrealx@outlook.com">Email</a>
          </Text>
        </Col>
        <Col style={{ textAlign: 'center' }}>
          <Avatar
            size={64}
            icon={<LinkedinOutlined />}
            style={{ backgroundColor: '#0A66C2' }}
          />
          <Text style={{ display: 'block', marginTop: '10px' }}>
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
          <Avatar
            size={64}
            icon={<GithubOutlined />}
            style={{ backgroundColor: '#24292E' }}
          />
          <Text style={{ display: 'block', marginTop: '10px' }}>
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
    </div>
  )
}


export default Contact
