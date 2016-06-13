import reducer from '../../../app/reducers/week.reducer';
import should from 'should';

describe('week reducer', () => {
  it('should exist', () => {
    should.exist(reducer);
  });

  it('should have the correct initial state', () => {
    should(reducer(undefined, {})).deepEqual({
      weeks: [],
      loadingWeek: false,
      editingWeek: false,
      savingWeek: false,
    });
  });
});
