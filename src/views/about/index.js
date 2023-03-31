import React from 'react'
import { Typography, Timeline, Row, Col, Divider, List, Space, Tag } from 'antd'

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
      description: ['Project version control', 'collaboration'],
    },
  ]

  return (
    <div>
      <Title level={2}>About Me</Title>
      <Text>
        Industrial Physics Engineer with a results-oriented focus and experience
        in full stack development and technology consulting. Expert in
        optimization techniques, data extraction, and machine learning models
        for data-driven analysis.
      </Text>
      <Divider />
      <Title level={3}>Employment History</Title>
      <Timeline>
        <Timeline.Item>
          <Title level={4}>Full Stack Developer, Dropin</Title>
          <Space>
            <Text strong>Jul, 2022 - Present</Text>
            <Text type="secondary">San Pedro Garza Garcia</Text>
          </Space>
          <List
            dataSource={job1Description}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Timeline.Item>
        <Timeline.Item>
          <Title level={4}>Full Stack Consultant, Abdotech</Title>
          <Space>
            <Text strong>Feb, 2022 - Present</Text>
            <Text type="secondary">San Pedro Garza Garcia</Text>
          </Space>
          <List
            dataSource={job2Description}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Timeline.Item>
      </Timeline>
      <Divider />
      <Title level={3}>Education</Title>
      <Row>
        <Col span={8}>
          <Text strong>
            Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)
          </Text>
          <Space>
            <Text strong>Jul, 2022 - Present</Text>
            <Text type="secondary">San Pedro Garza Garcia</Text>
          </Space>
        </Col>
      </Row>
      <Text>Engineering Physics, Cumulative average grade: 95/100</Text>
      <Divider />
      <Title level={3}>Key Tech Skills</Title>
      <List
        itemLayout="vertical"
        dataSource={techSkills}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={<Tag color="#f50">{item.name}</Tag>} />
            {item.description.map((point) => (
              <Space key={point}>
                <Text>{<Tag color="#5af">{point}</Tag>}</Text>
                <Divider type="vertical" />
              </Space>
            ))}
          </List.Item>
        )}
      />
    </div>
  )
}

export default About
