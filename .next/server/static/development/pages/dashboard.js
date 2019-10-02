module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoints_NavBarEndPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endpoints/NavBarEndPoints */ "./endpoints/NavBarEndPoints.js");
/* harmony import */ var _endpoints_NavBarEndPoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_endpoints_NavBarEndPoints__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\diki\\Desktop\\react-school\\components\\Sidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SideBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "this is sidebar");
  }

}

/***/ }),

/***/ "./endpoints/NavBarEndPoints.js":
/*!**************************************!*\
  !*** ./endpoints/NavBarEndPoints.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

///Admin , Staff , Student , Depertment , Placement
const AdminNavMenu = [{
  groupname: "BulkImport",
  menus: [{
    url: "/markimport",
    name: "Mark Import"
  }, {
    url: "/attendanceimport",
    name: "Attendance Import"
  }]
}, {
  groupname: "Department",
  menus: [{
    url: "/allocation",
    name: "Allocation"
  }]
}, {
  groupname: "Entrys",
  menus: [{
    url: "/markentry",
    name: "Mark Entry"
  }, {
    url: "/attendanceentry",
    name: "Attendance Entry"
  }]
}, {
  groupname: "Reports",
  menus: [{
    url: "/markreport",
    name: "Mark Report"
  }, {
    url: "/attendancereport",
    name: "Attendance Report"
  }, {
    url: "/placementreport",
    name: "Placement Report"
  }]
}, {
  groupname: "Events",
  menus: [{
    url: "/exams",
    name: "Exams"
  }, {
    url: "/academicevents",
    name: "Academic Events"
  }, {
    url: "/acheviements",
    name: "Acheivements"
  }]
}, {
  groupname: "Manage",
  menus: [{
    url: "/studentdetails",
    name: "StudentDetails"
  }, {
    url: "/staffdetails",
    name: "Staff Details"
  }, {
    url: "/acheviements",
    name: "Acheivements"
  }]
}, {
  groupname: "occasional",
  menus: [{
    url: "/student",
    name: "Student"
  }, {
    url: "/staff",
    name: "Staff"
  }, {
    url: "/subject",
    name: "Subject"
  }, {
    url: "/batch",
    name: "Batch"
  }, {
    url: "/category",
    name: "Category"
  }, {
    url: "/department",
    name: "Department"
  }, {
    url: "/semester",
    name: "Semester"
  }, {
    url: "/year",
    name: "Year"
  }, {
    url: "/stafftype",
    name: "Stafftype"
  }, {
    url: "/subjecttype",
    name: "Subjecttype"
  }, {
    url: "/designation",
    name: "Designation"
  }, {
    url: "/examtype",
    name: "Examtype"
  }, {
    url: "/examname",
    name: "Examname"
  }]
}];
const StaffNavMenu = [{
  groupname: "BulkImport",
  menus: [{
    url: "/markimport",
    name: "Mark Import"
  }, {
    url: "/attendanceimport",
    name: "Attendance Import"
  }]
}, {
  groupname: "Entries",
  menus: [{
    url: "/markentry",
    name: "Mark Entry"
  }, {
    url: "/attendanceentry",
    name: "Attendance Entry"
  }]
}, {
  groupname: "Reports",
  menus: [{
    url: "/markreport",
    name: "Mark Report"
  }, {
    url: "/attendancereport",
    name: "Attendance Report"
  }, {
    url: "/placementreport",
    name: "Placement Report"
  }]
}, {
  groupname: "SMS",
  menus: [{
    url: "/individualsms",
    name: "Individual SMS"
  }, {
    url: "/groupsms",
    name: "Group SMS"
  }]
}, {
  groupname: "Profile",
  menus: [{
    url: "/profile",
    name: "Profile"
  }]
}];
const StudentNavMenu = [{
  groupname: "Reports",
  menus: [{
    url: "/markreport",
    name: "Mark Report"
  }, {
    url: "/attendancereport",
    name: "Attendance Report"
  }]
}, {
  groupname: "Events",
  menus: [{
    url: "/exams",
    name: "Exams"
  }, {
    url: "/academicevents",
    name: "Academic Events"
  }, {
    url: "/acheviements",
    name: "Acheivements"
  }]
}, {
  groupname: "Placement",
  menus: [{
    url: "/placementactivities",
    name: "Placement Activities"
  }]
}, {
  groupname: "Profile",
  menus: [{
    url: "/profile",
    name: "Profile"
  }, {
    url: "/updateresume",
    name: "Update Resume"
  }]
}];
const DepertmentNavMenu = [{
  groupname: "BulkImport",
  menus: [{
    url: "/markimport",
    name: "Mark Import"
  }, {
    url: "/attendanceimport",
    name: "Attendance Import"
  }]
}, {
  groupname: "Manage",
  menus: [{
    url: "/studentdetails",
    name: "StudentDetails"
  }, {
    url: "/staffdetails",
    name: "Staff Details"
  }, {
    url: "/acheviements",
    name: "Acheivements"
  }]
}, {
  groupname: "Entrys",
  menus: [{
    url: "/markentry",
    name: "Mark Entry"
  }, {
    url: "/attendanceentry",
    name: "Attendance Entry"
  }]
}, {
  groupname: "Reports",
  menus: [{
    url: "/markreport",
    name: "Mark Report"
  }, {
    url: "/attendancereport",
    name: "Attendance Report"
  }, {
    url: "/placementreport",
    name: "Placement Report"
  }]
}, {
  groupname: "SMS",
  menus: [{
    url: "/individualsms",
    name: "Individual SMS"
  }, {
    url: "/groupsms",
    name: "Group SMS"
  }]
}];
const PlacementNavMenu = [{
  groupname: "Acitities",
  menus: [{
    url: "/activitties",
    name: "Placement Activities"
  }, {
    url: "/filterstudents",
    name: "Filter Students"
  }, {
    url: "/generatereports",
    name: "Generate Reports"
  }]
}, {
  groupname: "SMS",
  menus: [{
    url: "/individualsms",
    name: "Individual SMS"
  }, {
    url: "/groupsms",
    name: "Group SMS"
  }]
}];

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
var _jsxFileName = "C:\\Users\\diki\\Desktop\\react-school\\pages\\dashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class dashboard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      role: '',
      logged: false,
      Token: ''
    };
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("script", {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("script", {
      src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
      integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
      integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
      crossorigin: "anonymous",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/dashboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\diki\Desktop\react-school\pages\dashboard.js */"./pages/dashboard.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map