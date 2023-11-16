//costumListModall.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomListModal } from '../components/CostumListModal/costumListModal';

describe('CustomListModal', () => {
  // Mock functions to pass as props
  const closeModal = jest.fn();
  const updateListItem = jest.fn();
  const createList = jest.fn();

  const renderComponent = (props) => {
    return render(
      <CustomListModal
        isModalOpen={true}
        closeModal={closeModal}
        newmark=""
        setNewmark={() => {}}
        newprice=""
        setNewprice={() => {}}
        newyear=""
        setNewyear={() => {}}
        newrating=""
        setNewrating={() => {}}
        selectedItemId={null}
        updateListItem={updateListItem}
        createList={createList}
        {...props}
      />
    );
  };

  it('renders modal content correctly', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = renderComponent();

    expect(getByLabelText('Mark:')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter mark...')).toBeInTheDocument();
    expect(getByLabelText('Price:')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter price...')).toBeInTheDocument();
    expect(getByLabelText('Year:')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter year...')).toBeInTheDocument();
    expect(getByLabelText('Rating:')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter rating...')).toBeInTheDocument();
    expect(getByText('Create List')).toBeInTheDocument(); // Assuming the default button is "Create List"
  });

  it('calls closeModal when the close button is clicked', () => {
    const { getByText } = renderComponent();

    fireEvent.click(getByText('×')); // Assuming the close button is a close icon (×)

    expect(closeModal).toHaveBeenCalled();
  });

  it('calls createList when "Create List" button is clicked', () => {
    const { getByText } = renderComponent();

    fireEvent.click(getByText('Create List'));

    expect(createList).toHaveBeenCalled();
  });

  it('calls updateListItem when "Update List" button is clicked', () => {
    const { getByText } = renderComponent({ selectedItemId: 1 });

    fireEvent.click(getByText('Update List'));

    expect(updateListItem).toHaveBeenCalled();
  });
});
