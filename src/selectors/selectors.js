import { useSelector } from 'react-redux';

export const newmark = useSelector(
  (state) => state.appReducer.dataToUpdate.mark,
);
export const newprice = useSelector(
  (state) => state.appReducer.dataToUpdate.price,
);
export const newyear = useSelector(
  (state) => state.appReducer.dataToUpdate.year,
);
export const newrating = useSelector(
  (state) => state.appReducer.dataToUpdate.rating,
);
