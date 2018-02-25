[![npm version](https://badge.fury.io/js/icurb-loader.svg)](http://badge.fury.io/js/icurb-loader)

# icurb-loader
version 0.1.0

icurb-loader is a webpack loader for [ICU Resource Bundles](http://userguide.icu-project.org/locale/resources). It uses [icu-converter](https://github.com/alex-dow/icu-converter) to convert the bundles into a javascript object.

## Installation

```
npm install icurb-loader
```

### Usage

```javascript

# example webpack.config.js

module.exports = {
    module: {
        rules: [{
          test: /\.icu/,
          loader: 'icurb-loader'
        }]
    }
};
```

See the [example project](https://github.com/alex-dow/icurb-loader) for a complete example.
