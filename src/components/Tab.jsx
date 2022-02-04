import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  height: 350px;
  position: relative;
  border-radius: 10px;
  border: 3px solid #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;  
  margin-bottom: 100px;
`;
const Tabs = styled.div`
  display: flex;
  `;
const STab = styled.div`
  width: 200px;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.active ? 'white' : 'gray'};
  background-color: ${props => props.active ? '#6741d9' : 'lightgray'};
  transition: all 0.2s ease-in-out;
`;

const Tab = () => {
  const [tabs, setTabs] = useState('ONE');

  return (
    <Container>
      <h1>Tab</h1>

      {/* MAP */}
      <Tabs>
        <STab 
          active={tabs === 'ONE'} 
          onClick={() => setTabs('ONE')}
        >
          Tab1
        </STab>
        <STab 
          active={tabs === 'TWO'} 
          onClick={() => setTabs('TWO')}
        >
          Tab2
        </STab>
        <STab 
          active={tabs === 'THREE'} 
          onClick={() => setTabs('THREE')}
        >
          Tab3
        </STab>
      </Tabs>

      <p>Tab menu {tabs}</p>
    </Container>
  );
};

export default Tab;
