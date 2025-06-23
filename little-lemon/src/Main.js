// Main.js
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData, submitAPI } from './api'; // assuming these are globally available
import BookingForm from './BookingForm';

// Moved here so it's not duplicated
export function initializeTimes() {
  const today = new Date();
  return fetchData(today); // fetches available times for today's date
}

export function updateTimes(state, selectedDate) {
  return fetchData(new Date(selectedDate)); // update times based on selected date
}

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmation');
    }
  };

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;