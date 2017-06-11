node-emojify
------------

Transform text into emojis

## Installation

  `npm install node-emojify`

## Usage

  Text that you would like to convert into emojis must be surrounded by colons, like `:smile:`.
  
    const emojify = require('node-emojify');

    const sentance = emojify('node is :thumbsup:');
  
  Output should be `node is 👍`

  If the emoji isn't supported the text will simply be ignored and not be transformed. The supported emojis can be found at https://github.com/jesselpalmer/node-emojify/blob/master/emojis.js.
  
## Tests

  `npm test`
