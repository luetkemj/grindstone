import should from 'should';

describe('The Activity Library', () => {
  let activitiesLib;

  beforeEach(() => {
    activitiesLib = require('../../../server/lib/activities');
  });

  it('should exist', () => {
    should.exist(activitiesLib);
  });

  describe('buildActivityDuration', () => {
    it('should work', () => {
      const actual = activitiesLib.buildActivityDuration(5400);
      should(actual).deepEqual({
        hours: '1',
        minutes: '30',
        seconds: '00',
      });
    });
  });

  describe('buildActivityPace', () => {
    it('should work', () => {
      const actual = activitiesLib.buildActivityPace(3500, 6);
      should(actual).deepEqual({
        minutes: '09',
        seconds: '43',
      });
    });
  });

  describe('setVariance', () => {
    it('should work when variance is positive', () => {
      const actual = activitiesLib.setVariance(10.3333333, 3);
      const expected = 7.33;

      should(actual).equal(expected);
    });

    it('should work when variance is negative', () => {
      const actual = activitiesLib.setVariance(3, 10.3333333);
      const expected = -7.33;

      should(actual).equal(expected);
    });

    it('should work when variance is 0', () => {
      const actual = activitiesLib.setVariance(3, 3);
      const expected = 0;

      should(actual).equal(expected);
    });
  });

  describe('pad', () => {
    it('should work when a number needs to be padded', () => {
      const actual = activitiesLib.pad(1, 2);
      const expected = '01';

      should(actual).equal(expected);
    });

    it('should work when a number does not need to be padded', () => {
      const actual = activitiesLib.pad(11, 2);
      const expected = '11';

      should(actual).equal(expected);
    });
  });

  describe('buildActivityUi', () => {
    let mockActivity;
    beforeEach(() => {
      mockActivity = {
        activityId: 4898206,
        activityType: 'running',
        duration: 1468.0,
        distance: 4.129,
        calories: 346,
        notes: 'Legs were so tired from moving yesterday.',
        startDateTimeLocal: '2016-06-08T10:15:00+02:00',
        externalId: '88-2016-06-08T10:15:29.000+02:00',
        source: 'api',
        appVersion: '',
        deviceType: '',
        startLatitude: 48.879138,
        startLongitude: 2.385749,
        heartRateMax: 164,
        heartRateMin: 87,
        heartRateAverage: 139,
        weatherType: 'partlycloudy',
        temperature: 18.92,
        humidity: 87,
        windSpeed: 11,
        temperatureApparent: 18.92,
        temperatureWindChill: 14.45,
        howFelt: 'none',
        terrain: 'none',
        syncDateTimeUTC: '2016-06-08T08:44:00',
        dateCreatedUTC: '2016-06-08T08:44:02.44',
        dateUpdatedUTC: '2016-06-08T09:44:47.707',
      };
    });

    it('should work', () => {
      const actual = activitiesLib.buildActivityUi(mockActivity);
      should(actual).deepEqual({
        activityId: 4898206,
        activityDay: 'Wednesday',
        activityDuration: {
          hours: '0',
          minutes: '24',
          seconds: '28',
        },
        activityDistance: 4.13,
        activityPace: {
          minutes: '05',
          seconds: '55',
        },
        goal: 6,
        variance: -1.87,
      });
    });
  });
});
