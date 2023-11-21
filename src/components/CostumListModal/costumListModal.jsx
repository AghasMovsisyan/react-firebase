//costumListModal.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  CloseButton,
  CreateUpdateButton,
  ErrorMessageStyled,
  InputContainer,
  InputField,
  InputLabel,
  Modal,
  ModalContent,
} from '../../styles/costumListModalStyled';
import { setIsModalOpen, setNewMark, setNewPrice, setNewRating, setNewYear, setSelectedItemId } from '../../redux/reducers/myReducer';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../services/firebase';
import { fetchData } from '../../redux/actions/action';
import { listCollectionRef } from '../../services/db';
import { addDoc, doc, updateDoc } from 'firebase/firestore';

export const CustomListModal = ({
  isModalOpen,
  selectedItemId,
}) => {

  const newmark = useSelector((state) => state.myReducer.newMark);
  const newprice = useSelector((state) => state.myReducer.newPrice);
  const newyear = useSelector((state) => state.myReducer.newYear);
  const newrating = useSelector((state) => state.myReducer.newRating);

  const initialValues = {
    mark: newmark || '',
    price: newprice || '',
    year: newyear || '',
    rating: newrating || '',
  };

  const validationSchema = Yup.object().shape({
    mark: Yup.string().required('Mark is required'),
    price: Yup.number().required('Price is required'),
    year: Yup.number().required('Year is required'),
    rating: Yup.number().required('Rating is required'),
  });

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIsModalOpen(false));
    dispatch(setSelectedItemId(null));
    dispatch(setNewMark(""));
    dispatch(setNewPrice(""));
    dispatch(setNewYear(""));
    dispatch(setNewRating(""));
  };

  const createList = async (values) => {
    console.log("values in createList function",values)

    await addDoc(listCollectionRef, { mark: values.mark, price: values.price, year: values.year, rating: values.rating });
    dispatch(setNewMark(""));
    dispatch(setNewPrice(""));
    dispatch(setNewYear(""));
    dispatch(setNewRating(""));
    closeModal();
    dispatch(fetchData());
  };

  const updateListItem = async (values) => {
    if (selectedItemId) {
     
    const listDoc = doc(db, "list", selectedItemId);
    await updateDoc(listDoc, { mark: values.mark, price: values.price, year: values.year, rating: values.rating });
    dispatch(setNewMark(""));
    dispatch(setNewPrice(""));
    dispatch(setNewYear(""));
    dispatch(setNewRating(""));
    closeModal();
    dispatch(fetchData());
  
    }
  };



  const handleSubmit = (values) => {
    if (selectedItemId) {
      updateListItem(values);
      console.log("values to update",values);
    } else {
      createList(values);
      console.log("values",values);
    }
    closeModal();
  };

  return (
    isModalOpen && (
      <Modal onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <InputContainer>
                  <InputLabel htmlFor="mark-input">Mark:</InputLabel>
                  <Field
                    as={InputField}
                    id="mark-input"
                    name="mark"
                    placeholder="Enter mark..."
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="mark" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="price-input">Price:</InputLabel>
                  <Field
                    as={InputField}
                    id="price-input"
                    name="price"
                    placeholder="Enter price..."
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="price" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="year-input">Year:</InputLabel>
                  <Field
                    as={InputField}
                    id="year-input"
                    name="year"
                    placeholder="Enter year..."
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="year" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="rating-input">Rating:</InputLabel>
                  <Field
                    as={InputField}
                    id="rating-input"
                    name="rating"
                    placeholder="Enter rating..."
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="rating" component={ErrorMessageStyled} />
                </InputContainer>
                <CreateUpdateButton type="submit">
                  {selectedItemId ? 'Update List' : 'Create List'}
                </CreateUpdateButton>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    )
  );
};

export default CustomListModal;
