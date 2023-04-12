import React from 'react';
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
  Card
} from 'antd';
import './index.css';
import profile from './profile.jpg';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const About = () => {
  const job1Description = [
    'Implemented RESTful APIs that enabled the generation of delivery guides for packages, automating the logistics process.',
    'Implemented APIs using AWS Lambda functions to extract critical data such as package status and Google results analysis.',
    "Designed a route optimizer to reduce transport costs and transit time, implemented with Google's Distance Matrix API, and deployed through an AWS Lambda function.",
  ];

  const job2Description = [
    'Developed collections, queries, and mutations in databases such as MongoDB, providing advanced functionality to various platforms.',
    'Designed and implemented front end components using React.js. allowing for efficient and scalable deployment of web applications.',
  ];

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
  ];

  return (
    <div>
      <div
        style={{
          backgroundColor: '#F0F2F5',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          src={profile}
          size={128}
          style={{
            marginBottom: '1rem',
            border: '4px solid #1890ff',
          }}
        />
        <Title
          level={2}
          style={{
            color: '#1890ff',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textAlign: 'center',
          }}
        >
          Marcelo Villarreal
        </Title>
        <Text
          type="secondary"
          style={{
            marginBottom: '2rem',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          Full Stack Developer
        </Text>
        <Text
          style={{
            lineHeight: '1.5',
            textAlign: 'center',
            fontSize: '1rem',
          }}
        >
          Industrial Physics Engineer with a results-oriented focus and
          experience in full stack development and technology consulting. Expert
          in optimization techniques, data extraction, and machine learning
          models for data-driven analysis.
        </Text>
      </div>
      <Divider />
      <Title level={3} style={{ marginBottom: '22px' }}>
        Employment History
      </Title>
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
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            hoverable
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Row>
              <Col span={24}>
                <Text strong style={{ fontSize: '1.2em' }}>
                  Instituto Tecnológico y de Estudios Superiores de Monterrey
                  (ITESM)
                </Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginRight: '10px' }}>
                <Space>
                  <ClockCircleOutlined
                    style={{ color: 'rgba(0, 0, 0, 0.45)' }}
                  />
                  <Text strong>Aug, 2018 - Jun, 2023</Text>
                </Space>
              </Col>
              <Col>
                <Space>
                  <Text type="secondary">San Pedro Garza Garcia</Text>
                </Space>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>
                  Engineering Physics, Cumulative average grade:{' '}
                  <Text strong>95/100</Text>
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Divider />
      <Title level={3}>Key Tech Skills</Title>
      <Row gutter={[16, 16]} wrap>
        {techSkills.map((item) => (
          <Col xs={24} sm={12} md={6} key={item.name}>
            <Card
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%',
                height: '100%',
                transition: 'transform 0.3s ease-out',
              }}
              hoverable
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
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
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default About;
