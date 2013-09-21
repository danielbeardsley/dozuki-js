(function(http) {
   http.mock = function(responseData) {
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
})(typeof window != 'undefined' ? window.Dozuki.http : module.exports);
