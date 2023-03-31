import React from 'react'
import { Card, Typography, Row, Col, Image } from 'antd'
import optimizer from './optimizer.gif'
import looking from './looking.gif' // Add the import for the second project gif

const { Title, Text } = Typography

const Projects = () => {
  return (
    <div>
      <Title level={2}>Projects</Title>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Route Optimizer" style={{ marginBottom: '1rem' }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Image
                  src={optimizer}
                  alt="Route Optimizer GIF"
                  width={500}
                  style={{
                    borderRadius: '0.5rem',
                    border: '3px solid #333',
                    padding: '0.5rem',
                  }}
                />
              </Col>
              <Col span={12}>
                <Title level={4}>Overview</Title>
                <Text>
                  A route optimizer designed in Python using Google's OR-Tools
                  library.
                </Text>
                <Title level={4}>Key Features</Title>
                <Text>
                  - Can handle capacitated vehicles
                  <br />
                  - Max distance and amount of routes can be adjusted
                  <br />- Google's Distance Matrix API optionality
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Direct Gaze Detection" style={{ marginBottom: '1rem' }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Image
                  src={looking}
                  alt="Direct Gaze Detection GIF"
                  width={500}
                  style={{
                    borderRadius: '0.5rem',
                    border: '3px solid #333',
                  }}
                />
              </Col>
              <Col span={12}>
                <Title level={4}>Overview</Title>
                <Text>
                  A machine learning model for computer vision designed in
                  TensorFlow and Python to detect when a person is looking at
                  the camera directly.
                </Text>
                <Title level={4}>Key Features</Title>
                <Text>
                  - Uses deep learning techniques to accurately detect direct
                  gaze
                  <br />
                  - Built using TensorFlow and Python
                  <br />- Can be integrated into various computer vision
                  applications
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
