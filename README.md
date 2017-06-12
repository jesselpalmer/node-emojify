[![Build Status](https://travis-ci.org/jesselpalmer/node-emojify.svg?branch=master)](https://travis-ci.org/jesselpalmer/node-emojify)
[![Coverage Status](https://coveralls.io/repos/github/jesselpalmer/node-emojify/badge.svg?branch=master)](https://coveralls.io/github/jesselpalmer/node-emojify?branch=master)

node-emojify
------------

Transform text into emojis

## Installation

  `npm install node-emojify`

## Usage

  Text that you would like to convert into emojis must be surrounded by colons, like `:smile:`.
  
    const emojify = require('node-emojify')

    const sentance = emojify('node is :thumbsup:')
  
  Output should be `node is 👍`

  If the emoji isn't supported the text will simply be ignored and not be transformed. 
  
 ### Supported emojis
  
  Supported emojis can be found in different files using the table below: 
  
  <table>
    <tr>
      <th>Category</th>
      <th>Filename</th>
    </tr>
    <tr>
      <td>Animal</td>
      <td><a href="https://github.com/jesselpalmer/node-emojify/blob/master/lib/emojis/animal-emojis.js">animal-emojis.js</a></td>
    </tr>
    <tr>
      <td>Food</td>
      <td><a href="https://github.com/jesselpalmer/node-emojify/blob/master/lib/emojis/food-emojis.js">food-emojis.js</a></td>
    </tr>
    <tr>
      <td>Nature</td>
      <td><a href="https://github.com/jesselpalmer/node-emojify/blob/master/lib/emojis/nature-emojis.js">nature-emojis.js</a></td>
    </tr>
    <tr>
      <td>People</td>
      <td><a href="https://github.com/jesselpalmer/node-emojify/blob/master/lib/emojis/people-emojis.js">people-emojis.js</a></td>
    </tr>
   </table>
  
  If there is an emoji that you need and is not available, please file an [issue](https://github.com/jesselpalmer/node-emojify/issues).
  
## Tests

  `npm test`

## Contributing

Pull Requests are welcome! Please make sure that any new or changed functionality need to have unit tests accompanied with the PR. Make sure that you lint (`npm run lint`) and test your code (`npm test`).
