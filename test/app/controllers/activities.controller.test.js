import should from 'should';
// import proxyquire from 'proxyquire';
//
const MODULE_PATH = '../../../server/api/controllers/activities.controller';

describe('The activities controller', () => {
  let controller;
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: {},
      query: {},
    };
    res = {
      _data: null,
      send(data) {
        this._data = data;
      },
    };

    controller = require(MODULE_PATH);
  });

  it('should exist', () => {
    should.exist(controller);
  });
});
