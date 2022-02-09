import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  height: 350px;
  position: relative;
  border-radius: 10px;
  padding: 10px;  
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 20px lightgray;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  margin-right: 10px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 50px;
  align-items: center;
`;
const Tabs = styled.div`
  width: 100%;
  display: flex;
`;
const STab = styled.div`
  font-weight: bold;
  &:first-child {
    width: 5%;
    cursor: default;
    color: black;
  }
  width: 30%;
  padding: 15px;
  cursor: pointer;
  color: ${props => props.active ? 'white' : 'gray'};
  background-color: ${props => props.active ? '#6741d9' : 'lightgray'};
  transition: all 0.2s ease-in-out;
  `;
const Text = styled.p`
  font-size: 1.2rem;
  margin-top: 80px;
`;

const Tab = () => {
  const [tab, setTab] = useState('ONE');

  return (
    <Container>
      <Top>
        <Title>Tab</Title>
        <Tabs>
          <STab>:)</STab>
          {['ONE', 'TWO', 'THREE'].map((item, i) => (
            <STab
              key={item}  
              active={tab === item} 
              onClick={() => setTab(item)}
            >Tab{i+1}</STab>
          ))}

          {/* <STab
            active={tab === 'ONE'}
            onClick={() => setTab('ONE')}
          >Tab1</STab> */}
        </Tabs>
      </Top>

      <Text>Tab menu {tab}</Text>
    </Container>
  );
};

export default Tab;
