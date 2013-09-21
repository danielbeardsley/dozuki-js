(function (global) {
   global.Dozui =
   function Dozuki(domain, http) {
      baseUrl = "https://" + domain +  "/api/2.0/";
      this.guides = {
         get: function(guideid) {
            return http.send(blah);
         }
      }
   }

   Dozuki.prototype.guides = 
})(typeof window != 'undefined' ? window : module);
