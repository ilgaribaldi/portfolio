import React from 'react';
import { Card, Typography, Row, Col, Image, List } from 'antd';
import optimizer from './optimizer.gif';
import './index.css';

const { Title, Text } = Typography;

const Project1 = () => {
  return (
    <Col xs={24} md={24}>
      <Card title="Route Optimizer" style={{ marginBottom: '1rem', backgroundColor: "white"}}>
        <Row gutter={[16, 16]}>
          <Col
            xs={24}
            md={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={optimizer}
              alt="Route Optimizer GIF"
              width={window.innerWidth <= 576 ? '100%' : '75%'}
              style={{
                borderRadius: '0.5rem',
                border: '1px solid #333',
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Title
              level={4}
              style={{
                marginBottom: '24px',
                fontWeight: 'bold',
                color: '#1890ff',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textAlign: 'center',
                borderBottom: '2px solid #1890ff',
                paddingBottom: '8px',
              }}
            >
              Overview
            </Title>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                margin: '0 auto 32px auto',
              }}
            >
              <span
                style={{
                  color: '#333',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginRight: '32px',
                }}
              >
                A route optimizer designed in Python using Google's OR-Tools
                library.
              </span>
            </div>
            <Title
              level={4}
              style={{
                marginBottom: '32px',
                fontWeight: 'bold',
                color: '#1890ff',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textAlign: 'center',
              }}
            >
              Key Features
            </Title>
            <Text style={{ textAlign: 'left' }}>
              <List
                size="small"
                className="custom-bullet-list"
                dataSource={[
                  'Can handle capacitated vehicles',
                  'Max distance and amount of routes can be adjusted',
                  "Google's Distance Matrix API optionality",
                ]}
                renderItem={(item) => (
                  <List.Item
                    className="custom-bullet-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '12px',
                    }}
                  >
                    <span
                      style={{
                        flex: '0 0 16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#1890ff',
                        marginRight: '12px',
                        visibility: 'hidden',
                      }}
                    ></span>
                    <span
                      style={{ flex: '1', color: '#333', fontSize: '16px' }}
                    >
                      {item}
                    </span>
                  </List.Item>
                )}
              />
            </Text>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default Project1