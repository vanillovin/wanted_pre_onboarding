import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  height: 350px;
  border-radius: 10px;
  border: 3px solid #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 100px;
`;
const Input = styled.input`
  border: 0;
  outline: none;
  height: 100%;
  margin-left: 5px;
`;
const TagContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 10px;
  height: 45px;
  border-radius: 10px;
  /* 자기안에focus된게있으면 */
  &:focus-within {
    border : 1px solid purple;
  }
  transition: all 0.1s ease-in-out;
`;
const Item = styled.div`
  height: 100%;
  padding: 0 14px;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: #6741d9;
  margin-right: 7px;
`;
const Form = styled.form`
  height: 100%;
`;
const DeleteBtn = styled.button`
  cursor: pointer;
  border: 0;
  width: 20px;
  height: 20px; 
  border-radius: 50%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;


const Tag = () => {
  const [tagList, setTagList] = useState([
    { id: Date.now(), text: 'hello' }
  ]);

  const [text, setText] = useState('');

  const handleCreateTag = (e) => {
    e.preventDefault();
    text.trim().length > 0 && setTagList(prev => ([
      ...prev,
      { id: Date.now(), text }
    ]));
    setText('');
  };

  const handleDeleteTag = (id) => {
    setTagList(prev => prev.filter(tag => tag.id !== id))
  };

  return (
    <Container>
      <h1>Tag</h1>
      <TagContainer>
      {tagList.map(tag => (
        <Item key={tag.id}>
          <p>{tag.text}</p>
          <DeleteBtn onClick={() => handleDeleteTag(tag.id)}>X</DeleteBtn>
        </Item>
      ))}
      <Form onSubmit={handleCreateTag}>
        <Input value={text} onChange={(e) => setText(e.target.value)} placeholder='Press enter to add tags' />
      </Form>
      </TagContainer>
    </Container>
  );
};

export default Tag;
