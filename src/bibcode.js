"use strict";

function extract(str) {
    var matches = String(str).match(/\b\d{4}[a-z][0-9a-z&.]{14}\b/ig);
    if (!matches) { return []; }

    return matches;
}

exports.extract = extract;
