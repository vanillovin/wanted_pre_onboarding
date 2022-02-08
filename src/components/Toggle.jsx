import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 100px;
  box-shadow: 2px 2px 20px lightgray;
  .toggle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
  .switch-button { 
    position: relative; 
    display: inline-block; 
    width: 148px; 
    height: 60px; 
  } 
  .switch-button input { 
    opacity: 0; 
    width: 0; 
    height: 0; 
  }
  .onoff-switch {
    position: absolute; 
    cursor: pointer; 
    top: 0; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    border-radius: 40px; 
    background-color: #ccc; 
    /* box-shadow: inset 1px 5px 1px #999; */
    -webkit-transition: .4s; 
    transition: .4s; 
  } 
  .onoff-switch:after { 
    z-index: 1;
    content: ""; 
    position: absolute; 
    width: 25px;
    height: 50px; 
    left: 7px; 
    top: 5px;
    background-color: #7662b4;
    -webkit-transition: .5s; 
    transition: .5s;
    border-radius: 40px 0 0 40px; 
  } 
  .onoff-switch:before { 
    z-index: 2;
    position: absolute; 
    content: ""; 
    width: 50px; 
    height: 50px; 
    left: 7px; 
    top: 5px; 
    background-color: #fff; 
    -webkit-transition: .5s; 
    transition: .5s; 
    border-radius: 50%; 
  } 
  .switch-button input:checked + .onoff-switch { 
    /* background-color: #845ef7;
    box-shadow: inset 2px 5px 1px #6741d9;  */
  }
  .switch-button input:checked + .onoff-switch:after { 
    width: 110px;
  }
  .switch-button input:checked + .onoff-switch:before { 
    -webkit-transform: translateX(85px); 
    -ms-transform: translateX(85px); 
    transform: translateX(85px); 
  }
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  position: absolute;
  top: 5px;
  left: 5px;
`;

const Toggle = () => {
  const [onToggle, setOnToggle] = useState(false);

  const onChange = () => setOnToggle(prev => !prev);
  
  return (
    <Container>
      <Title>Toggle</Title>
      <div className='toggle-container'>
        <label className="switch-button">
          <input type="checkbox" onClick={onChange} />
          <span className="onoff-switch"></span>
        </label>

        <p>Toggle Switch {!onToggle ? 'OFF' : 'ON'}</p>
      </div>
    </Container>
  );
};

export default Toggle;
