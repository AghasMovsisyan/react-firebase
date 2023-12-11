import * as Yup from 'yup';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const listValidationSchema = Yup.object().shape({
  mark: Yup.string().required(
    <FormattedMessage id="validation.markRequired" defaultMessage="Mark is required" />,
  ),
  price: Yup.number().required(
    <FormattedMessage id="validation.priceRequired" defaultMessage="Price is required" />,
  ),
  year: Yup.number().required(
    <FormattedMessage id="validation.yearRequired" defaultMessage="Year is required" />,
  ),
  rating: Yup.number().required(
    <FormattedMessage id="validation.ratingRequired" defaultMessage="Rating is required" />,
  ),
});

export default listValidationSchema;
