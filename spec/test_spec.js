var request = require("request");
var ok = require("../app.js");
var base_url = "http://localhost:8080/";

describe("200 OK", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
	ok.closeServer();
        done();
      });
    });

  });
});
