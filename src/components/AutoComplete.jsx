import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 350px;
  border-radius: 10px;
  border: 3px solid #e9ecef;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  margin-bottom: 100px;
  padding-top: 65px;
`;
const Input = styled.input`
  /* 검색 중이면 밑에있는 테두리가 없어진다  */
  width: 770px;
  padding: 15px;
  outline: none;
  border: 0;
  /* border-radius: ${props => props.isSearching ? '15px 15px 0 0' : '15px' }; */
  /* transition: border-radius 0.1s ease-in-out; */
  border-radius: 15px;
  font-size: 1rem;
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
  font-size: 1rem;
  width: 774px;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 0 0 15px 15px;
  border: 1px solid lightgray;
  border-top: 0;
  transition: all 0.1s ease-in-out;
  overflow: auto;
  padding: 5px 0 5px 0;
`;
const Item = styled.li`
  cursor: pointer;
  user-select: none;
  padding: 5px 15px;
`

const keywordArr = ['고구마', 'apple', 'banana', 'baby', 'codestates', 'css', 'svelte',
  'donut', 'element', 'fruit', 'git', 'hello', 'react', 'vue', 'javascript', 'html'];

// 생각하는 것과 삽질하는 것은 다름.
// focus는 ref로 관리하는 것이 맞을것임. forwoard가 너무 번거로워서 id를!
// 지금 경우에는 ref에 focus를 하려는 용도가 아니다 input의 value를 가져오는 것. 
// controlled form => (onChange로 동기화)
// 함수 - 상태가 바뀔 때마다 다시 실행됨
const AutoComplete = () => {
  const [searchInput, setSearchInput] = useState('');
  const searchResult = keywordArr.filter(keyword => keyword.includes(searchInput));
  
  const isSearching = searchInput !== '' && searchResult.length > 0;

  return (
    <Container>
      <h1>Autocomplete</h1>

      <div
        style={{
          display: 'flex', width: '100%',
          border: '1px solid lightgray',
          borderRadius: isSearching ?  '15px 15px 0 0' : '15px'
        }}
        >
        <Input
          isSearching={isSearching}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <Btn onClick={() => setSearchInput('')}>x</Btn>
      </div>

      {isSearching &&
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
