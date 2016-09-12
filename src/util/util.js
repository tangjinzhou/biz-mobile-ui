"use strict";
exports.htmlFontSize = parseFloat(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize);
function px2rem(v) {
    v = parseFloat(v);
    return v / exports.htmlFontSize + 'rem';
}
exports.px2rem = px2rem;
function rem2px(v) {
    v = parseFloat(v);
    return v * exports.htmlFontSize + 'px';
}
exports.rem2px = rem2px;
//# sourceMappingURL=util.js.map