import React from 'react';
import { Row, Col, List, Tag, Card } from 'antd';
import './index.css';
import { Divider } from 'antd';
import info from './info.json';
import { BackgroundSeaAnemone } from '../../../../components/particles';


const { techSkills } = info;

const KeyTechSkills = () => {
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center", position: "relative"}}>
        <div class="container">
          <p class="text"> My tech stack. </p>
        </div>
      </div>
      <Divider />
      <Row gutter={[16, 16]} wrap>
        {techSkills.map((item, index) => (
          <Col xs={24} sm={12} md={6} key={item.name}>
            <Card
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                width: '100%',
                height: '100%',
                transition: 'transform 0.2s ease-out',
              }}
              hoverable
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <BackgroundSeaAnemone id={String(index)}/>
              <List.Item style={{ listStyleType: 'none', paddingLeft: 0, zIndex:1 }}>
                <List.Item.Meta
                  title={<Tag color="#f50">{item.name}</Tag>}
                  style={{ marginBottom: '-0px', marginTop: '-18px',  zIndex:1 }}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {item.description.map((point) => (
                    <div
                      key={point}
                      style={{ marginRight: '1px', marginBottom: '10px',  zIndex:1 }}
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

export default KeyTechSkills;
