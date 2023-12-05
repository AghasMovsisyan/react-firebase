//costumListModall.test.js
import { render, fireEvent, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import CustomListModal from '../components/CostumListModal/costumListModal';


const mockStore = configureStore([]);

describe('CustomListModal Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      myReducer: {
        newMark: '',
        newPrice: '',
        newYear: '',
        newRating: '',
      },
    });
  });

  test('Renders with create button when no item is selected', () => {
    render(
      <Provider store={store}>
        <CustomListModal isModalOpen={true} selectedItemId={null} />
      </Provider>
    );

    expect(screen.getByText('Create List')).toBeInTheDocument();
  });

  test('Renders with update button when item is selected', () => {
    render(
      <Provider store={store}>
        <CustomListModal isModalOpen={true} selectedItemId="someId" />
      </Provider>
    );

    expect(screen.getByText('Update List')).toBeInTheDocument();
  });

  test('Submits form with correct values', async () => {
    render(
      <Provider store={store}>
        <CustomListModal isModalOpen={true} selectedItemId={null} />
      </Provider>
    );

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Enter mark...'), {
        target: { value: 'Test Mark' },
      });
      fireEvent.change(screen.getByPlaceholderText('Enter price...'), {
        target: { value: '50' },
      });
      fireEvent.change(screen.getByPlaceholderText('Enter year...'), {
        target: { value: '2023' },
      });
      fireEvent.change(screen.getByPlaceholderText('Enter rating...'), {
        target: { value: '4' },
      });
    
      fireEvent.click(screen.getByText('Create List'));
      
      setTimeout(() => {
      }, 0);
    });
    

   });
}); 
