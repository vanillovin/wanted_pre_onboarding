import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 100px;
  box-shadow: 2px 2px 20px lightgray;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  position: absolute;
  top: 5px;
  left: 5px;
`;
const Form = styled.form`
  height: 45px;
  `;
const Input = styled.input`
  width: 200px;
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
  border-radius: 10px;
  /* 자기안에focus된게있으면 */
  &:focus-within {
    border : 1px solid #5f3dc4;
  }
  transition: all 0.1s ease-in-out;
  flex-wrap: wrap;
  max-height: 246px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 15px; /*스크롤바의 너비*/
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cdc2ee; /*스크롤바의 색상*/
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 10px;
    /* border-top-right-radius: 9px;
    border-bottom-right-radius: 9px; */
  }
  &::-webkit-scrollbar-track {
    border-radius: 0 7px 7px 0;
    /* background-color: transparent; // 스크롤바 트랙 색상 */
  }
`;
const Item = styled.div`
  height: 40px;
  padding: 0 14px;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #6741d9;
  margin: 0 6px 4px 0;
  box-shadow: 2px 2px 5px lightgray;
`;
const DeleteBtn = styled.button`
  font-size: 11px;
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
    { id: Date.now(), text: 'hello' },
  ]);

  const [tagInput, setTagInput] = useState('');

  const handleCreateTag = (e) => {
    e.preventDefault();
    tagInput.trim().length > 0 && setTagList(prev => ([
      ...prev,
      { id: Date.now(), text: tagInput }
    ]));
    setTagInput('');
  };

  const handleDeleteTag = (id) => setTagList(prev => prev.filter(tag => tag.id !== id));
  
  return (
    <Container>
      <Title>Tag</Title>
      <TagContainer>
        {tagList.map(tag => (
          <Item key={tag.id}>
            <p>{tag.text}</p>
            <DeleteBtn onClick={() => handleDeleteTag(tag.id)}>X</DeleteBtn>
          </Item>
        ))}
        <Form onSubmit={handleCreateTag}>
          <Input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder='Press enter to add tags'
          />
        </Form>
      </TagContainer>

    </Container>
  );
};

export default Tag;
