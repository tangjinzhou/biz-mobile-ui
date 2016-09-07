document.ready = function(){

}
var dpr, rem, scale;
var docEl = document.documentElement;
var metaEl = document.querySelector('meta[name="viewport"]');

dpr = window.devicePixelRatio || 1;
scale = 1 / dpr;
// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute('content', 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute('data-dpr', dpr);

var updateView = function(width){
    rem = width / 10;
    docEl.style.fontSize = rem + 'px';
}

updateView(Math.min(docEl.getBoundingClientRect().width, docEl.getBoundingClientRect().height));

var a;
window.addEventListener("resize", function(){
    clearTimeout(a);
    a = setTimeout(function(){
        updateView(Math.min(docEl.getBoundingClientRect().width, docEl.getBoundingClientRect().height));
    }, 300);
}, false)

window.dpr = dpr;
window.rem = rem;
window.rem2px = function(v) {
    v = parseFloat(v);
    return v * rem;
};
window.px2rem = function(v) {
    v = parseFloat(v);
    return v / rem;
};
