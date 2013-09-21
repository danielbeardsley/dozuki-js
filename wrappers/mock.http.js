/**
 * Adds a function called 'mock' to Dozuki.http if run in the browser and 
 * and to module.exports if run in node.
 *
 * Used as a mock http library for passing to Dozuki during testing.
 */
(function(http) {
   http.mock = function(responseData) {
      var self = {};
      self.send = function(url, options) {

         // Save the info that was sent for accessiblity when testing
         self.sent = {
            url: url,
            options: options
         };

         // Return a mock-promise
         return {
            then: function(callback) {
               callback(responseData);
            }
         };
      };
      return self;
   }
})(typeof window != 'undefined' ? window.Dozuki.http : module.exports);
