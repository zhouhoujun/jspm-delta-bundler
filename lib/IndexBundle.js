"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},__decorate=function(e,t,n,o){var r,c=arguments.length,i=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(i=(c<3?r(i):c>3?r(t,n,i):r(t,n))||i);return c>3&&i&&Object.defineProperty(t,n,i),i},__metadata=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},development_core_1=require("development-core"),htmlreplace=require("gulp-html-replace"),IndexBundle=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="mainindex",n}return _inherits(t,e),_createClass(t,[{key:"source",value:function(e,t,n){var o=e.option,r=void 0;return r=o.index?o.index:"src/index.html",n.src(e.toRootSrc(r))}},{key:"pipes",value:function e(t,n,o){var r=t.option,c=t.getPackage(),e=[function(e){return htmlreplace({js:e.toStr(r.mainfile)+"?bust="+(e.toStr(r.bust)||c.version)})}];return r.indexPipes&&r.indexPipes.length>0&&(e=e.concat(r.indexPipes)),e}}]),t}(development_core_1.PipeTask);IndexBundle=__decorate([development_core_1.task({order:1,oper:development_core_1.Operation.release|development_core_1.Operation.deploy}),__metadata("design:paramtypes",[Object])],IndexBundle),exports.IndexBundle=IndexBundle;
//# sourceMappingURL=sourcemaps/IndexBundle.js.map