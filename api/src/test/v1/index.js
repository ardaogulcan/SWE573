process.env.NODE_ENV = 'test';

let chai = require('chai');
let should = chai.should();

describe('Environment', () => {
  describe('Test', () => {
      it('it should wordk', (done) => {
        var a = 3
        a.should.equal(3);
        done();
      });
  });
});