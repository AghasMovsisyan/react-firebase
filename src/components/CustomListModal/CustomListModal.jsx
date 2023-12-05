//CustumListModal.jsx
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
} from './customListModalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../services/firebase';
import { fetchData, setIsModalOpen, setNewMark, setNewPrice, setNewRating, setNewYear, setSelectedItemId } from '../../redux/actions/action';
import { listCollectionRef } from '../../services/db';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { FormattedMessage, useIntl } from 'react-intl';

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

  const intl = useIntl();
  const placeholderMessageMark = intl.formatMessage({ id: 'enter.mark', defaultMessage: 'Enter mark...' });
  const placeholderMessagePrice = intl.formatMessage({ id: 'enter.price', defaultMessage: 'Enter price...' });
  const placeholderMessageYear = intl.formatMessage({ id: 'enter.year', defaultMessage: 'Enter year...' });
  const placeholderMessageRating = intl.formatMessage({ id: 'enter.rating', defaultMessage: 'Enter rating...' });
  
  const handleSubmit = (values) => {
    if (selectedItemId) {
      updateListItem(values);
    } else {
      createList(values);
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
                  <InputLabel htmlFor="mark-input">
                    <FormattedMessage id="mark.label" defaultMessage="Mark:" />
                  </InputLabel>
                  <Field
                    as={InputField}
                    id="mark-input"
                    name="mark"
                    placeholder={placeholderMessageMark}
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="mark" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="price-input">
                    <FormattedMessage id="price.label" defaultMessage="Price:" />
                  </InputLabel>
                  <Field
                    as={InputField}
                    id="price-input"
                    name="price"
                    placeholder={placeholderMessagePrice}
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="price" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="year-input">
                    <FormattedMessage id="year.label" defaultMessage="Price:"/>
                  </InputLabel>
                  <Field
                    as={InputField}
                    id="year-input"
                    name="year"
                    placeholder={placeholderMessageYear}
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="year" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="rating-input">
                    <FormattedMessage id="rating.label" defaultMessage="Rating:"/>
                  </InputLabel>
                  <Field
                    as={InputField}
                    id="rating-input"
                    name="rating"
                    placeholder={placeholderMessageRating}
                    hasError={errors.mark && touched.mark} 
                  />
                  <ErrorMessage name="rating" component={ErrorMessageStyled} />
                </InputContainer>
                <CreateUpdateButton type="submit">
                  {selectedItemId ? (
                    <FormattedMessage id="update.listButton" defaultMessage="Update List" />
                  ) : (
                    <FormattedMessage id="create.listButton" defaultMessage="Create List" />
                  )}
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
