import React from 'react';
import { Typography } from 'antd';
import 'antd/es/typography/style/css'; // TODO: load css & tree shaking

const { Title, Paragraph, Text } = Typography;

export default function App() {
  return (
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        <Text mark>Web console boilerplate</Text>
        {' '}
        is a boilerplate of web console project which
        {' '}
        <Text strong>saves your time on project initialization</Text>
        .
      </Paragraph>
    </Typography>
  );
}
