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
  .toggle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    box-shadow: inset 1px 5px 1px #999; 
    -webkit-transition: .4s; 
    transition: .4s; 
  } 
  .onoff-switch:before { 
    position: absolute; 
    content: ""; 
    width: 50px; 
    height: 50px; 
    left: 4px; 
    bottom: 4px; 
    background-color: #fff; 
    -webkit-transition: .5s; 
    transition: .4s; 
    border-radius: 50%; 
  } 
  .switch-button input:checked + .onoff-switch { 
    background-color: #845ef7; 
    box-shadow: inset 2px 5px 1px #6741d9; 
  } 
  .switch-button input:checked + .onoff-switch:before { 
    -webkit-transform: translateX(90px); 
    -ms-transform: translateX(90px); 
    transform: translateX(90px); 
  }
`;

const Toggle = () => {
  const [onToggle, setOnToggle] = useState(false);

  const onChange = () => setOnToggle(!onToggle);
  
  return (
    <Container>
      <h1>Toggle</h1>
      <div className='toggle-container'>
        <label className="switch-button"> 
          <input type="checkbox" value={onToggle} onChange={onChange} />
          <span className="onoff-switch"></span>
        </label>

        <p>Toggle Switch {!onToggle ? 'OFF' : 'ON'}</p>
      </div>
    </Container>
  );
};

export default Toggle;
