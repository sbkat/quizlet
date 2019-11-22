(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n  <title>Socket Trivia</title>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"navbar\">\r\n      <button [routerLink]=\"['/homepage']\" class=\"l-button\">Home</button>\r\n      <button [routerLink]=\"['/game-platform']\" class=\"l-button\">Play now!</button>\r\n      <button [routerLink]=\"['/signup']\" class=\"r-button\">Sign up!</button>\r\n      <button [routerLink]=\"['/login']\" class=\"r-button\">Login</button>\r\n  </div>\r\n  <div class=\"router-outlet\">\r\n    <!-- <app-quiz-list></app-quiz-list>\r\n    <app-quiz></app-quiz> -->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n\r\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/available-quizzes/available-quizzes.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/available-quizzes/available-quizzes.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-quiz/create-quiz.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-quiz/create-quiz.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form\">\r\n    <p *ngIf=\"errorMsg\" style=\"color:red\">\r\n        {{ errorMsg }}\r\n    </p>\r\n    <form (submit)=\"createQuiz()\">\r\n        <h3>Create your own quiz~</h3>\r\n        <label for=\"title\">Title:</label><br>\r\n        <input type=\"text\" name=\"title\" [(ngModel)]='newQuiz.title'><br>\r\n\r\n        <div *ngFor=\"let newQuestion of newQuiz.questions; let i = index\">\r\n            <label for=\"question\">Question {{i+1}}:</label><br>\r\n            <input type=\"text\" name=\"question{{i}}\" placeholder=\"Enter your question here\"\r\n                [(ngModel)]='newQuiz.questions[i].question'><br>\r\n            <input type=\"text\" name=\"option-{{i}}a\" placeholder=\"Correct answer here\"\r\n                [(ngModel)]='newQuiz.questions[i].options[0]'><br>\r\n            <input type=\"text\" name=\"option-{{i}}b\" placeholder=\"Incorrect answer here\"\r\n                [(ngModel)]='newQuiz.questions[i].options[1]'><br>\r\n            <input type=\"text\" name=\"option-{{i}}c\" placeholder=\"Incorrect answer here\"\r\n                [(ngModel)]='newQuiz.questions[i].options[2]'><br>\r\n            <input type=\"text\" name=\"option-{{i}}d\" placeholder=\"Incorrect answer here\"\r\n                [(ngModel)]='newQuiz.questions[i].options[3]'><br>\r\n        </div>\r\n\r\n        <button (click)=\"additionalQuestion()\" type=\"button\">Add a question</button>\r\n        <button type=\"submit\">Create quiz</button>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, {{ currentUser.username }}!</h1>\r\n\r\n<span (click)=\"openNav()\">&#9776; Available Quizzes</span>\r\n\r\n<div id=\"mySidenav\" class=\"sidenav\">\r\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n    <h3>Available Quizzes</h3>\r\n    <ul *ngFor=\"let quiz of allQuiz\">\r\n        <li><a [routerLink]=\"\">{{ quiz.title }}</a></li>\r\n    </ul>\r\n</div>\r\n\r\n\r\n<div class=\"component\">\r\n    <app-create-quiz [allQuiz]=\"allQuiz\"></app-create-quiz>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game-platform/game-platform.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-platform/game-platform.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <form (submit)=\"submitPlayer()\">\r\n        <h1>Enter your player info!</h1>\r\n        <label for=\"pin\">Game pin:</label>\r\n        <input type=\"pin\" name=\"pin\">\r\n        <br>\r\n        <label for=\"nickname\">Nickname:</label>\r\n        <input type=\"nickname\" name=\"nickname\">\r\n        <br>\r\n        <button type=\"submit\">Let's play!</button>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h1>Welcome to Socket Trivia,</h1>\r\n    <p>A fun and interactive learning platform to get your audience engaged.</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <p *ngIf=\"errorMsg\" style=\"color:red\">\r\n      {{ errorMsg }}\r\n    </p>\r\n</div>\r\n<div>\r\n    <form (submit)=\"login()\">\r\n        <h1>Login</h1>\r\n        <label for=\"email\">Email:</label>\r\n        <input type=\"email\" name=\"email\" [(ngModel)]='loginUser.email'>\r\n        <br>\r\n        <label for=\"password\">Password:</label>\r\n        <input type=\"password\" name=\"password\" [(ngModel)]='loginUser.password'>\r\n        <br>\r\n        <br>\r\n        <button type=\"submit\">Let's go!</button>\r\n    </form>\r\n    <p>Don't have an account? <a [routerLink]=\"['/signup']\">Sign up here</a></p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-list/quiz-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-list/quiz-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<span (click)=\"openNav()\">&#9776; Available Quizzes</span>\r\n\r\n<div id=\"mySidenav\" class=\"sidenav\">\r\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\r\n    <h3>Available Quizzes</h3>\r\n    <ul *ngFor=\"let quiz of quizes\">\r\n        <li><a [routerLink]=\"\">{{ quiz.title }}</a></li>\r\n    </ul>\r\n</div>\r\n\r\n<app-socket-room></app-socket-room>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <p *ngIf=\"errorMsg\" style=\"color:red\">\r\n      {{ errorMsg }}\r\n    </p>\r\n</div>\r\n<div>\r\n    <form (submit)=\"register()\">\r\n        <h1>Sign up!</h1>\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\" name=\"username\" [(ngModel)]='newUser.username'>\r\n        <br>\r\n        <label for=\"email\">Email:</label>\r\n        <input type=\"email\" name=\"email\" [(ngModel)]='newUser.email'>\r\n        <br>\r\n        <label for=\"password\">Password:</label>\r\n        <input type=\"password\" name=\"password\" [(ngModel)]='newUser.password'>\r\n        <br>\r\n        <button type=\"submit\">Submit</button>\r\n    </form>\r\n    <p>Already have an account? <a [routerLink]=\"['/login']\">Login here</a></p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/socket-room/socket-room.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socket-room/socket-room.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>socket-room works!</p>\r\n<div>\r\n    <h4>Question 1: {{}}</h4>\r\n    <textarea class=\"answer\" [(ngModel)]='quiz.quiz' (keyup)='editQuiz()' placeholder='Whats your answer?'></textarea>\r\n    <h4>Question 2: {{}}</h4>\r\n    <textarea class=\"answer\" [(ngModel)]='quiz.quiz' (keyup)='editQuiz()' placeholder='Whats your answer?'></textarea>\r\n    <h4>Question 3: {{}}</h4>\r\n    <textarea class=\"answer\" [(ngModel)]='quiz.quiz' (keyup)='editQuiz()' placeholder='Whats your answer?'></textarea>\r\n    <h4>Question 4: {{}}</h4>\r\n    <textarea class=\"answer\" [(ngModel)]='quiz.quiz' (keyup)='editQuiz()' placeholder='Whats your answer?'></textarea>\r\n    <h4>Question 5: {{}}</h4>\r\n    <textarea class=\"answer\" [(ngModel)]='quiz.quiz' (keyup)='editQuiz()' placeholder='Whats your answer?'></textarea>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _game_platform_game_platform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-platform/game-platform.component */ "./src/app/game-platform/game-platform.component.ts");
/* harmony import */ var _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-quiz/create-quiz.component */ "./src/app/create-quiz/create-quiz.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _available_quizzes_available_quizzes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./available-quizzes/available-quizzes.component */ "./src/app/available-quizzes/available-quizzes.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");











const routes = [
    { path: 'quiz-list', component: _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_10__["QuizListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'game-platform', component: _game_platform_game_platform_component__WEBPACK_IMPORTED_MODULE_4__["GamePlatformComponent"] },
    { path: 'create-quiz', component: _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_5__["CreateQuizComponent"] },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'available', component: _available_quizzes_available_quizzes_component__WEBPACK_IMPORTED_MODULE_7__["AvailableQuizzesComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/homepage' },
    { path: '*', pathMatch: 'full', redirectTo: '/' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  background-color: #383535;\n  height: 100vh;\n  margin: 0;\n  text-align: center;\n}\n\n* {\n  font-family: \"Raleway\", sans-serif;\n  color: white;\n}\n\n* input {\n  color: black;\n  margin: 3px;\n  font-size: 14px;\n}\n\nbutton {\n  border: 1px solid white;\n  background-color: white;\n  color: #383535;\n  border-radius: 5px;\n  margin: 5px;\n}\n\np {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.button {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.l-button {\n  float: left;\n}\n\n.r-button {\n  float: right;\n}\n\nbody {\n  padding: 20px;\n}\n\n.navbar {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxLYXRoeVxcRGVza3RvcFxcY29sbGFiXFxzb2NrZXRfdHJpdmlhXFxwdWJsaWMvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXEthdGh5XFxEZXNrdG9wXFxjb2xsYWJcXHNvY2tldF90cml2aWFcXHB1YmxpYy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUNJLHlCQXRCWTtFQXVCWixhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDeEJKOztBRDJCQTtFQUNJLGtDQWhDYTtFQWlDYixZQTVCYTtBQ0lqQjs7QUR5Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN2QlI7O0FEMkJBO0VBQ0ksdUJBQUE7RUFDQSx1QkF0Q2E7RUF1Q2IsY0F6Q1k7RUEwQ1osa0JBQUE7RUFDQSxXQUFBO0FDeEJKOztBQ2pCQTtFRlVJLHFCQUFBO0VBQ0Esc0JBQUE7QUNXSjs7QUNsQkE7RUZNSSxxQkFBQTtFQUNBLHNCQUFBO0FDZ0JKOztBQ25CQTtFQUNJLFdBQUE7QURzQko7O0FDbkJBO0VBQ0ksWUFBQTtBRHNCSjs7QUNuQkE7RUFDSSxhQUFBO0FEc0JKOztBQ25CQTtFQUNJLGNBQUE7QURzQkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1mb250OiAnSnVsaXVzIFNhbnMgT25lJywgc2Fucy1zZXJpZjtcclxuJHNlY29uZGFyeS1mb250OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiR0ZXJ0aWFyeS1mb250OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiByZ2IoNTYsIDUzLCA1Myk7XHJcbiRzZWNvbmRhcnktY29sb3I6IHJnYigxNjEsIDE1OSwgMTU5KTtcclxuJHRlcnRpYXJ5LWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblxyXG5AbWl4aW4gZmxleENlbnRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGlubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5AbWl4aW4gYmxvY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XHJcbiAgICBjb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW46IDNweDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR0ZXJ0aWFyeS1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59IiwiaHRtbCwgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM1MzU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG59XG4qIGlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMzgzNTM1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubC1idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnItYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSIsIkBpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi8vIC5yb3V0ZXItb3V0bGV0IHtcclxuLy8gICAgIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcclxuLy8gfVxyXG5cclxucCB7XHJcbiAgICBAaW5jbHVkZSBpbmxpbmUoKTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBpbmxpbmUoKTtcclxufVxyXG5cclxuLmwtYnV0dG9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uci1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-quiz/create-quiz.component */ "./src/app/create-quiz/create-quiz.component.ts");
/* harmony import */ var _game_platform_game_platform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game-platform/game-platform.component */ "./src/app/game-platform/game-platform.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _available_quizzes_available_quizzes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./available-quizzes/available-quizzes.component */ "./src/app/available-quizzes/available-quizzes.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quiz-list/quiz-list.component */ "./src/app/quiz-list/quiz-list.component.ts");
/* harmony import */ var _socket_room_socket_room_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./socket-room/socket-room.component */ "./src/app/socket-room/socket-room.component.ts");















// socket Module



const config = { url: 'http://localhost:4200', options: {} };
let AppModule = class AppModule {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
};
AppModule.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["SignUpComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _create_quiz_create_quiz_component__WEBPACK_IMPORTED_MODULE_11__["CreateQuizComponent"],
            _game_platform_game_platform_component__WEBPACK_IMPORTED_MODULE_12__["GamePlatformComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
            _available_quizzes_available_quizzes_component__WEBPACK_IMPORTED_MODULE_14__["AvailableQuizzesComponent"],
            _quiz_list_quiz_list_component__WEBPACK_IMPORTED_MODULE_16__["QuizListComponent"],
            _socket_room_socket_room_component__WEBPACK_IMPORTED_MODULE_17__["SocketRoomComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_15__["SocketIoModule"].forRoot(config)
        ],
        providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/available-quizzes/available-quizzes.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/available-quizzes/available-quizzes.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2YWlsYWJsZS1xdWl6emVzL2F2YWlsYWJsZS1xdWl6emVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/available-quizzes/available-quizzes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/available-quizzes/available-quizzes.component.ts ***!
  \******************************************************************/
/*! exports provided: AvailableQuizzesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableQuizzesComponent", function() { return AvailableQuizzesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AvailableQuizzesComponent = class AvailableQuizzesComponent {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    ngOnInit() {
    }
};
AvailableQuizzesComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AvailableQuizzesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-available-quizzes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./available-quizzes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/available-quizzes/available-quizzes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./available-quizzes.component.scss */ "./src/app/available-quizzes/available-quizzes.component.scss")).default]
    })
], AvailableQuizzesComponent);



