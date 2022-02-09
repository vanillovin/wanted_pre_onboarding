import React, { useState } from 'react';
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
    height: 62px; 
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
    -webkit-transition: .3s; 
    transition: .3s; 
  } 
  .onoff-switch:after { 
    content: ""; 
    position: absolute; 
    width: 25px;
    height: 50px; 
    left: 7px; 
    top: 6px;
    background-color: #a191cf;
    -webkit-transition: all .3s linear; 
    transition: all .3s linear;
    border-radius: 50px 0 0 50px; 
    -webkit-transform: translateX(1px); 
  } 
  .onoff-switch:before { 
    z-index: 1;
    position: absolute; 
    content: ""; 
    width: 50px; 
    height: 50px; 
    left: 7px; 
    top: 6px; 
    background-color: #fff; 
    -webkit-transition: all .3s linear; 
    transition: all .3s linear; 
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
    -webkit-transform: translateX(84px); 
    -ms-transform: translateX(84px); 
    transform: translateX(84px); 
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
  const text = onToggle ? 'ON' : 'OFF';

  const onChange = () => setOnToggle(prev => !prev);
  
  return (
    <Container>
      <Title>Toggle</Title>
      <div className='toggle-container'>
        <label className="switch-button">
          <input type="checkbox" onClick={onChange} />
          <span className="onoff-switch"></span>
        </label>

        <p>Toggle Switch {text}</p>
      </div>
    </Container>
  );
};

export default Toggle;
