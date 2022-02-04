import React, { useState, useEffect } from 'react';
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
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  margin-bottom: 100px;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  padding: 15px;
  outline: none;
  border: 1px solid lightgray;
  /* z-index: 1; */
`;
const Btn = styled.button`
  position: absolute;
  right: 20px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 15px;
`;
const Result = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 0 0 15px 15px;
  border: 1px solid lightgray;
`;
const Item = styled.li`
  user-select: none;
  padding: 3px 10px;
`

const keywordArr = ['고구마', 'apple', 'banana', 'baby', 'codestates', 'donut', 'element', 'fruit', 'git', 'hello'];

// 함수 - 상태가 바뀔 때마다 다시 실행됨
const AutoComplete = () => {
  const [searchInput, setSearchInput] = useState('');
  const searchResult = keywordArr.filter(keyword => keyword.includes(searchInput));
  
  return (
    <Container>
      <h1>Autocomplete</h1>

      <div style={{ display: 'flex', width: '100%' }}>
        <Input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          />
        <Btn onClick={() => setSearchInput('')}>x</Btn>
      </div>

      {searchInput &&
        <Result>
          {searchResult?.map((s, i) =>
            <Item key={i} onClick={() => setSearchInput(s)}>{s}</Item>
          )}
        </Result>
      }

      {/* <label>keyword</label>
      <input type='text' list='kword-options' />
      <datalist id='kword-options'>
        {keywordArr.map(kword => (
          <option value={kword} />
        ))}
      </datalist> */}
    </Container>
  );
};

export default AutoComplete;
