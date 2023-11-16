//costumListTable.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomListTable } from '../components/CustomListTable/costumListTable';

describe('CustomListTable', () => {
  // Mock functions to pass as props
  const setSelectedItemId = jest.fn();
  const setNewmark = jest.fn();
  const setNewprice = jest.fn();
  const setNewyear = jest.fn();
  const setNewrating = jest.fn();
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
        setNewmark={setNewmark}
        setNewprice={setNewprice}
        setNewyear={setNewyear}
        setNewrating={setNewrating}
        openModal={openModal}
      />
    );

    // Check if table rows are rendered with correct data
    data.forEach((item) => {
      const row = getByText(item.mark); // Assuming 'mark' is unique in your test data
      expect(row).toBeInTheDocument();
    });
  });

  it('calls functions with correct arguments when a table row is clicked', () => {
    const { getByText } = render(
      <CustomListTable
        data={data}
        setSelectedItemId={setSelectedItemId}
        setNewmark={setNewmark}
        setNewprice={setNewprice}
        setNewyear={setNewyear}
        setNewrating={setNewrating}
        openModal={openModal}
      />
    );

    // Simulate a click on the first table row
    fireEvent.click(getByText('A')); // Assuming 'A' is the value of the first item's 'mark' property

    // Check if the functions are called with the correct arguments
    expect(setSelectedItemId).toHaveBeenCalledWith(1);
    expect(setNewmark).toHaveBeenCalledWith('A');
    expect(setNewprice).toHaveBeenCalledWith(100);
    expect(setNewyear).toHaveBeenCalledWith(2022);
    expect(setNewrating).toHaveBeenCalledWith(4.5);
    expect(openModal).toHaveBeenCalled();
  });
});
