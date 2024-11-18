# Identifiers - Bibcode

Extract, validate and normalize [ADS Bibcodes](http://adsabs.harvard.edu/abs_doc/help_pages/data.html).

**Current version:** 0.1.1  
**Supported Node.js versions:** 18, 20, 22, 23

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

Copyright © 2017-2024 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
