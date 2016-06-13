import should from 'should';
// import proxyquire from 'proxyquire';
//
const MODULE_PATH = '../../../server/api/controllers/activities.controller';

describe('The activities controller', () => {
  let controller;

  beforeEach(() => {
    controller = require(MODULE_PATH);
  });

  it('should exist', () => {
    should.exist(controller);
  });
});
