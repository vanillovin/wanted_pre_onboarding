import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 800px;
  height: 350px;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 100px;
  box-shadow: 2px 2px 20px lightgray;
`;
const SModal = styled.div`
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${props => props.active ? 1 : 0};
  z-index: ${props => props.active ? 10 : -5};
  transition: all 0.2s ease-in-out;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  position: absolute;
  top: 5px;
  left: 5px;
`;
const ModalBtn = styled.button`
  cursor: pointer;
  border: 0;
  color: white;
  border-radius: 40px;
  background-color: #6741d9;
  padding: 20px 25px;
  &:hover {
    background-color: #9775fa;
  }
  transition: background-color 0.2s ease-in-out;
`;
const ModalMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

const Modal = () => {
  const [isModalOpen , setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Title>Modal</Title>
      {!isModalOpen &&
        <ModalBtn onClick={handleOpenModal}>Open Modal</ModalBtn>}

      <SModal active={isModalOpen}>
        <ModalMsg>
          <button
            style={{
              backgroundColor: 'transparent',
              border: 0,
              cursor: 'pointer',
              padding: 10
            }}
            onClick={handleCloseModal}
          >x</button>
          <h2>HELLO CODESTATES!</h2>
        </ModalMsg>
      </SModal>
    </Container>
  );
};

export default Modal;
