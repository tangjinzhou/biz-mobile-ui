export const htmlFontSize = parseFloat(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize);

export function px2rem(v){
    v = parseFloat(v);
    return v / htmlFontSize + 'rem';
}

export function rem2px(v){
    v = parseFloat(v);
    return v * htmlFontSize + 'px';
}