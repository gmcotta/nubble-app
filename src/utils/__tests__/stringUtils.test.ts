import { stringUtils } from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each world', () => {
      expect(stringUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('ANA MARIA')).toBe('Ana Maria');
      expect(stringUtils.capitalizeFirstLetter('mArIa')).toBe('Maria');
    });

    it('should remove leading/trailing spaces', () => {
      expect(stringUtils.capitalizeFirstLetter('  ANA MARIA   ')).toBe(
        'Ana Maria'
      );
    });
  });
});
