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
/***/ (function(module, exports) {

$(function () {
  if ($('body').hasClass('loginPage')) {
    loginButton.onclick = function (e) {
      e.preventDefault();
      var loginForm = document.getElementById('loginMenu');
      $("body").css("cursor", "wait");
      $(e.target).css("cursor", "wait");
      lib.lasfter.db.login({
        email: loginForm.email.value,
        password: loginForm.password.value
      }).then(function (data) {
        return document.cookie = JSON.stringify(data);
      }).then(function () {
        return window.location = "landing.html";
      }).catch(function (err) {
        return console.log(err);
      });
    };
  }

  if ($('body').hasClass('signupPage')) {
    signupButton.onclick = function (e) {
      e.preventDefault();
      var signupForm = document.getElementById('signupMenu');
      $("body").css("cursor", "wait");
      $(e.target).css("cursor", "wait");
      lib.lasfter.db.signup({
        email: signupForm.email.value,
        password: signupForm.password.value
      }).then(function (data) {
        return document.cookie = JSON.stringify(data);
      }).then(function () {
        return window.location = "login.html";
      }).catch(function (err) {
        $("body").css("cursor", "default");
        $(e.target).css("cursor", "default");
        console.log(err);
      });
    };
  } // reloadUserData for events page


  if ($('body').hasClass('landing')) {// call reloadUserData
  }
});

/***/ })
/******/ ]);