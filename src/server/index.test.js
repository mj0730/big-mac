const filterJson = require('./filterJson');
const findCurrency = require('./findCurrency');
const getCountryData = require('./getCountryData');

describe('Server Tests', () => {
  describe('getCountryData', () => {
    it('should return data matching the user country and a random country', () => {
      const data = [
        { Country: 'FindMe', Date: '2000-01-01', Price: 2 },
        { Country: 'DontFindMe', Date: '2000-01-01', Price: 1.5 },
      ];
      expect(getCountryData('FindMe', data)).toEqual({
        user: { Country: 'FindMe', Date: '2000-01-01', Price: 2 },
        random: { Country: 'DontFindMe', Date: '2000-01-01', Price: 1.5 },
      });
    });

    it('should not be able to set the users country to the random country', () => {
      const data = [
        { Country: 'FindMe', Date: '2000-01-01', Price: 2 },
        { Country: 'FindMe', Date: '2000-01-01', Price: 2 },
      ];
      expect(getCountryData('FindMe', data)).not.toEqual({
        user: { Country: 'FindMe', Date: '2000-01-01', Price: 2 },
        random: { Country: 'FindMe', Date: '2000-01-01', Price: 2 },
      });
    });
  });
  describe('findCurrency', () => {
    const jsonList = require('./json/currency.json');

    it('should return a countrys currency and code', () => {
      expect(findCurrency('AFGHANISTAN')).toEqual({
        ENTITY: 'AFGHANISTAN',
        Currency: 'Afghani',
        'Alphabetic Code': 'AFN',
        'Numeric Code': 971,
      });
    });

    it('should not have a case sensitive arguement', () => {
      expect(findCurrency('United States')).toEqual({
        ENTITY: 'UNITED STATES',
        Currency: 'US Dollar',
        'Alphabetic Code': 'USD',
        'Numeric Code': 840,
      });
    });

    it('should return an object with empty values if no match is found', () => {
      expect(findCurrency('Atlantis')).toEqual({ Currency: '', 'Alphabetic Code': '' });
    });
  });

  describe('filterJson', () => {
    it('filterJson should return objects containing the passed in date', () => {
      const data = [
        { Country: 'FindMe', Date: '2000-01-01' },
        { Country: 'DontFindMe', Date: '2020-01-01' },
      ];
      expect(filterJson(data, '2000-01-01')).toEqual([{ Country: 'FindMe', Date: '2000-01-01' }]);

      expect(filterJson(data, '2000-01-01')).not.toEqual([]);
    });
  });
});
