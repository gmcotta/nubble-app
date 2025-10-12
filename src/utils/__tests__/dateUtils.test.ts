import { add, Duration, formatISO, sub } from 'date-fns';
import { dateUtils } from '@utils';

const MOCK_DATE_NOW_VALUE = 1759515409 * 1000;

function getDateISO(operation: 'add' | 'sub', duration: Duration) {
  const operationFn = operation === 'add' ? add : sub;
  const time = operationFn(Date.now(), duration);
  const timeISO = formatISO(time);
  return dateUtils.formatRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCK_DATE_NOW_VALUE);
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      const sut = getDateISO('sub', { seconds: 30 });

      expect(sut).toBe('30 s');
    });

    it('should be displayed in minutes if less than 1 h ago', () => {
      const sut = getDateISO('sub', { minutes: 30 });

      expect(sut).toBe('30 min');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      const sut = getDateISO('sub', { hours: 12 });

      expect(sut).toBe('12 h');
    });

    it('should be displayed in days if less than 7 days ago', () => {
      const sut = getDateISO('sub', { days: 1 });

      expect(sut).toBe('1 d');
    });

    it('should be displayed in weeks if less than 4 weeks ago', () => {
      const sut = getDateISO('sub', { weeks: 2 });

      expect(sut).toBe('2 sem');
    });

    it('should be displayed in months if less than 12 months ago', () => {
      const sut = getDateISO('sub', { months: 6 });

      expect(sut).toBe('6 m');
    });

    it('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      const sut = getDateISO('sub', { months: 13 });

      expect(sut).toBe('03/09/2024');
    });

    it('should be displayed in dd/MM/yyyy if future date', () => {
      const sut = getDateISO('add', { days: 1 });

      expect(sut).toBe('04/10/2025');
    });

    afterAll(() => {
      jest.clearAllMocks();
    });
  });
});
