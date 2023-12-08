import { useSelector } from 'react-redux';

export const newmark = useSelector(
  (state) => state.myReducer.dataToUpdate.mark,
);
export const newprice = useSelector(
  (state) => state.myReducer.dataToUpdate.price,
);
export const newyear = useSelector(
  (state) => state.myReducer.dataToUpdate.year,
);
export const newrating = useSelector(
  (state) => state.myReducer.dataToUpdate.rating,
);
