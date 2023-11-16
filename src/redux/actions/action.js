// actions.js
import { getDocs, collection } from "@firebase/firestore";
import { updateData } from '../reducers/myReducer';
import { db } from "../../services/firebase";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const querySnapshot = await getDocs(collection(db, "list"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(updateData(data)); // Dispatch action to update Redux store
    } catch (error) {
    }
  };
};
