import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const UKPhoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  cellNumber: Yup.string()
    .matches(UKPhoneRegex, 'Enter a valid UK phone number')
    .required('Cell number is required'),
  guests: Yup.number()
    .min(1, 'At least 1 guest')
    .max(10, 'No more than 10 guests')
    .required('Number of guests is required'),
});

function ReservationStepOne() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Reservation Form (Page 1/2)</h2>
      <Formik
        initialValues={{
          firstName: '',
          surname: '',
          email: '',
          cellNumber: '',
          guests: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          localStorage.setItem('reservationStepOne', JSON.stringify(values));
          navigate('/step-two');
        }}
      >
        <Form style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
          <label>
            First Name:
            <Field name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </label>

          <label>
            Surname:
            <Field name="surname" />
            <ErrorMessage name="surname" component="div" />
          </label>

          <label>
            Email:
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </label>

          <label>
            Cell Number:
            <Field name="cellNumber" />
            <ErrorMessage name="cellNumber" component="div" />
          </label>

          <label>
            Number of Guests:
            <Field name="guests" type="number" />
            <ErrorMessage name="guests" component="div" />
          </label>

          <button type="submit">Next</button>
        </Form>
      </Formik>
    </section>
  );
}

export default ReservationStepOne;