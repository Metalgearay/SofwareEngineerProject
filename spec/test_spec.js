var request = require("request");
var app = require("../app.js");
var base_url = "http://localhost:8080/";

describe("200 OK", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
        request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            //app.closeServer();
            done();
        });
    });

    it("contains the the string Game", function(done) {
        request.get(base_url, function(error, response, body) {
            expect(body).toContain('Game');
            //app.closeServer();
            done();
        });
    });

    it("has title tag", function(done) {
        request.get(base_url, function(error, response, body) {
            expect(body).toContain('<title>');
            app.closeServer();
            done();
        });
    });


  });
});
