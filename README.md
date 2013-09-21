## dozuki-js

A javascript library for accessing Dozuki.com's api.

## Usage

```js
var http = new Dozuki.wrapers.jquery($);
var dozuki = new Dozuki("www.ifixit.com", http);
dozuki.guides.get(1234).then(function(guide) {
   console.log(guide.title);
});
```

## Interface

### Dozuki.guides
An object exposing methods on the guide collection.

#### Dozuki.guides.get(guideid)
return a promise that will be fulfilled with a [JSON object directly from the
API](https://www.ifixit.com/api/2.0/doc/Guides#get-a-guide)

### Dozuki.http modules
A mock module (`Dozuki.http.mock`) and a jQuery module (`Dozuki.http.mock`) are
provided to give Dozuki a way to make requests. It's pretty trivial make a new
module for any given HTTP library.

An http module only needs to have one method, `send(url, options)` 
the `options` object must support these attributes.

    data:       Object containing key:value mappings to send with the request
                (as JSON for POST and as a query-string for GET)
    headers:    Key:value map of any HTTP headers that should be sent.
    method:     HTTP Method to use for the request: get, post, patch, ...


