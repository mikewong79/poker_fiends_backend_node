var should    = require('chai').should();
var expect    = require('chai').expect;
var supertest = require('supertest');
var api       = supertest('http://localhost:3000');

describe('GET /', function(){
  it('should return a 200 response', function(done){
    api.get('/')
      .expect(200, done);
  });
});
