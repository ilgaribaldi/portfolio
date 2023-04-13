import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import './index.css';

const { Text } = Typography;

const Info = () => {
  return (
    <div style={{ zIndex: 2, backgroundColor: 'white' }}>
      <Divider style={{ marginBottom: '2rem', marginTop: "0px" }} />
      <Row justify="center" gutter={[32, 32]}>
        <Col>
          <EnvironmentOutlined
            style={{ marginRight: '4px', color: '#1890ff' }}
          />
          <Text strong>Location: </Text>
          <Text>SPGG, Mexico</Text>
        </Col>
        <Col>
          <PhoneOutlined style={{ marginRight: '4px', color: '#52c41a' }} />
          <Text strong>Phone: </Text>
          <Text>+52 (81) 8396-1930</Text>
        </Col>
        <Col>
          <ScheduleOutlined style={{ marginRight: '4px', color: '#faad14' }} />
          <Text strong>Availability: </Text>
          <Text>Varies</Text>
        </Col>
      </Row>
      <Divider style={{ marginTop: '2rem', marginBottom: '0px' }} />
    </div>
  );
};

export default Info;
