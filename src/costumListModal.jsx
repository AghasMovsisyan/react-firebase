import React from 'react';
import { CloseButton, CreateUpdateButton, InputContainer, InputField, InputLabel, Modal, ModalContent } from './costumListModalStyled';


export const CustomListModal = ({
    isModalOpen,
    closeModal,
    newmark,
    setNewmark,
    newprice,
    setNewprice,
    newyear,
    setNewyear,
    newrating,
    setNewrating,
    selectedItemId,
    updateListItem,
    createList,
  }) => {
    return (
      isModalOpen && (  
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <InputContainer>
              <InputLabel htmlFor="mark-input">Mark:</InputLabel>
              <InputField
                id="mark-input"
                placeholder="Enter mark..."
                value={newmark}
                onChange={(event) => setNewmark(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="price-input">Price:</InputLabel>
              <InputField
                id="price-input"
                placeholder="Enter price..."
                value={newprice}
                onChange={(event) => setNewprice(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="year-input">Year:</InputLabel>
              <InputField
                id="year-input"
                placeholder="Enter year..."
                value={newyear}
                onChange={(event) => setNewyear(event.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel htmlFor="rating-input">Rating:</InputLabel>
              <InputField
                id="rating-input"
                placeholder="Enter rating..."
                value={newrating}
                onChange={(event) => setNewrating(event.target.value)}
              />
            </InputContainer>
            {selectedItemId ? (
              <CreateUpdateButton onClick={updateListItem}>Update List</CreateUpdateButton>
            ) : (
              <CreateUpdateButton onClick={createList}>Create List</CreateUpdateButton>
            )}
          </ModalContent>
        </Modal>
      )
    );
  };
  