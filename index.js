var icuConverter = require('icu-converter');

module.exports = function(source) {
    var jsobj = icuConverter.parse(source);

    return "module.exports = " + JSON.stringify(jsobj);
}
