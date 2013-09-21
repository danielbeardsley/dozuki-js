var assert = require('assert');
var Dozuki = require('./dozuki.js').Dozuki;

var domain = "www.test.com";

describe('Dozuki', function(){
   function newDozuki(httpMock) {
      return new Dozuki(domain, httpMock)
   }
   describe('guides', function() {
      describe('get', function() {
         it("should from the correct url", function(done) {
            var http = new HttpMock("123");
            var d = newDozuki(http);
            var promise = d.guides.get(123);

            assert(promise.then);
            assert.equal(http.sent.url, "https://" + domain + "/api/2.0/guides/123");

            promise.then(function(data) {
               assert.equal("123", data);
               done();
            });
         });

         it("should set the correct request options", function(done) {
            var http = new HttpMock("123");
            newDozuki(http).guides.get(123);

            assert.deepEqual(http.sent.options, {
               dataType:   'json',
               method:     'get'
            });

            assert.equal(http.sent.url, "https://" + domain + "/api/2.0/guides/123");
         });
      });
   });
});

function HttpMock(responseData) {
   var self = {};
   self.send = function(url, options) {
      self.sent = {
         url: url,
         options: options
      };
      return {
         then: function(callback) {
            callback(responseData);
         }
      };
   };
   return self;
}
