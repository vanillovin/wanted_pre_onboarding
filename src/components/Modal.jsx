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
  `;
const SModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => props.active ? 1 : 0};
  z-index: ${props => props.active ? 10 : -5};
`;
const ModalBtn = styled.button`
  cursor: pointer;
  border: 0;
  color: white;
  border-radius: 40px;
  background-color: #6741d9;
  padding: 20px 25px;
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
      <h1>Modal</h1>
      {!isModalOpen &&
        <ModalBtn onClick={handleOpenModal}>Open Modal</ModalBtn>
      }

      
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
