// CustumListModal.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import {
  CloseButton,
  CreateUpdateButton,
  ErrorMessageStyled,
  InputContainer,
  InputField,
  InputLabel,
  Modal,
  ModalContent,
} from './ListModalStyled';
import { db } from '../../services/firebase';
import { fetchData, listData, setIsModalOpen } from '../../redux/actions/action';
import { listCollectionRef } from '../../services/db';
import { getDataToUpdate, getFormattedData } from '../../selectors/dataSelectors';
import listValidationSchema from './validation/validationSchemas';
import placeholderMessages from './utils/placeholderMessages';

export const ListModal = ({ isModalOpen, selectedItemId }) => {
  const { formatMessage } = useIntl();
  const dataToUpdate = useSelector(getDataToUpdate);
  const { newmark, newprice, newyear, newrating } = getFormattedData(dataToUpdate);
  const initialValues = {
    mark: newmark,
    price: newprice,
    year: newyear,
    rating: newrating,
  };

  const validationSchema = listValidationSchema;

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setIsModalOpen(false));
    dispatch(
      listData({
        mark: '',
        price: '',
        year: '',
        rating: '',
      }),
    );
  };

  const createList = async (values) => {
    await addDoc(listCollectionRef, {
      mark: values.mark,
      price: values.price,
      year: values.year,
      rating: values.rating,
    });
    closeModal();
    dispatch(fetchData());
  };

  const updateListItem = async (values) => {
    if (selectedItemId) {
      const listDoc = doc(db, 'list', selectedItemId);
      await updateDoc(listDoc, {
        mark: values.mark,
        price: values.price,
        year: values.year,
        rating: values.rating,
      });
      closeModal();
      dispatch(fetchData());
    }
  };

  const placeholderMessage = {
    mark: formatMessage(placeholderMessages.mark),
    price: formatMessage(placeholderMessages.price),
    year: formatMessage(placeholderMessages.year),
    rating: formatMessage(placeholderMessages.rating),
  };

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
            {() => (
              <Form>
                <InputContainer>
                  <InputLabel htmlFor="mark-input">
                    <FormattedMessage id="mark.label" defaultMessage="Mark:" />
                  </InputLabel>
                  <Field
                    as={InputField}
                    id="mark-input"
                    name="mark"
                    placeholder={placeholderMessage.mark}
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
                    placeholder={placeholderMessage.price}
                  />
                  <ErrorMessage name="price" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="year-input">
                    <FormattedMessage id="year.label" defaultMessage="Price:" />
                  </InputLabel>
                  <Field
                    as={InputField}
                    id="year-input"
                    name="year"
                    placeholder={placeholderMessage.year}
                  />
                  <ErrorMessage name="year" component={ErrorMessageStyled} />
                </InputContainer>
                <InputContainer>
                  <InputLabel htmlFor="rating-input">
                    <FormattedMessage id="rating.label" defaultMessage="Rating:" />
                  </InputLabel>
                  <Field
                    as={InputField}
                    id="rating-input"
                    name="rating"
                    placeholder={placeholderMessage.rating}
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

export default ListModal;
