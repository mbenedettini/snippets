// http-options.js

{
  "arg": "options",
  "type": "object",
  "http": "optionsFromRequest"
}

// method
const token = options && options.accessToken;
const userId = token && token.userId;

