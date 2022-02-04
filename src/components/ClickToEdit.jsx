import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
  border: 3px solid #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 800px;
  height: 350px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: 1px solid black;
    padding: 5px 10px;
    margin: 0 0 10px 10px;
    &:focus {
      padding: 7px 12px;
      outline: 1px solid #845ef7;
    }
  }
`;


const ClickToEdit = () => {
  // react 에서는 ref릉 안 쓰는 것이 좋음.
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  // name, age, display
  const [displays, setDisplays] = useState({
    name: '',
    age: ''
  });
  const { name, age } = displays;
  

  // input에 입력하는 동안에는 화면에 표시되는 name, age가 바뀌지 않고
  // onBlur일 경우에만 value(ref or state)가 반영이 된다.

  const handleBlur = () => {
    // 이전상태에서추가삭제
    setDisplays({
      name: nameInput,
      age: ageInput
    })
  };
 
  return (
    <Container>
      <h1>ClickToEdit</h1>  
      <InputContainer>
        <label>
          이름
          <input
            type='text'
            name='name'
            onChange={(e) => setNameInput(e.target.value)}
            onBlur={handleBlur}
          />
        </label>

        <label>
          나이
          <input
            type='number'
            name='age'
            onChange={(e) => setAgeInput(e.target.value)}
            onBlur={handleBlur}
          />
        </label>
      </InputContainer>
      <p>이름 : {name} / 나이 : {age}</p>
    
    </Container>
  );
};

export default ClickToEdit;
