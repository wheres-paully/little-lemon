// utils/storage.test.js
import { saveBooking } from './storage';
import { getBooking } from './storage';

describe('saveBooking', () => {
  it('writes data to localStorage', () => {
    const mockData = { date: '2025-06-24', time: '18:00' };

    // Set up a mock for localStorage
    Storage.prototype.setItem = jest.fn();

    saveBooking(mockData);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'bookingData',
      JSON.stringify(mockData)
    );
  });
});

describe('getBooking', () => {
    it('returns parsed data from localStorage', () => {
      const mockData = { date: '2025-06-24', time: '18:00' };
      localStorage.getItem = jest.fn(() => JSON.stringify(mockData));
  
      const result = getBooking();
      expect(result).toEqual(mockData);
      expect(localStorage.getItem).toHaveBeenCalledWith('bookingData');
    });
  
    it('returns null if no data in localStorage', () => {
      localStorage.getItem = jest.fn(() => null);
  
      const result = getBooking();
      expect(result).toBeNull();
    });
  });