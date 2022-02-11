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
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  input {
    width: 150px;
    height: 25px;
    border: 1px solid black;
    margin-left: 10px;
    text-align: center;
    padding: 5px;
    &:focus {
      outline: 2px solid #845ef7;
    }
  }
  & > div:last-child { 
    border: 1px solid lightgray;
    width: 150px;
    height: 25px;
    margin-left: 10px;
    text-align: center;
  }

`;

const Input = ({ name, defaultValue, type, setDisplays }) => {
  const [input, setInput] = useState(defaultValue);
  const [isEditable, setIsEditable] = useState(false);

  const handleSelect = e => e.target.select();

  const handleClick = () => setIsEditable(true);

  const handleBlur = () => {
    setIsEditable(false);
    setDisplays(input);
  };

  return (
    <Flex>
      <div>{name}</div>
      {isEditable ? (
        <input
          onClick={handleSelect}
          type={type}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={handleBlur}
        />
      ) : (
        <div onClick={handleClick}>
          {input}
        </div>
      )}
    </Flex>
  )
};

const ClickToEdit = () => {
  const [displayName, setDisplayName] = useState('');
  const [displayAge, setDisplayAge] = useState('');
  return (
    <Container>
      <Title>ClickToEdit</Title>  
      <InputContainer>
        <Input name='이름' defaultValue='원티드' type='text' setDisplays={setDisplayName} />
        <Input name='나이' defaultValue={10} type='number' setDisplays={setDisplayAge} />
      </InputContainer>
      <div>이름 {displayName} 나이 {displayAge}</div>
    </Container>
  );
};

export default ClickToEdit;