/***/ }),

/***/ "./src/app/create-quiz/create-quiz.component.scss":
/*!********************************************************!*\
  !*** ./src/app/create-quiz/create-quiz.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  background-color: #383535;\n  height: 100vh;\n  margin: 0;\n  text-align: center;\n}\n\n* {\n  font-family: \"Raleway\", sans-serif;\n  color: white;\n}\n\n* input {\n  color: black;\n  margin: 3px;\n  font-size: 14px;\n}\n\nbutton {\n  border: 1px solid white;\n  background-color: white;\n  color: #383535;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n.form {\n  border: 1px solid #a19f9f;\n  padding: 20px;\n}\n\ninput {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXF1aXovQzpcXFVzZXJzXFxLYXRoeVxcRGVza3RvcFxcY29sbGFiXFxzb2NrZXRfdHJpdmlhXFxwdWJsaWMvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY3JlYXRlLXF1aXovY3JlYXRlLXF1aXouY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS1xdWl6L0M6XFxVc2Vyc1xcS2F0aHlcXERlc2t0b3BcXGNvbGxhYlxcc29ja2V0X3RyaXZpYVxccHVibGljL3NyY1xcYXBwXFxjcmVhdGUtcXVpelxcY3JlYXRlLXF1aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBO0VBQ0kseUJBdEJZO0VBdUJaLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUN4Qko7O0FEMkJBO0VBQ0ksa0NBaENhO0VBaUNiLFlBNUJhO0FDSWpCOztBRHlCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3ZCUjs7QUQyQkE7RUFDSSx1QkFBQTtFQUNBLHVCQXRDYTtFQXVDYixjQXpDWTtFQTBDWixrQkFBQTtFQUNBLFdBQUE7QUN4Qko7O0FDckJBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FEd0JKOztBQ3JCQTtFQUNJLFVBQUE7QUR3QkoiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtcXVpei9jcmVhdGUtcXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWZvbnQ6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4kc2Vjb25kYXJ5LWZvbnQ6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuJHRlcnRpYXJ5LWZvbnQ6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJHByaW1hcnktY29sb3I6IHJnYig1NiwgNTMsIDUzKTtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDE2MSwgMTU5LCAxNTkpO1xyXG4kdGVydGlhcnktY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbkBtaXhpbiBmbGV4Q2VudGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbkBtaXhpbiBibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcclxuICAgIGNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iLCJodG1sLCBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzUzNTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiogaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMzODM1MzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5mb3JtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ExOWY5ZjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogOTAlO1xufSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi5mb3JtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/create-quiz/create-quiz.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-quiz/create-quiz.component.ts ***!
  \******************************************************/
