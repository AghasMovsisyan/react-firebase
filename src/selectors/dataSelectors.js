// dataSelectors.js

export const getDataToUpdate = (state) => state.appReducer.dataToUpdate;

export const getFormattedData = (dataToUpdate) => {
  const {
    mark: newmark = '',
    price: newprice = '',
    year: newyear = '',
    rating: newrating = '',
  } = dataToUpdate;

  return { newmark, newprice, newyear, newrating };
};
