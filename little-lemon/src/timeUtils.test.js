import { updateTimes } from './Main';
import { fetchData } from './api';

jest.mock('./api');

test('updateTimes returns updated times for selected date', () => {
  const selectedDate = '2025-06-24';
  const expectedTimes = ['12:00', '13:00'];
  fetchData.mockReturnValue(expectedTimes);

  const result = updateTimes([], selectedDate);
  expect(result).toEqual(expectedTimes);
  expect(fetchData).toHaveBeenCalledWith(new Date(selectedDate));
});