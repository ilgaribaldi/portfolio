import React from 'react';
import { Typography, Row, Col, Space, Card } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Education = () => {
  return (
    <div>
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
    </div>
  );
};

export default Education;
