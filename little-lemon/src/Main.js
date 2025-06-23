// Main.js
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

function initializeTimes() {
  return [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

function updateTimes(state, action) {
  const selectedDate = action;
  // You can add logic here to return different times based on the selectedDate
  return initializeTimes(); // for now, it's static
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}

export default Main;

export function initializeTimes() {
  return [
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

export function updateTimes(state, date) {
  return initializeTimes(); // currently returns same list regardless of date
}
