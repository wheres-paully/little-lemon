import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const today = new Date();
const maxDate = new Date(today);
maxDate.setMonth(today.getMonth() + 1);

function ReservationStepTwo() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Reservation Form (Page 2/2)</h2>
      <Formik
        initialValues={{
          date: today.toISOString().split('T')[0],
          time: '',
          occasion: '',
        }}
        validationSchema={Yup.object({
          date: Yup.date()
            .min(today, 'Date cannot be in the past')
            .max(maxDate, 'Only up to one month ahead')
            .required('Date is required'),
          time: Yup.string().required('Time is required'),
          occasion: Yup.string().required('Occasion is required'),
        })}
        onSubmit={(values) => {
          const stepOne = JSON.parse(localStorage.getItem('reservationStepOne'));
          const fullData = { ...stepOne, ...values };
          localStorage.setItem('finalReservationData', JSON.stringify(fullData));
          navigate('/success');
        }}
      >
        <Form style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
          <label>
            Date:
            <Field name="date" type="date" />
            <ErrorMessage name="date" component="div" />
          </label>

          <label>
            Time:
            <Field name="time" as="select">
              <option value="">Select time</option>
              {[...Array(11)].map((_, i) => {
                const hour = 12 + i;
                const label = `${hour}:00`;
                return (
                  <option key={label} value={label}>
                    {label}
                  </option>
                );
              })}
            </Field>
            <ErrorMessage name="time" component="div" />
          </label>

          <label>
            Occasion:
            <Field name="occasion" as="select">
              <option value="">Select Occasion</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Graduation">Graduation</option>
              <option value="Normal Dining">Normal Dining</option>
              <option value="Retirement">Retirement</option>
            </Field>
            <ErrorMessage name="occasion" component="div" />
          </label>

          <button type="submit">Reserve</button>
        </Form>
      </Formik>
    </section>
  );
}

export default ReservationStepTwo;
