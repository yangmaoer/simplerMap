// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.11/esri/copyright.txt for details.
//>>built
define("esri/sniff",["dojo/_base/sniff","./kernel"],function(a,c){var d=a("ff"),e=a("ie"),l=void 0===e&&7<=a("trident"),h=a("webkit"),f=a("opera"),m=a("chrome"),n=a("safari"),k=navigator.userAgent,g;(g=k.match(/(iPhone|iPad|CPU)\s+OS\s+(\d+\_\d+)/i))&&a.add("esri-iphone",parseFloat(g[2].replace("_",".")));(g=k.match(/Android\s+(\d+\.\d+)/i))&&a.add("esri-android",parseFloat(g[1]));(g=k.match(/Fennec\/(\d+\.\d+)/i))&&a.add("esri-fennec",parseFloat(g[1]));0<=k.indexOf("BlackBerry")&&0<=k.indexOf("WebKit")&&
a.add("esri-blackberry",1);a.add("esri-touch",a("esri-iphone")||a("esri-android")||a("esri-blackberry")||6<=a("esri-fennec")||(d||h)&&document.createTouch?!0:!1);a.add("esri-pointer",navigator.pointerEnabled||navigator.msPointerEnabled);c._getDOMAccessor=function(a){var b="";d?b="Moz":h?b="Webkit":e?b="ms":f&&(b="O");return b+a.charAt(0).toUpperCase()+a.substr(1)};a.add("esri-phonegap",!!window.cordova);a.add("esri-cors",a("esri-phonegap")||"XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest);
a.add("esri-file-upload",window.FormData&&window.FileList?!0:!1);a.add("esri-workers",window.Worker?!0:!1);a.add("esri-transforms",l||9<=e||3.5<=d||4<=m||3.1<=n||10.5<=f||3.2<=a("esri-iphone")||2.1<=a("esri-android"));a.add("esri-transitions",l||10<=e||4<=d||4<=m||3.1<=n||10.5<=f||3.2<=a("esri-iphone")||2.1<=a("esri-android"));a.add("esri-transforms3d",l||10<=d||12<=m||4<=n||3.2<=a("esri-iphone")||3<=a("esri-android"));a.add("esri-url-encodes-apostrophe",function(){var a=window.document.createElement("a");
a.href="?'";return-1<a.href.indexOf("?%27")});3>a("esri-android")&&(a.add("esri-transforms",!1,!1,!0),a.add("esri-transitions",!1,!1,!0),a.add("esri-transforms3d",!1,!1,!0));c._css=function(c){var b=a("esri-transforms3d");if(void 0!==c&&null!==c)b=c;else if(b&&(m||n&&!a("esri-iphone")))b=!1;var g=b?"translate3d(":"translate(",k=b?m?",-1px)":",0px)":")",l=b?"scale3d(":"scale(",p=b?",1)":")",q=b?"rotate3d(0,0,1,":"rotate(",r=b?"matrix3d(":"matrix(",s=b?",0,0,":",",t=b?",0,0,0,0,1,0,":",",u=b?",0,1)":
")";return{names:{transition:h&&"-webkit-transition"||d&&"MozTransition"||f&&"OTransition"||e&&"msTransition"||"transition",transform:h&&"-webkit-transform"||d&&"MozTransform"||f&&"OTransform"||e&&"msTransform"||"transform",transformName:h&&"-webkit-transform"||d&&"-moz-transform"||f&&"-o-transform"||e&&"-ms-transform"||"transform",origin:h&&"-webkit-transform-origin"||d&&"MozTransformOrigin"||f&&"OTransformOrigin"||e&&"msTransformOrigin"||"transformOrigin",endEvent:h&&"webkitTransitionEnd"||d&&"transitionend"||
f&&"oTransitionEnd"||e&&"MSTransitionEnd"||"transitionend"},translate:function(a,b){return g+a+"px,"+b+"px"+k},scale:function(a){return l+a+","+a+p},rotate:function(a){return q+a+"deg)"},matrix:function(a){return r+a.xx+","+a.xy+s+a.yx+","+a.yy+t+a.dx.toFixed(10)+(d?"px,":",")+a.dy.toFixed(10)+(d?"px":"")+u}}};a("extend-esri")&&(c.isiPhone=a("esri-iphone"),c.isAndroid=a("esri-android"),c.isFennec=a("esri-fennec"),c.isBlackBerry=a("esri-blackberry"),c.isTouchEnabled=a("esri-touch"),c.isPointerEnabled=
a("esri-pointer"),c._hasCors=a("esri-cors"),c._hasFileUpload=a("esri-file-upload"),c._hasTransforms=a("esri-transforms"),c._hasTransitions=a("esri-transitions"),c._has3DTransforms=a("esri-transforms3d"));return a});