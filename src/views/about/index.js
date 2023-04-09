import React from 'react'
import {
  Typography,
  Timeline,
  Row,
  Col,
  Divider,
  List,
  Space,
  Tag,
  Collapse,
  Avatar,
} from 'antd'
import './index.css'
import profile from './profile.jpg'

const { Title, Text } = Typography

const About = () => {
  const job1Description = [
    'Implemented RESTful APIs that enabled the generation of delivery guides for packages, automating the logistics process.',
    'Implemented APIs using AWS Lambda functions to extract critical data such as package status and Google results analysis.',
    "Designed a route optimizer to reduce transport costs and transit time, implemented with Google's Distance Matrix API, and deployed through an AWS Lambda function.",
  ]

  const job2Description = [
    'Developed collections, queries, and mutations in databases such as MongoDB, providing advanced functionality to various platforms.',
    'Designed and implemented front end components using React.js. allowing for efficient and scalable deployment of web applications.',
  ]

  const techSkills = [
    {
      name: 'MERN Stack',
      description: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    },
    {
      name: 'Python',
      description: [
        'Data management',
        'Data analysis',
        'Data extraction',
        'Machine learning models',
        'Optimization algorithms',
      ],
    },
    {
      name: 'AWS',
      description: ['API implementation', 'API & Server monitoring'],
    },
    {
      name: 'Git',
      description: ['Project version control', 'Collaboration'],
    },
    {
      name: 'Docker',
      description: [
        'Environment simplification',
        'Isolated testing environments',
      ],
    },
    {
      name: 'GraphQL',
      description: ['Building APIs', 'Microservices'],
    },
  ]

  return (
    <div>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Title
          level={2}
          style={{
            marginBottom: '2rem',
            color: '#1890ff',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          About Me
        </Title>
        <Space direction="vertical" size={24}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={profile} size={64} style={{ marginRight: '1rem' }} />
            <div>
              <Title level={4} style={{ marginBottom: '0', marginTop: '-3px' }}>
                Marcelo Villarreal
              </Title>
              <Text type="secondary" style={{ marginTop: '0' }}>
                Full Stack Developer
              </Text>
            </div>
          </div>
          <Text style={{ lineHeight: '1.5' }}>
            Industrial Physics Engineer with a results-oriented focus and
            experience in full stack development and technology consulting.
            Expert in optimization techniques, data extraction, and machine
            learning models for data-driven analysis.
          </Text>
        </Space>
      </div>
      <Divider />
      <Title level={3}>Employment History</Title>
      <Timeline>
        <Timeline.Item>
          <Collapse defaultActiveKey={[]}>
            <Collapse.Panel
              header={
                <>
                  <Title level={4}>Full Stack Developer, Dropin</Title>
                  <Space>
                    <Text strong>Jul, 2022 - Present</Text>
                    <Text type="secondary">San Pedro Garza Garcia</Text>
                  </Space>
                </>
              }
              key="1"
            >
              <List
                size="small"
                className="custom-bullet-list"
                dataSource={job1Description}
                renderItem={(item) => (
                  <List.Item className="custom-bullet-item">{item}</List.Item>
                )}
              />
            </Collapse.Panel>
          </Collapse>
        </Timeline.Item>
        <Timeline.Item>
          <Collapse defaultActiveKey={[]}>
            <Collapse.Panel
              header={
                <>
                  <Title level={4}>Full Stack Consultant, Abdotech</Title>
                  <Space>
                    <Text strong>Feb, 2022 - Present</Text>
                    <Text type="secondary">San Pedro Garza Garcia</Text>
                  </Space>
                </>
              }
              key="1"
            >
              <List
                size="small"
                className="custom-bullet-list"
                dataSource={job2Description}
                renderItem={(item) => (
                  <List.Item className="custom-bullet-item">{item}</List.Item>
                )}
              />
            </Collapse.Panel>
          </Collapse>
        </Timeline.Item>
      </Timeline>
      <Divider />
      <Title level={3}>Education</Title>
      <Row>
        <Col>
          <Row>
            <Text strong>
              Instituto Tecnológico y de Estudios Superiores de Monterrey
              (ITESM)
            </Text>
          </Row>
          <Space>
            <Text strong>Aug, 2018 - Jun, 2023</Text>
            <Text type="secondary">San Pedro Garza Garcia</Text>
          </Space>
        </Col>
      </Row>
      <Text>Engineering Physics, Cumulative average grade: 95/100</Text>
      <Divider />
      <Title level={3}>Key Tech Skills</Title>
      <Row gutter={[16, 16]} wrap>
        {techSkills.map((item) => (
          <Col xs={24} sm={12} md={6} key={item.name}>
            <List.Item style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <List.Item.Meta
                title={<Tag color="#f50">{item.name}</Tag>}
                style={{ marginBottom: '-8px' }}
              />
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {item.description.map((point) => (
                  <div
                    key={point}
                    style={{ marginRight: '1px', marginBottom: '10px' }}
                    className="tag-wrapper"
                  >
                    <Tag color="#5af">{point}</Tag>
                  </div>
                ))}
              </div>
            </List.Item>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default About