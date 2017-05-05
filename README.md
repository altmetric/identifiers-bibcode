# Identifiers - Bibcode [![Build Status](https://travis-ci.org/altmetric/identifiers-bibcode.svg?branch=master)](https://travis-ci.org/altmetric/identifiers-bibcode)

Extract, validate and normalize [ADS Bibcodes](http://adsabs.harvard.edu/abs_doc/help_pages/data.html).

**Current version:** 0.1.0  
**Supported Node.js versions:** 4, 5, 6, 7

## Installation

Add the following to your `package.json` via `yarn add identifiers-bibcode` or `npm install --save identifiers-bibcode`:

```shell
"identifiers-bibcode": "^0.1.0"
```

## Usage

```javascript
const bibcode = require("identifiers-bibcode");

bibcode.extract("This is a Bibcode: 1974AJ.....79..819H");
//=> ["1974AJ.....79..819H"]
```

## Other versions

We also maintain versions of this library for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
