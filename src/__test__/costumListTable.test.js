//costumListTable.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomListTable } from '../components/ListTable/costumListTable';

describe('CustomListTable', () => {
  // Mock functions to pass as props
  const setSelectedItemId = jest.fn();
  const setNewMark = jest.fn();
  const setNewPrice = jest.fn();
  const setNewYear = jest.fn();
  const setNewRating = jest.fn();
  const openModal = jest.fn();

  const data = [
    { id: 1, mark: 'A', price: 100, year: 2022, rating: 4.5 },
    { id: 2, mark: 'B', price: 150, year: 2021, rating: 3.8 },
  ];

  it('renders table rows correctly', () => {
    const { getByText } = render(
      <CustomListTable
        data={data}
        setSelectedItemId={setSelectedItemId}
        setNewMark={setNewMark}
        setNewPrice={setNewPrice}
        setNewYear={setNewYear}
        setNewRating={setNewRating}
        openModal={openModal}
      />
    );

    // Check if table rows are rendered with correct data
    data.forEach((item) => {
      const row = getByText(item.mark); //  
      expect(row).toBeInTheDocument();
    });
  });

  it('calls functions with correct arguments when a table row is clicked', () => {
    const { getByText } = render(
      <CustomListTable
        data={data}
        setSelectedItemId={setSelectedItemId}
        setNewMark={setNewMark}
        setNewPrice={setNewPrice}
        setNewYear={setNewYear}
        setNewRating={setNewRating}
        openModal={openModal}
      />
    );

    // Simulate a click on the first table row
    fireEvent.click(getByText('A')); // Assuming 'A' is the value of the first item's 'mark' property

    
    // Check if the functions are called with the correct arguments
    expect(setSelectedItemId).toHaveBeenCalledWith(1);
    expect(setNewMark).toHaveBeenCalledWith('A');
    expect(setNewPrice).toHaveBeenCalledWith(100);
    expect(setNewYear).toHaveBeenCalledWith(2022);
    expect(setNewRating).toHaveBeenCalledWith(4.5);
    expect(openModal).toHaveBeenCalled();
  });
});
