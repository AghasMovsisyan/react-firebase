//customListModalStyled.js
import styled from "styled-components";


export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  text-align: left; 
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#ccc')}; /* Change border color to red when hasError is true */
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  
`;

export const CreateUpdateButton = styled.button`
  background-color: #0074cc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  float: left;

  &:hover {
    background-color: #005ba6;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
  text-align: left; /* Align the error message to the left */
`;
