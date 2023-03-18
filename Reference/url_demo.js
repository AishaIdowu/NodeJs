const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:800/hello.html?id=100&staus=active"
);

// Serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root domain)
console.log(myUrl.host);

// Host name (does not include the port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
