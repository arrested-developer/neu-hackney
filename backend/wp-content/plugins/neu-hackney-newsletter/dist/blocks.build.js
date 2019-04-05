/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: neu-hackney-newsletter\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import components\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar MediaUpload = wp.editor.MediaUpload;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    BaseControl = _wp$components.BaseControl,\n    Notice = _wp$components.Notice;\n\n//  Import CSS.\n\n\n\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nregisterBlockType('neu-hackney/newsletter', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('NEU Hackney - Newsletter Block'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('neu-hackney-newsletter — CGB Block'), __('CGB Example'), __('create-guten-block')],\n\tattributes: {\n\t\tnewsletterID: {\n\t\t\ttype: 'number'\n\t\t},\n\t\tnewsletterURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: 'embed',\n\t\t\tattribute: 'src'\n\t\t},\n\t\twarningShown: {\n\t\t\ttype: 'boolean'\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar _ref$attributes = _ref.attributes,\n\t\t    newsletterID = _ref$attributes.newsletterID,\n\t\t    newsletterURL = _ref$attributes.newsletterURL,\n\t\t    warningShown = _ref$attributes.warningShown,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\tvar onSelectFile = function onSelectFile(file) {\n\t\t\tsetAttributes({\n\t\t\t\tnewsletterID: file.id,\n\t\t\t\tnewsletterURL: file.url\n\t\t\t});\n\t\t};\n\t\tif (!warningShown) {\n\t\t\twp.data.dispatch('core/notices').createNotice('warning', // Can be one of: success, info, warning, error.\n\t\t\t'Newsletter will be published with the current month and year. To publish with a different date, change the publish settings from \"Immediately\" to your chosen date in the \"Status & Visibility\" options at the top right of the screen.', // Text string to display.\n\t\t\t{\n\t\t\t\tisDismissible: true, // Whether the user can dismiss the notice.\n\t\t\t\t// Any actions the user can perform.\n\t\t\t\tactions: []\n\t\t\t});\n\t\t\tsetAttributes({\n\t\t\t\twarningShown: true\n\t\t\t});\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\tBaseControl,\n\t\t\t\t{\n\t\t\t\t\tlabel: newsletterID ? null : 'Upload NEU Hackney Newsletter in pdf format',\n\t\t\t\t\tid: 'newsletter-upload'\n\t\t\t\t},\n\t\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\t\tonSelect: onSelectFile,\n\t\t\t\t\tallowedTypes: 'pdf',\n\t\t\t\t\tvalue: newsletterID,\n\t\t\t\t\tid: 'newsletter-upload',\n\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ style: { width: '100%' } },\n\t\t\t\t\t\t\tnewsletterID && wp.element.createElement('embed', {\n\t\t\t\t\t\t\t\tsrc: newsletterURL,\n\t\t\t\t\t\t\t\ttype: 'application/pdf',\n\t\t\t\t\t\t\t\twidth: '100%',\n\t\t\t\t\t\t\t\theight: '600px'\n\t\t\t\t\t\t\t}),\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t{ className: 'button button-large', onClick: open },\n\t\t\t\t\t\t\t\t!newsletterID ? 'Upload newsletter' : 'Choose another file'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(_ref3) {\n\t\tvar className = _ref3.className,\n\t\t    newsletterURL = _ref3.attributes.newsletterURL;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement('embed', {\n\t\t\t\tsrc: newsletterURL,\n\t\t\t\ttype: 'application/pdf',\n\t\t\t\twidth: '100%',\n\t\t\t\theight: '600px'\n\t\t\t})\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IG5ldS1oYWNrbmV5LW5ld3NsZXR0ZXJcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBjb21wb25lbnRzXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgTWVkaWFVcGxvYWQgPSB3cC5lZGl0b3IuTWVkaWFVcGxvYWQ7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIEJ1dHRvbiA9IF93cCRjb21wb25lbnRzLkJ1dHRvbixcbiAgICBCYXNlQ29udHJvbCA9IF93cCRjb21wb25lbnRzLkJhc2VDb250cm9sLFxuICAgIE5vdGljZSA9IF93cCRjb21wb25lbnRzLk5vdGljZTtcblxuLy8gIEltcG9ydCBDU1MuXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5yZWdpc3RlckJsb2NrVHlwZSgnbmV1LWhhY2tuZXkvbmV3c2xldHRlcicsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnTkVVIEhhY2tuZXkgLSBOZXdzbGV0dGVyIEJsb2NrJyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCduZXUtaGFja25leS1uZXdzbGV0dGVyIOKAlCBDR0IgQmxvY2snKSwgX18oJ0NHQiBFeGFtcGxlJyksIF9fKCdjcmVhdGUtZ3V0ZW4tYmxvY2snKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRuZXdzbGV0dGVySUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0fSxcblx0XHRuZXdzbGV0dGVyVVJMOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ2F0dHJpYnV0ZScsXG5cdFx0XHRzZWxlY3RvcjogJ2VtYmVkJyxcblx0XHRcdGF0dHJpYnV0ZTogJ3NyYydcblx0XHR9LFxuXHRcdHdhcm5pbmdTaG93bjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nXG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgX3JlZiRhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBuZXdzbGV0dGVySUQgPSBfcmVmJGF0dHJpYnV0ZXMubmV3c2xldHRlcklELFxuXHRcdCAgICBuZXdzbGV0dGVyVVJMID0gX3JlZiRhdHRyaWJ1dGVzLm5ld3NsZXR0ZXJVUkwsXG5cdFx0ICAgIHdhcm5pbmdTaG93biA9IF9yZWYkYXR0cmlidXRlcy53YXJuaW5nU2hvd24sXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIG9uU2VsZWN0RmlsZSA9IGZ1bmN0aW9uIG9uU2VsZWN0RmlsZShmaWxlKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0bmV3c2xldHRlcklEOiBmaWxlLmlkLFxuXHRcdFx0XHRuZXdzbGV0dGVyVVJMOiBmaWxlLnVybFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRpZiAoIXdhcm5pbmdTaG93bikge1xuXHRcdFx0d3AuZGF0YS5kaXNwYXRjaCgnY29yZS9ub3RpY2VzJykuY3JlYXRlTm90aWNlKCd3YXJuaW5nJywgLy8gQ2FuIGJlIG9uZSBvZjogc3VjY2VzcywgaW5mbywgd2FybmluZywgZXJyb3IuXG5cdFx0XHQnTmV3c2xldHRlciB3aWxsIGJlIHB1Ymxpc2hlZCB3aXRoIHRoZSBjdXJyZW50IG1vbnRoIGFuZCB5ZWFyLiBUbyBwdWJsaXNoIHdpdGggYSBkaWZmZXJlbnQgZGF0ZSwgY2hhbmdlIHRoZSBwdWJsaXNoIHNldHRpbmdzIGZyb20gXCJJbW1lZGlhdGVseVwiIHRvIHlvdXIgY2hvc2VuIGRhdGUgaW4gdGhlIFwiU3RhdHVzICYgVmlzaWJpbGl0eVwiIG9wdGlvbnMgYXQgdGhlIHRvcCByaWdodCBvZiB0aGUgc2NyZWVuLicsIC8vIFRleHQgc3RyaW5nIHRvIGRpc3BsYXkuXG5cdFx0XHR7XG5cdFx0XHRcdGlzRGlzbWlzc2libGU6IHRydWUsIC8vIFdoZXRoZXIgdGhlIHVzZXIgY2FuIGRpc21pc3MgdGhlIG5vdGljZS5cblx0XHRcdFx0Ly8gQW55IGFjdGlvbnMgdGhlIHVzZXIgY2FuIHBlcmZvcm0uXG5cdFx0XHRcdGFjdGlvbnM6IFtdXG5cdFx0XHR9KTtcblx0XHRcdHNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHR3YXJuaW5nU2hvd246IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmFzZUNvbnRyb2wsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsYWJlbDogbmV3c2xldHRlcklEID8gbnVsbCA6ICdVcGxvYWQgTkVVIEhhY2tuZXkgTmV3c2xldHRlciBpbiBwZGYgZm9ybWF0Jyxcblx0XHRcdFx0XHRpZDogJ25ld3NsZXR0ZXItdXBsb2FkJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0XHRvblNlbGVjdDogb25TZWxlY3RGaWxlLFxuXHRcdFx0XHRcdGFsbG93ZWRUeXBlczogJ3BkZicsXG5cdFx0XHRcdFx0dmFsdWU6IG5ld3NsZXR0ZXJJRCxcblx0XHRcdFx0XHRpZDogJ25ld3NsZXR0ZXItdXBsb2FkJyxcblx0XHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHRcdHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJyB9IH0sXG5cdFx0XHRcdFx0XHRcdG5ld3NsZXR0ZXJJRCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtYmVkJywge1xuXHRcdFx0XHRcdFx0XHRcdHNyYzogbmV3c2xldHRlclVSTCxcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnYXBwbGljYXRpb24vcGRmJyxcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJzYwMHB4J1xuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdEJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnLCBvbkNsaWNrOiBvcGVuIH0sXG5cdFx0XHRcdFx0XHRcdFx0IW5ld3NsZXR0ZXJJRCA/ICdVcGxvYWQgbmV3c2xldHRlcicgOiAnQ2hvb3NlIGFub3RoZXIgZmlsZSdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IF9yZWYzLmNsYXNzTmFtZSxcblx0XHQgICAgbmV3c2xldHRlclVSTCA9IF9yZWYzLmF0dHJpYnV0ZXMubmV3c2xldHRlclVSTDtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZW1iZWQnLCB7XG5cdFx0XHRcdHNyYzogbmV3c2xldHRlclVSTCxcblx0XHRcdFx0dHlwZTogJ2FwcGxpY2F0aW9uL3BkZicsXG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdGhlaWdodDogJzYwMHB4J1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);