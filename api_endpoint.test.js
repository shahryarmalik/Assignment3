// require('dotenv').config();
var assert = require('assert').strict;

var app = require('./index.js');
var request = require('supertest')(app);

describe('Load testing operations', function () {
  // Wait until the database is up and connected to.
  // beforeAll(function (done) {
  // 	setTimeout(function () {
  // 		done();
  // 	}, 7000);
  // });

  // Shut everything down gracefully
  afterAll(function (done) {
    // app.db.client.close();
    app.close();
    done();
  });

  // test("should allow registered user to login", function (done) {
  //   request.post("/api/sessions")
  //     .send({
  //       email: 'apizapitest@sample.com',
  //       password: 'abc123*'
  //     })
  //     .end(function (err, res) {
  //       token = res.body.token;
  //       userId = res.body.userId;
  //       assert.strictEqual(res.status, 201);
  //       assert.strictEqual(res.body.msg, "Authorized", "Message should be AUthorized");
  //       done();
  //     });
  // });

  test("should get a valid cart", function (done) {
    request.get(`/api/carts/777`)
      // .set('x-auth', token)
      .end(function (err, res) {
        assert.strictEqual(res.status, 200);
        done();
      });
  });

  test("should error if cart id not vaalid", function (done) {
    request.get(`/api/carts/0`)
      // .set('x-auth', token)
      .end(function (err, res) {
        assert.strictEqual(res.status, 404);
        done();
      });
  });
});
