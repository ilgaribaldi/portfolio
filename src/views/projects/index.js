import React from 'react'
import { Card, Typography, Row, Col, Image, List } from 'antd'
import optimizer from './optimizer.gif'
import looking from './looking.gif'
import './index.css'

const { Title, Text } = Typography

const Projects = () => {
  return (
    <div>
      <Title level={2}>Projects</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={24}>
          <Card title="Route Optimizer" style={{ marginBottom: '1rem' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} style={{display: "flex"}}>
                <Image
                  src={optimizer}
                  alt="Route Optimizer GIF"
                  width={window.innerWidth <= 576 ? 265 : 500}
                  className="project-gif"
                  style={{
                    borderRadius: '0.5rem',
                    border: '1px solid #333',
                  }}
                />
              </Col>
              <Col xs={24} md={12}>
                <Title level={4}>Overview</Title>
                <Text>
                  A route optimizer designed in Python using Google's OR-Tools
                  library.
                </Text>
                <Title level={4}>Key Features</Title>
                <Text>
                  <List
                    size="small"
                    className="custom-bullet-list"
                    dataSource={[
                      'Can handle capacitated vehicles',
                      'Max distance and amount of routes can be adjusted',
                      "Google's Distance Matrix API optionality",
                    ]}
                    renderItem={(item) => (
                      <List.Item className="custom-bullet-item">
                        {item}
                      </List.Item>
                    )}
                  />
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={24}>
          <Card title="Direct Gaze Detection" style={{ marginBottom: '1rem' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12} style={{display: "flex"}}>
                <Image
                  src={looking}
                  alt="Direct Gaze Detection GIF"
                  width={window.innerWidth <= 576 ? 265 : 500}
                  style={{
                    borderRadius: '0.5rem',
                    border: '1px solid #333',
                  }}
                />
              </Col>
              <Col xs={24} md={12}>
                <Title level={4}>Overview</Title>
                <Text>
                  A machine learning model for computer vision designed in
                  TensorFlow and Python to detect when a person is looking at
                  the camera directly.
                </Text>
                <Title level={4}>Key Features</Title>
                <Text>
                  <List
                    size="small"
                    className="custom-bullet-list"
                    dataSource={[
                      'Uses deep learning techniques to accurately detect direct gaze',
                      'Built using TensorFlow and Python',
                      'Can be integrated into various computer vision applications',
                    ]}
                    renderItem={(item) => (
                      <List.Item className="custom-bullet-item">
                        {item}
                      </List.Item>
                    )}
                  />
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Projects
