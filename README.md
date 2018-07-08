[![npm](https://img.shields.io/npm/dw/node-emojify.svg)](https://www.npmjs.com/package/node-emojify)
[![Build Status](https://travis-ci.org/jesselpalmer/node-emojify.svg?branch=master)](https://travis-ci.org/jesselpalmer/node-emojify)
[![Coverage Status](https://coveralls.io/repos/github/jesselpalmer/node-emojify/badge.svg?branch=master)](https://coveralls.io/github/jesselpalmer/node-emojify?branch=master)
[![dependencies Status](https://david-dm.org/jesselpalmer/node-emojify/status.svg)](https://david-dm.org/jesselpalmer/node-emojify)
[![devDependencies Status](https://david-dm.org/jesselpalmer/node-emojify/dev-status.svg)](https://david-dm.org/jesselpalmer/node-emojify?type=dev)    

node-emojify
------------

Transform text into emojis. The goal of the project is to support all of the emojis that can be found 
at https://emojipedia.org/. The shortnames (ex. `:fire:`) that are supported are the ones that can be 
found https://emojipedia.org/.

## Support Status

Below is a table of the emojis that are supported by version. There may be some emojis that are 
supported in the different verisons, but there hasn't been a concerted effort to add all emojis from 
that version.

<table>
  <tr>
    <th>Verison</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Emoji 1.0</td>
    <td style="background-color:yellow;">In development</td> 
  </tr>
  <tr>
    <td>Emoji 2.0</td>
    <td style="background-color:red; color:white;">Not supported</td>  
  </tr>
  <tr>
    <td>Emoji 3.0</td>
    <td style="background-color:red; color:white;">Not supported</td> 
  </tr>
  <tr>
    <td>Emoji 4.0</td>
    <td style="background-color:red; color:white;">Not supported</td> 
  </tr>
  <tr>
    <td>Emoji 5.0</td>
    <td style="background-color:red; color:white;">Not supported</td> 
  </tr>
  <tr>
    <td>Emoji 11.0</td>
    <td style="background-color:red; color:white;">Not supported</td> 
  </tr>
  <tr>
    <td>Emoji 12.0</td>
    <td style="background-color:red; color:white;">Not supported</td> 
  </tr>
</table>

## Support

If you find any other this software useful or just think that I'm a cool guy 😊, please feel free to 
buy me a cup of coffee. I appreciate the support!
  
<a href='https://ko-fi.com/Z8Z5CIP0' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Installation
  
  ```
  npm install node-emojify
  ```

## Usage

Text that you would like to convert into emojis must be surrounded by colons, like `:grinning:`.
  
  ```js
  const emojify = require('node-emojify')

  const sentence = emojify('node is :thumbsup:')

  console.log(sentence)
  ```
  
  Output should be `node is 👍`

  If the emoji isn't supported the text will simply be ignored and not be transformed. 
  
 **Supported emojis**
  
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
    <tr>
      <td>Travel</td>
      <td><a href="https://github.com/jesselpalmer/node-emojify/blob/master/lib/emojis/travel-emojis.js">travel-emojis.js</a></td>
    </tr>
   </table>
  
  If there is an emoji that you need and is not available, please file an [issue](https://github.com/jesselpalmer/node-emojify/issues) or create a [pull request](https://github.com/jesselpalmer/node-emojify/pulls).
  
## Tests

  ```
  npm test
  ```

## Contributing

Pull requests are welcome! Please make sure that any new or changed functionality need to have unit tests accompanied with the PR. Make sure that you lint (`npm run lint`) and test your code (`npm test`).
