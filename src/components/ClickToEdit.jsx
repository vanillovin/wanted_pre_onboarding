import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 800px;
  height: 350px;
  box-shadow: 2px 2px 20px lightgray;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  position: absolute;
  top: 5px;
  left: 5px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  label {
    height: 50px;
  }
  input {
    border: 1px solid black;
    padding: 5px 10px;
    margin: 0 0 10px 10px;
    &:focus {
      border: #845ef7;
      padding: 8px 13px;
      outline: 1px solid #845ef7;
    }
  }
`;


const ClickToEdit = () => {
  // react 에서는 ref를 안 쓰는 것이 좋음.
  const [inputs, setInputs] = useState({
    nameInpu: '',
    ageInput: ''
  });
  const {nameInput, ageInput} = inputs;
  // name, age, display
  const [displays, setDisplays] = useState({
    name: '',
    age: ''
  });
  const { name, age } = displays;
  

  // input에 입력하는 동안에는 화면에 표시되는 name, age가 바뀌지 않고
  // onBlur일 경우에만 value(ref or state)가 반영이 된다.

  const handleInputChange = ({ target: { name, value } }) => {
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleBlur = () => {
    // 이전상태에서추가삭제
    setDisplays({
      name: nameInput,
      age: ageInput
    })
  };
 
  return (
    <Container>
      <Title>ClickToEdit</Title>  
      <InputContainer>
        <label>
          이름
          <input
            type='text'
            name='nameInput'
            value={nameInput}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </label>

        <label>
          나이
          <input
            min={0}
            type='number'
            name='ageInput'
            value={ageInput}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </label>
      </InputContainer>
      <p>이름 {name} 나이 {age}</p>
    
    </Container>
  );
};

export default ClickToEdit;
