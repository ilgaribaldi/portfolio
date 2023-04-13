import React from 'react';
import { Avatar, Typography } from 'antd';
import './index.css';
import profile from './profile.jpg';

const { Title, Text } = Typography;

const Profile = () => {
  return (
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
        className="avatar-hover"
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
        Industrial Physics Engineer with a results-oriented focus and experience
        in full stack development and technology consulting. Expert in
        optimization techniques, data extraction, and machine learning models
        for data-driven analysis.
      </Text>
    </div>
  );
};

export default Profile;
