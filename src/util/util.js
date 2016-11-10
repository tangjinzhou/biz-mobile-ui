export const htmlFontSize = parseFloat(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize);
export function px2rem(v) {
    v = parseFloat(v);
    return v / 37.5 + 'rem';
}
export function rem2px(v) {
    v = parseFloat(v);
    return v * 37.5 + 'px';
}
const rect = document.documentElement.getBoundingClientRect();
export const deviceHeight = rect.height;
export const deviceWidth = rect.width;
//# sourceMappingURL=util.js.map