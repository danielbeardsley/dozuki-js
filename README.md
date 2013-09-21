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

