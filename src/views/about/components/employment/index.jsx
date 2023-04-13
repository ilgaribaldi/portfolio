import React from 'react';
import {
  Timeline,
  List,
  Space,
  Collapse,
  Typography,
} from 'antd';
import './index.css';
import info from './info.json'


const { Title, Text } = Typography;
const { job1Description, job2Description} = info;

const Employment = () => {
  return (
    <div>
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
    </div>
  );
};

export default Employment;
