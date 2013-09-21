(function (global) {
   global.Dozuki =
   function Dozuki(domain, http) {
      baseUrl = "https://" + domain +  "/api/2.0/";
      this.guides = {
         get: function(guideid) {
            return http.send(
               baseUrl + "guides/" + guideid,
               {
                  dataType:   'json',
                  method: 'get'
               });
         }
      }
   }
})(typeof window != 'undefined' ? window : module.exports);
