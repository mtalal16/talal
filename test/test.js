var expect = require('chai').expect;
var myFile = function test(){}; // the file you're testing
describe('myFile', function() {
  it('should be a function', function() {
    expect(myFile).to.be.a('function');
  });
});
