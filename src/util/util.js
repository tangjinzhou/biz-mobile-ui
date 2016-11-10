"use strict";
exports.htmlFontSize = parseFloat(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize);
function px2rem(v) {
    v = parseFloat(v);
    return v / 37.5 + 'rem';
}
exports.px2rem = px2rem;
function rem2px(v) {
    v = parseFloat(v);
    return v * 37.5 + 'px';
}
exports.rem2px = rem2px;
var rect = document.documentElement.getBoundingClientRect();
exports.deviceHeight = rect.height;
exports.deviceWidth = rect.width;
//# sourceMappingURL=util.js.map