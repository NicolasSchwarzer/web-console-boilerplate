import React from 'react';
import { Typography } from 'antd';
import styles from './index.scss';

const { Title, Paragraph, Text } = Typography;

export default function App() {
  return (
    <Typography className={styles.container}>
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
