var expect = require('chai').expect;
var myFile = require('../lib/my-file'); // the file you're testing
describe('myFile', function() {
  it('should be a function', function() {
    expect(myFile).to.be.a('function');
  });
});