/*! exports provided: CreateQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuizComponent", function() { return CreateQuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreateQuizComponent = class CreateQuizComponent {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.errorMsg = [];
    }
    ngOnInit() {
        this.newQuiz = {
            title: '',
            questions: [{
                    question: '',
                    options: [],
                }]
        };
    }
    createQuiz() {
        console.log('in the component');
        const obs = this.httpService.createQuiz(this.newQuiz);
        obs.subscribe((data) => {
            console.log('data:', data);
            if (data.hasOwnProperty('errors')) {
                this.errorMsg = data.errors.message;
            }
            else {
                this.router.navigate(['/quiz-list']);
                this.allQuiz.push(this.newQuiz);
                this.newQuiz = {
                    title: '',
                    questions: [{
                            question: '',
                            options: [],
                        }]
                };
            }
        });
    }
    additionalQuestion() {
        this.newQuiz.questions.push({
            question: '',
            options: [],
        });
    }
};
CreateQuizComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CreateQuizComponent.prototype, "allQuiz", void 0);
CreateQuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-quiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-quiz/create-quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-quiz.component.scss */ "./src/app/create-quiz/create-quiz.component.scss")).default]
    })
], CreateQuizComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  background-color: #383535;\n  height: 100vh;\n  margin: 0;\n  text-align: center;\n}\n\n* {\n  font-family: \"Raleway\", sans-serif;\n  color: white;\n}\n\n* input {\n  color: black;\n  margin: 3px;\n  font-size: 14px;\n}\n\nbutton {\n  border: 1px solid white;\n  background-color: white;\n  color: #383535;\n  border-radius: 5px;\n  margin: 5px;\n}\n\nhtml, body {\n  background-color: #383535;\n  height: 100vh;\n  margin: 0;\n  text-align: center;\n}\n\n* {\n  font-family: \"Raleway\", sans-serif;\n  color: white;\n}\n\n* input {\n  color: black;\n  margin: 3px;\n  font-size: 14px;\n}\n\nbutton {\n  border: 1px solid white;\n  background-color: white;\n  color: #383535;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n.form {\n  border: 1px solid #a19f9f;\n  padding: 20px;\n}\n\ninput {\n  width: 90%;\n}\n\n.component {\n  justify-content: center;\n  width: 90%;\n  display: inline-block;\n  vertical-align: middle;\n}\n\ndiv {\n  vertical-align: top;\n}\n\nul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\nul li {\n  margin: 2px;\n}\n\nul li a {\n  text-decoration: none;\n  color: #67ec67;\n  padding-left: 8px;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 20px;\n  margin-left: 0px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcS2F0aHlcXERlc2t0b3BcXGNvbGxhYlxcc29ja2V0X3RyaXZpYVxccHVibGljL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9DOlxcVXNlcnNcXEthdGh5XFxEZXNrdG9wXFxjb2xsYWJcXHNvY2tldF90cml2aWFcXHB1YmxpYy9zcmNcXGFwcFxcY3JlYXRlLXF1aXpcXGNyZWF0ZS1xdWl6LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvQzpcXFVzZXJzXFxLYXRoeVxcRGVza3RvcFxcY29sbGFiXFxzb2NrZXRfdHJpdmlhXFxwdWJsaWMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUNJLHlCQXRCWTtFQXVCWixhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDeEJKOztBRDJCQTtFQUNJLGtDQWhDYTtFQWlDYixZQTVCYTtBQ0lqQjs7QUR5Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN2QlI7O0FEMkJBO0VBQ0ksdUJBQUE7RUFDQSx1QkF0Q2E7RUF1Q2IsY0F6Q1k7RUEwQ1osa0JBQUE7RUFDQSxXQUFBO0FDeEJKOztBREVBO0VBQ0kseUJBdEJZO0VBdUJaLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQWhDYTtFQWlDYixZQTVCYTtBQzZCakI7O0FEQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsdUJBdENhO0VBdUNiLGNBekNZO0VBMENaLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBQzlDQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBRGlESjs7QUM5Q0E7RUFDSSxVQUFBO0FEaURKOztBRXREQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFSFdBLHFCQUFBO0VBQ0Esc0JBQUE7QUMrQ0o7O0FFdkRBO0VBQ0ksbUJBQUE7QUYwREo7O0FFdkRBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRjBESjs7QUV6REk7RUFDSSxXQUFBO0FGMkRSOztBRTFEUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FGNERaOztBRXZEQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FGMERKOztBRXZEQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUYwREo7O0FFdkRBO0VBQ0ksY0FBQTtBRjBESjs7QUV2REE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGMERKOztBRXZEQTtFQUNJO0lBQVUsaUJBQUE7RUYyRFo7O0VFMURFO0lBQVksZUFBQTtFRjhEZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWZvbnQ6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4kc2Vjb25kYXJ5LWZvbnQ6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuJHRlcnRpYXJ5LWZvbnQ6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJHByaW1hcnktY29sb3I6IHJnYig1NiwgNTMsIDUzKTtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDE2MSwgMTU5LCAxNTkpO1xyXG4kdGVydGlhcnktY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbkBtaXhpbiBmbGV4Q2VudGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbkBtaXhpbiBibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcclxuICAgIGNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iLCJodG1sLCBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzUzNTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiogaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMzODM1MzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmh0bWwsIGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzNTM1O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuKiBpbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzM4MzUzNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmZvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTE5ZjlmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb21wb25lbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5kaXYge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG51bCBsaSB7XG4gIG1hcmdpbjogMnB4O1xufVxudWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2N2VjNjc7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnNpZGVuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuXG4gIC5zaWRlbmF2IGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi5mb3JtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi9jcmVhdGUtcXVpei9jcmVhdGUtcXVpei5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4uY29tcG9uZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIEBpbmNsdWRlIGlubGluZTtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTAzLCAyMzYsIDEwMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuICBcclxuLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DashboardComponent = class DashboardComponent {
    constructor(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.allQuiz = [];
    }
    ngOnInit() {
        this.getCurrentUser();
        this.allQuizzes();
    }
    getCurrentUser() {
        let obs = this._httpService.getCurrentUser();
        obs.subscribe((data) => {
            if (data.sessionStatus == false) {
                this._router.navigate(['/']);
            }
            else {
                this.currentUser = data;
            }
        });
    }
    allQuizzes() {
        let observable = this._httpService.allQuizzes();
        observable.subscribe((data) => {
            this.allQuiz = data.quizzes;
        });
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/game-platform/game-platform.component.scss":
/*!************************************************************!*\
  !*** ./src/app/game-platform/game-platform.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtcGxhdGZvcm0vZ2FtZS1wbGF0Zm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/game-platform/game-platform.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/game-platform/game-platform.component.ts ***!
  \**********************************************************/
/*! exports provided: GamePlatformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePlatformComponent", function() { return GamePlatformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GamePlatformComponent = class GamePlatformComponent {
    constructor() { }
    ngOnInit() {
    }
};
GamePlatformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-platform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-platform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game-platform/game-platform.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-platform.component.scss */ "./src/app/game-platform/game-platform.component.scss")).default]
    })
], GamePlatformComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.errorMsg = [];
    }
    ngOnInit() {
        this.loginUser = {
            email: '',
            password: '',
        };
    }
    login() {
        const obs = this.httpService.login(this.loginUser);
        obs.subscribe((data) => {
            console.log('data:', data);
            if (data.errorMessage) {
                this.errorMsg = data.errorMessage;
            }
            else {
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  background-color: #383535;\n  height: 100vh;\n  margin: 0;\n  text-align: center;\n}\n\n* {\n  font-family: \"Raleway\", sans-serif;\n  color: white;\n}\n\n* input {\n  color: black;\n  margin: 3px;\n  font-size: 14px;\n}\n\nbutton {\n  border: 1px solid white;\n  background-color: white;\n  color: #383535;\n  border-radius: 5px;\n  margin: 5px;\n}\n\nhtml, body {\n  background-color: #383535;\n  height: 100vh;\n  margin: 0;\n  text-align: center;\n}\n\n* {\n  font-family: \"Raleway\", sans-serif;\n  color: white;\n}\n\n* input {\n  color: black;\n  margin: 3px;\n  font-size: 14px;\n}\n\nbutton {\n  border: 1px solid white;\n  background-color: white;\n  color: #383535;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n.form {\n  border: 1px solid #a19f9f;\n  padding: 20px;\n}\n\ninput {\n  width: 90%;\n}\n\n.component {\n  justify-content: center;\n  width: 90%;\n  display: inline-block;\n  vertical-align: middle;\n}\n\ndiv {\n  vertical-align: top;\n}\n\nul {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\nul li {\n  margin: 2px;\n}\n\nul li a {\n  text-decoration: none;\n  color: #67ec67;\n  padding-left: 8px;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 20px;\n  margin-left: 0px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei1saXN0L0M6XFxVc2Vyc1xcS2F0aHlcXERlc2t0b3BcXGNvbGxhYlxcc29ja2V0X3RyaXZpYVxccHVibGljL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3F1aXotbGlzdC9xdWl6LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1aXotbGlzdC9DOlxcVXNlcnNcXEthdGh5XFxEZXNrdG9wXFxjb2xsYWJcXHNvY2tldF90cml2aWFcXHB1YmxpYy9zcmNcXGFwcFxcY3JlYXRlLXF1aXpcXGNyZWF0ZS1xdWl6LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWl6LWxpc3QvQzpcXFVzZXJzXFxLYXRoeVxcRGVza3RvcFxcY29sbGFiXFxzb2NrZXRfdHJpdmlhXFxwdWJsaWMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUNJLHlCQXRCWTtFQXVCWixhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDeEJKOztBRDJCQTtFQUNJLGtDQWhDYTtFQWlDYixZQTVCYTtBQ0lqQjs7QUR5Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN2QlI7O0FEMkJBO0VBQ0ksdUJBQUE7RUFDQSx1QkF0Q2E7RUF1Q2IsY0F6Q1k7RUEwQ1osa0JBQUE7RUFDQSxXQUFBO0FDeEJKOztBREVBO0VBQ0kseUJBdEJZO0VBdUJaLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQWhDYTtFQWlDYixZQTVCYTtBQzZCakI7O0FEQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsdUJBdENhO0VBdUNiLGNBekNZO0VBMENaLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBQzlDQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBRGlESjs7QUM5Q0E7RUFDSSxVQUFBO0FEaURKOztBRXREQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFSFdBLHFCQUFBO0VBQ0Esc0JBQUE7QUMrQ0o7O0FFdkRBO0VBQ0ksbUJBQUE7QUYwREo7O0FFdkRBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRjBESjs7QUV6REk7RUFDSSxXQUFBO0FGMkRSOztBRTFEUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FGNERaOztBRXZEQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FGMERKOztBRXZEQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUYwREo7O0FFdkRBO0VBQ0ksY0FBQTtBRjBESjs7QUV2REE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGMERKOztBRXZEQTtFQUNJO0lBQVUsaUJBQUE7RUYyRFo7O0VFMURFO0lBQVksZUFBQTtFRjhEZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcXVpei1saXN0L3F1aXotbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWZvbnQ6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4kc2Vjb25kYXJ5LWZvbnQ6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuJHRlcnRpYXJ5LWZvbnQ6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG5cclxuJHByaW1hcnktY29sb3I6IHJnYig1NiwgNTMsIDUzKTtcclxuJHNlY29uZGFyeS1jb2xvcjogcmdiKDE2MSwgMTU5LCAxNTkpO1xyXG4kdGVydGlhcnktY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbkBtaXhpbiBmbGV4Q2VudGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gaW5saW5lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbkBtaXhpbiBibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcclxuICAgIGNvbG9yOiAkdGVydGlhcnktY29sb3I7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlcnRpYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iLCJodG1sLCBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzUzNTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiogaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMzODM1MzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmh0bWwsIGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzNTM1O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuKiBpbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzM4MzUzNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmZvcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTE5ZjlmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb21wb25lbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5kaXYge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG51bCBsaSB7XG4gIG1hcmdpbjogMnB4O1xufVxudWwgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2N2VjNjc7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLnNpZGVuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5zaWRlbmF2IHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuXG4gIC5zaWRlbmF2IGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcclxuXHJcbi5mb3JtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59IiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi9jcmVhdGUtcXVpei9jcmVhdGUtcXVpei5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4uY29tcG9uZW50IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIEBpbmNsdWRlIGlubGluZTtcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGxpIHtcclxuICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTAzLCAyMzYsIDEwMyk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuICBcclxuLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/quiz-list/quiz-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-list/quiz-list.component.ts ***!
  \**************************************************/
/*! exports provided: QuizListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizListComponent", function() { return QuizListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");




let QuizListComponent = class QuizListComponent {
    constructor(webSocketService, httpService) {
        this.webSocketService = webSocketService;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.quizes = this.webSocketService.quizes;
        this._quizSub = this.webSocketService.currentQuiz.subscribe(quiz => this.currentQuiz = quiz.id);
        this.allQuizes();
    }
    ngOnDestroy() {
        this._quizSub.unsubscribe();
    }
    loadQuiz(id) {
        this.webSocketService.getQuiz(id);
    }
    allQuizes() {
        this.httpService.allQuizzes()
            .subscribe((data) => {
            this.quizes = data.quizzes;
            console.log(this.quizes);
        });
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
};
QuizListComponent.ctorParameters = () => [
    { type: src_app_services_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebsocketService"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
QuizListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-document-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz-list/quiz-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz-list.component.scss */ "./src/app/quiz-list/quiz-list.component.scss")).default]
    })
], QuizListComponent);



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    register(newUser) {
        return this._http.post('/api/register', newUser);
    }
    login(loginUser) {
        return this._http.post('/api/login', loginUser);
    }
    getCurrentUser() {
        return this._http.get('/api/current-user');
    }
    all() {
        return this._http.get('/api/users');
    }
    createQuiz(newQuiz) {
        return this._http.post('/api/create-quiz', newQuiz);
    }
    allQuizzes() {
        return this._http.get('/api/quizzes');
    }
    findQuiz(id) {
        return this._http.get('/api/quizzes/' + id);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let WebsocketService = class WebsocketService {
    constructor(socket, httpService) {
        this.socket = socket;
        this.httpService = httpService;
        this.currentQuiz = this.socket.fromEvent('quiz');
        this.quizes = this.socket.fromEvent('quizes');
    }
    getQuiz(id) {
        this.socket.emit('getQuiz', id);
    }
    newQuiz(quiz) {
        this.socket.emit('addQuiz', { id: this.quizId(quiz) });
    }
    quizId(quiz) {
        let text = this.httpService.findQuiz(quiz._id);
    }
};
WebsocketService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebsocketService);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignUpComponent = class SignUpComponent {
    constructor(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.errorMsg = [];
    }
    ngOnInit() {
        this.newUser = {
            username: '',
            email: '',
            password: '',
        };
    }
    register() {
        const obs = this.httpService.register(this.newUser);
        obs.subscribe((data) => {
            console.log('data:', data);
            if (data.hasOwnProperty('errors')) {
                this.errorMsg = data.errors.message;
            }
            else {
                this.router.navigate(['/dashboard']);
            }
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/socket-room/socket-room.component.scss":
/*!********************************************************!*\
  !*** ./src/app/socket-room/socket-room.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2tldC1yb29tL3NvY2tldC1yb29tLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/socket-room/socket-room.component.ts":
/*!******************************************************!*\
  !*** ./src/app/socket-room/socket-room.component.ts ***!
  \******************************************************/
/*! exports provided: SocketRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketRoomComponent", function() { return SocketRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocketRoomComponent = class SocketRoomComponent {
    constructor() { }
    ngOnInit() {
    }
};
SocketRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-socket-room',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./socket-room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/socket-room/socket-room.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./socket-room.component.scss */ "./src/app/socket-room/socket-room.component.scss")).default]
    })
], SocketRoomComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kathy\Desktop\collab\socket_trivia\public\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map