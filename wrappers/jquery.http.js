Dozuki.http.jquery = function(jQuery) {
   this.send = function(url, options) {
      var jQueryOptions = {
         data:       options.data,
         headers:    options.headers,
         dataType:   'json',
         type:       options.method
      }
      // Already returns a promise object
      return jQuery.ajax(url,  jQueryOptions);
   };
};
