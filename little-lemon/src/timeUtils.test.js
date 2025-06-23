import { initializeTimes, updateTimes } from './timeUtils';

describe('initializeTimes', () => {
  test('returns the default time slots', () => {
    const expectedTimes = [
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
    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  test('returns the same time slots regardless of date (for now)', () => {
    const initialTimes = ['12:00', '13:00', '14:00'];
    const result = updateTimes(initialTimes, '2025-06-20');
    expect(result).toEqual(initializeTimes());
  });
});
