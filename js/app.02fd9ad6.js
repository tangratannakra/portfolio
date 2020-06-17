/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([129,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/gsap/all.js
var gsap_all = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/gsap/TextPlugin.js + 1 modules
var TextPlugin = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/gsap/ScrollToPlugin.js
var ScrollToPlugin = __webpack_require__(14);

// CONCATENATED MODULE: ./src/scripts/redShift.js



gsap_all["a" /* default */].registerPlugin(TextPlugin["a" /* default */]);
gsap_all["a" /* default */].registerPlugin(ScrollToPlugin["a" /* default */]);
window.onload = introHandler;
var redShift_tl = gsap_all["a" /* default */].timeline();
var played;
redShift_tl.set(['#my-name-intro', '#animation-text-bottom', '.package', '#animation-text-top', '#animation-text-bottom'], {
  opacity: 0
});

function introHandler() {
  redShift_tl.to('#text-type-in-intro', {
    duration: 1,
    text: "My name is",
    ease: "none"
  }, 1).to('#my-name-intro', {
    opacity: 1,
    duration: 0.8,
    ease: 'back'
  }).to('#my-name-intro', {
    opacity: 0.8,
    duration: 0.2,
    ease: 'back'
  }).to(['#text-type-in-intro', '#hi'], {
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, '-=1').to('#animation-text-top', {
    opacity: 1,
    duration: 1,
    ease: 'back'
  }).to("#animation-text-bottom", {
    opacity: 0.5,
    duration: 5,
    ease: 'back'
  }).call(timeLineHandler, null, '-=3.5').to('.package', {
    opacity: 1,
    duration: 5,
    ease: 'back'
  }, '-=5');
}

function timeLineHandler() {
  var tl = gsap_all["a" /* default */].timeline();
  tl.set('#F', {
    x: -100,
    y: 50
  }, 0.2).set('#F', {
    x: 0,
    y: 0
  }, 0.4);
  tl.set('#R', {
    x: 300,
    y: -150,
    scale: 2
  }, 0.5).set('#R', {
    x: 0,
    y: 0,
    scale: 1
  }, 0.9); // tl.set('#O', {
  //         x: -150,
  //         y: 75
  //     }, 0.9)
  //     .set('#O', {
  //         x: 0,
  //         y: 0
  //     }, 1.2);

  tl.set('.N', {
    x: 0,
    y: -15
  }, 1.1).set('.N', {
    x: 0,
    y: 0
  }, 1.5).set('.N', {
    rotate: 180
  }, 1.8).set('.N', {
    rotate: 90
  }, 2.3).set('.N', {
    rotate: 0
  }, 2.5); // tl.set('#E', {
  //         x: -300,
  //         y: -120
  //     }, 2)
  //     .set('#E', {
  //         x: 0,
  //         y: 0
  //     }, 2.75);
  // tl.set('#D', {
  //         x: 50,
  //         y: -50
  //     }, 2.75)
  //     .set('#D', {
  //         x: 0,
  //         y: 0
  //     }, 3.1);
}

var scrollBtn = document.getElementById('scroller');
scrollBtn.addEventListener('click', function () {
  gsap_all["a" /* default */].to(window, {
    duration: 0.5,
    scrollTo: "#bio"
  });
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/gsap/index.js
var gsap = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js
var ScrollTrigger = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(10);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./src/scripts/mainMenuToggle.js



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





gsap["a" /* default */].registerPlugin(ScrollToPlugin["a" /* default */]);
gsap["a" /* default */].registerPlugin(ScrollTrigger["a" /* default */]);
gsap["a" /* default */].core.globals("ScrollTrigger", ScrollTrigger["a" /* default */]);

var mainMenuToggle_Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.menuVisibility = true;
    this.browserHeight = window.innerHeight;
    this.browserWidth = window.innerWidth;
    this.menu = document.querySelector(".heading-nav__menu");
    this.menuItems = document.querySelectorAll('.scroll-to');
    this.menuToggler = document.querySelector('.menu-hamburger__toggler');
    this.hideMenuUnderFold();
    this.hideRevealMenu();
    this.events();
  }

  _createClass(Menu, [{
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener('scroll', this.scrollThrottle);
      window.addEventListener("resize", debounce_default()(function () {
        _this.browserHeight = window.innerHeight;
        _this.browserWidth = window.innerWidth;
      }, 333));
      this.menuItems.forEach(function (item) {
        return item.addEventListener('click', function (item) {
          _this.scrollToHandler(item.target.id);
        });
      });
      this.menuToggler.addEventListener('change', function () {
        _this.menuTogglerHandler();
      });
    } //GSAP Animation - hide / reveal menu after trigger element;    

  }, {
    key: "hideRevealMenu",
    value: function hideRevealMenu() {
      var _this2 = this;

      ScrollTrigger["a" /* default */].create({
        trigger: "#bio",
        start: "top 100px",
        end: "top top-=10px",
        scrub: true,
        onEnter: function onEnter() {
          _this2.menu.style.display = 'none';
          _this2.menuVisibility = false;
        },
        onEnterBack: function onEnterBack() {
          _this2.menu.style.display = 'flex';
          _this2.menu.style.animation = 'none';
          _this2.menuVisibility = true;
        }
      });
    } //hide menu if page reloaded at the middle of the page

  }, {
    key: "hideMenuUnderFold",
    value: function hideMenuUnderFold() {
      console.log(this.menu.offsetTop);
      console.log(window.scrollY + this.browserHeight > this.menu.offsetTop);

      if (this.menuVisibility === true) {
        if (window.scrollY + this.browserHeight > this.menu.offsetTop) {
          this.menu.style.display = 'none';
          this.menuVisibility = false;
        }
      }
    } //scrolTo positions when cliched on menu

  }, {
    key: "scrollToHandler",
    value: function scrollToHandler(itemID) {
      var scrollposition;
      var position = itemID;

      switch (position) {
        case 'bio-trigger':
          scrollposition = '#bio';
          break;

        case 'projects-trigger':
          scrollposition = '#projects';
          break;

        case 'cert-trigger':
          scrollposition = '#certificates';
          break;

        case 'contact-trigger':
          scrollposition = '#contacts';
          break;
      }

      gsap["a" /* default */].to(window, {
        duration: 0.5,
        scrollTo: "".concat(scrollposition)
      });

      if (window.innerWidth < 768) {
        this.menu.classList.remove('menu-visible');
        this.menuToggler.checked = false;
      } else {
        this.hideMenuUnderFold();
      }
    }
  }, {
    key: "menuTogglerHandler",
    value: function menuTogglerHandler() {
      if (this.menuToggler.checked === true) {
        if (this.menuVisibility === false & window.innerWidth < 768) {
          this.menu.style.display = 'flex';
        }

        this.menu.classList.add('menu-visible');
      } else {
        this.menu.classList.remove('menu-visible');
        this.menuToggler = false;
      }
    }
  }]);

  return Menu;
}();

/* harmony default export */ var mainMenuToggle = (mainMenuToggle_Menu);
// CONCATENATED MODULE: ./src/scripts/cvData/cvData.js
var cvData = [{
  title: 'Frontend & Web Developement / Website Management',
  date: '2016 - Present',
  description: 'Write modern, performant, maintainable code for static and dynamic websites on different content management systems (WordPress / WooCommerce / Joomla, etc). Developing WordPress themes and plugins. Website customization and optimization. Creative work for ads. Logo and Brand identity design. Constant self-development through learnig and personal open sourse project with JavaScript and React.'
}, {
  title: 'UX / UI & Graphic design',
  date: '03 / 2011 – 06 / 2012 @ Web Fashion Ltd',
  description: 'UX/UI. Creating products and web page designs with Adobe PS/ Adobe Illustrator. Front-End development with HTML / CSS / jQuery'
}];
/* harmony default export */ var cvData_cvData = (cvData);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(25);

// CONCATENATED MODULE: ./src/scripts/cvData/cvEntry.js




function cvEntry_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cvEntry_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cvEntry_createClass(Constructor, protoProps, staticProps) { if (protoProps) cvEntry_defineProperties(Constructor.prototype, protoProps); if (staticProps) cvEntry_defineProperties(Constructor, staticProps); return Constructor; }

var cvEntry = /*#__PURE__*/function () {
  function cvEntry(data) {
    cvEntry_classCallCheck(this, cvEntry);

    return this.buildCvContent(data);
  }

  cvEntry_createClass(cvEntry, [{
    key: "buildCvContent",
    value: function buildCvContent(data) {
      var cvEntryElement = document.createElement('div');
      cvEntryElement.className = 'cv-entry';
      cvEntryElement.innerHTML = "\n    <div class=\"cv-entry__title\">\n      <h1>".concat(data.title, "</h1>\n    </div>\n    \n    <div class=\"cv-entry__description\">\n      <p>").concat(data.description, "</p>\n    </div>\n    ");
      return cvEntryElement;
    }
  }]);

  return cvEntry;
}();

/* harmony default export */ var cvData_cvEntry = (cvEntry);
// CONCATENATED MODULE: ./src/scripts/cvData/cvList.js



function cvList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cvList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cvList_createClass(Constructor, protoProps, staticProps) { if (protoProps) cvList_defineProperties(Constructor.prototype, protoProps); if (staticProps) cvList_defineProperties(Constructor, staticProps); return Constructor; }



var cvContainer = document.getElementById('cv-container');

var cvList_cvList = /*#__PURE__*/function () {
  function cvList() {
    cvList_classCallCheck(this, cvList);

    this.buildList(cvData_cvData);
  }

  cvList_createClass(cvList, [{
    key: "buildList",
    value: function buildList(data) {
      data.forEach(function (entry) {
        cvContainer.appendChild(new cvData_cvEntry(entry));
      });
    }
  }]);

  return cvList;
}();

/* harmony default export */ var cvData_cvList = (cvList_cvList);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(110);

// CONCATENATED MODULE: ./src/scripts/gitHubPr/githubProject.js





function githubProject_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function githubProject_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function githubProject_createClass(Constructor, protoProps, staticProps) { if (protoProps) githubProject_defineProperties(Constructor.prototype, protoProps); if (staticProps) githubProject_defineProperties(Constructor, staticProps); return Constructor; }

var githubProject_gitProject = /*#__PURE__*/function () {
  function gitProject(data) {
    githubProject_classCallCheck(this, gitProject);

    return this.buildGitEntry(data);
  }

  githubProject_createClass(gitProject, [{
    key: "animateElements",
    value: function animateElements() {
      var toRevealElements = document.querySelector('.github__title');
      console.log(toRevealElements);
    }
  }, {
    key: "buildGitEntry",
    value: function buildGitEntry(data) {
      var projectContainer = document.createElement('div');
      projectContainer.classList = 'github reveal';
      projectContainer.innerHTML = "\n                        <div class=\"github__thumb\">\n                            <svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>GitHub icon</title><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/></svg>\n                        </div>\n                        <div class=\"github__description\">\n                            <div class=\"github__title\">\n                                <h1>\n                                    <a href=\"".concat(data.homepageUrl, "\" target=\"_blank\">").concat(data.name, "</a>\n                                </h1>\n                            </div>\n                            <p>").concat(data.description, "</p>\n                        </div>\n                    ");
      return projectContainer;
    }
  }]);

  return gitProject;
}();

/* harmony default export */ var githubProject = (githubProject_gitProject);
/* <div class="github__thumb"><img
            src="https://banner2.cleanpng.com/20180214/tow/kisspng-organization-child-enterprise-resource-planning-ma-square-shape-cliparts-5a849f82ab0459.4031530415186410267005.jpg"
            alt="" />
        </div> */
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(27);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// CONCATENATED MODULE: ./src/scripts/gitHubPr/githubProjects.js



function githubProjects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function githubProjects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function githubProjects_createClass(Constructor, protoProps, staticProps) { if (protoProps) githubProjects_defineProperties(Constructor.prototype, protoProps); if (staticProps) githubProjects_defineProperties(Constructor, staticProps); return Constructor; }




var gitContainer = document.getElementById('github-projects'); //Fetching data from Github

var axios = __webpack_require__(111);

var githubUrl = 'https://api.github.com/graphql';
var token = 'e98e86086631ba898ed5ee5ea7cd0d3ee8fde5f0';
var oauth = {
  Authorization: 'bearer ' + '07d5c335f6d18ceee0c02b6fd8cb10a2e6e09653' //'token'

};
var served;
var query = "{\n    repositoryOwner(login: \"tangratannakra\") {\n      ... on ProfileOwner {\n        pinnedItemsRemaining\n        itemShowcase {\n          items(first: 10) {\n            totalCount\n            edges {\n              node {\n                ... on Repository {\n                  name\n                  description\n                  homepageUrl\n                  languages(first: 10) {\n                    totalCount\n                  }\n                }\n              }\n            }\n          }\n          hasPinnedItems\n        }\n      }\n    }\n  }";

var githubProjects_GitHubContainer = /*#__PURE__*/function () {
  function GitHubContainer() {
    githubProjects_classCallCheck(this, GitHubContainer);

    this.browserHeight = window.innerHeight;
    this.scrollThrottle = throttle_default()(this.revealOnScroll, 200).bind(this);
    this.events();
  }

  githubProjects_createClass(GitHubContainer, [{
    key: "revealOnScroll",
    value: function revealOnScroll() {
      if (served === undefined) {
        if (window.scrollY + this.browserHeight > gitContainer.offsetTop) {
          var scrollPercent = gitContainer.getBoundingClientRect().top / this.browserHeight * 100;

          if (scrollPercent < 95) {
            served = true;
            this.gitRequest();
          }
        }
      }
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener('scroll', this.scrollThrottle);
      window.addEventListener("resize", debounce_default()(function () {
        _this.browserHeight = window.innerHeight;
      }, 333));
    }
  }, {
    key: "gitRequest",
    value: function gitRequest() {
      axios.post(githubUrl, {
        query: query
      }, {
        headers: oauth
      }).then(function (response) {
        var gitProj = response.data.data.repositoryOwner.itemShowcase.items.edges; //arr

        gitProj.forEach(function (prj) {
          var gitProject = new githubProject(prj.node);
          gitContainer.appendChild(gitProject);
          setTimeout(function () {
            gitProject.className = 'github reveal--is-visible';
          }, 1000);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }]);

  return GitHubContainer;
}();

/* harmony default export */ var githubProjects = (githubProjects_GitHubContainer);
// CONCATENATED MODULE: ./src/scripts/certificates/certificatesData.js
var certificates = [{
  img: 'src/img/icons/ude-logo.png',
  url: 'https://www.uni-due.de',
  title: 'B.Sc. Computer Science and Communications Engineering'
}, {
  img: 'src/img/icons/NewUlogo-large-1.png',
  url: 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced',
  title: 'JavaScript - The Complete Guide 2020 (Beginner + Advanced)'
}, {
  img: 'src/img/icons/NewUlogo-large-1.png',
  url: 'url',
  title: 'JavaScript: Understanding the Weird Parts'
}];
/* harmony default export */ var certificatesData = (certificates);
// CONCATENATED MODULE: ./src/scripts/certificates/certificatEntry.js


function certificatEntry_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function certificatEntry_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function certificatEntry_createClass(Constructor, protoProps, staticProps) { if (protoProps) certificatEntry_defineProperties(Constructor.prototype, protoProps); if (staticProps) certificatEntry_defineProperties(Constructor, staticProps); return Constructor; }

var CertificateEntry = /*#__PURE__*/function () {
  function CertificateEntry(data) {
    certificatEntry_classCallCheck(this, CertificateEntry);

    return this.buildCertEntry(data);
  }

  certificatEntry_createClass(CertificateEntry, [{
    key: "buildCertEntry",
    value: function buildCertEntry(data) {
      var certEntry = document.createElement('div');
      certEntry.className = 'certificates-entry';
      certEntry.innerHTML = "\n    <div class=\"certificates-entry__thumb\">\n      <img src=\"".concat(data.img, "\" alt=\"certificate image\"/>\n    </div>\n    <div class=\"certificates-entry__title\"><h1><a href=\"").concat(data.url, "\" target=\"_blank\">").concat(data.title, "</a></h1></div>\n    ");
      return certEntry;
    }
  }]);

  return CertificateEntry;
}();

/* harmony default export */ var certificatEntry = (CertificateEntry);
{
  /* <div class="certificates-entry__description">
        <p>d${data.description}</p>
      </div> */
}
// CONCATENATED MODULE: ./src/scripts/certificates/certificatesList.js



function certificatesList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function certificatesList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function certificatesList_createClass(Constructor, protoProps, staticProps) { if (protoProps) certificatesList_defineProperties(Constructor.prototype, protoProps); if (staticProps) certificatesList_defineProperties(Constructor, staticProps); return Constructor; }



var recentPrContainer = document.getElementById('certificates-container');

var certificatesList_RecentProjects = /*#__PURE__*/function () {
  function RecentProjects() {
    certificatesList_classCallCheck(this, RecentProjects);

    this.buildPrList(certificatesData);
  }

  certificatesList_createClass(RecentProjects, [{
    key: "buildPrList",
    value: function buildPrList(data) {
      data.forEach(function (entry) {
        recentPrContainer.appendChild(new certificatEntry(entry));
      });
    }
  }]);

  return RecentProjects;
}();

/* harmony default export */ var certificates_certificatesList = (certificatesList_RecentProjects);
// CONCATENATED MODULE: ./src/scripts/recentProjects/recentProject.js




function recentProject_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function recentProject_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function recentProject_createClass(Constructor, protoProps, staticProps) { if (protoProps) recentProject_defineProperties(Constructor.prototype, protoProps); if (staticProps) recentProject_defineProperties(Constructor, staticProps); return Constructor; }



var recentProject_RecentProject = /*#__PURE__*/function () {
  function RecentProject(data, index) {
    recentProject_classCallCheck(this, RecentProject);

    this.recentPrElement;
    this.revealMask;
    this.index = index;
    return this.buildProjectElement(data, this.index);
  }

  recentProject_createClass(RecentProject, [{
    key: "buildProjectElement",
    value: function buildProjectElement(data) {
      var _this = this;

      this.recentPrElement = document.createElement('div');
      this.recentPrElement.setAttribute('id', "project-".concat(this.index));
      this.recentPrElement.className = 'recentPr-entry';
      this.recentPrElement.innerHTML = "\n    <div class=\"recentPr-entry__thumb\">\n      <img src=\"".concat(data.thumb, "\" alt=\"project thumb\">\n    </div>\n    \n    <div class=\"recentPr-entry__hover\">\n      <div class=\"recentPr-entry__title\">\n        <h1><a href=\"").concat(data.url, "\" target=\"__blank\">").concat(data.title, "</a></h1>\n      </div>\n      <div class=\"recentPr-entry__description\">\n        <p>").concat(data.description, "</p>\n      </div>\n    </div>\n    ");
      this.recentPrElement.addEventListener('mouseenter', function () {
        _this.revealMask = _this.recentPrElement.querySelector('.recentPr-entry__hover');

        _this.revealHandler(_this.index);
      });
      return this.recentPrElement;
    }
  }, {
    key: "revealHandler",
    value: function revealHandler(index) {
      var tl = gsap["a" /* default */].timeline();
      tl.set("#project-".concat(this.index), {
        x: -30
      }).to("#project-".concat(this.index), {
        x: 0,
        duration: 1,
        ease: 'back'
      }, 0);
    }
  }]);

  return RecentProject;
}();

/* harmony default export */ var recentProject = (recentProject_RecentProject); // <
// div id = "project-mask-` + this.index + `"
// class = "recentPr-entry__reveal-mask" > < /div>
// CONCATENATED MODULE: ./src/scripts/recentProjects/recentPrData.js
var recentPrData = [{
  thumb: 'src/img/prjcts/rodina.png',
  title: 'Rodina-Haskovo LTD',
  description: 'Custom Template / Wordpress / Site Admin',
  url: 'http://rodinahaskovo.com/'
}, {
  thumb: 'src/img/prjcts/interlabor.png',
  title: 'Interlabor',
  description: 'Custom CSS / Custom JavaScript / Site Admin',
  url: 'http://www.inlab-bg.com/'
}, {
  thumb: 'src/img/prjcts/chervenataStena.png',
  title: 'Chervenata Stena Park',
  description: 'UX/UI / WorpdPress / Custom CSS',
  url: 'http://chervenatastena.com/'
}, {
  thumb: 'src/img/prjcts/swissboutique.png',
  title: 'Swiss Boutique',
  description: 'JS Customization / Custom CSS / Site Admin',
  url: 'https://swissboutique.bg/'
}, {
  thumb: 'src/img/prjcts/phototravel.png',
  title: 'PhotoTravel',
  description: 'WordPress and Custom CSS',
  url: 'http://phototravel.bg'
}, {
  thumb: 'src/img/prjcts/realestate.png',
  title: 'RealEstate Agency',
  description: 'CSS / JS / Single Page',
  url: 'https://tangratannakra.github.io/Real-Estate-Agency-Front-Page/'
}];
/* harmony default export */ var recentProjects_recentPrData = (recentPrData);
// CONCATENATED MODULE: ./src/scripts/recentProjects/recentProjects.js



function recentProjects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function recentProjects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function recentProjects_createClass(Constructor, protoProps, staticProps) { if (protoProps) recentProjects_defineProperties(Constructor.prototype, protoProps); if (staticProps) recentProjects_defineProperties(Constructor, staticProps); return Constructor; }



var recentProjects_recentPrContainer = document.getElementById('recentPr-container');

var recentProjects_RecentProjects = /*#__PURE__*/function () {
  function RecentProjects() {
    recentProjects_classCallCheck(this, RecentProjects);

    this.buildPrList(recentProjects_recentPrData);
  }

  recentProjects_createClass(RecentProjects, [{
    key: "buildPrList",
    value: function buildPrList(data) {
      data.forEach(function (entry, index) {
        var recentPr = new recentProject(entry, index);
        recentProjects_recentPrContainer.appendChild(recentPr);
      });
    }
  }]);

  return RecentProjects;
}();

/* harmony default export */ var recentProjects = (recentProjects_RecentProjects);
// CONCATENATED MODULE: ./src/scripts/revealOnScroll.js
function revealOnScroll_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function revealOnScroll_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function revealOnScroll_createClass(Constructor, protoProps, staticProps) { if (protoProps) revealOnScroll_defineProperties(Constructor.prototype, protoProps); if (staticProps) revealOnScroll_defineProperties(Constructor, staticProps); return Constructor; }





gsap["a" /* default */].registerPlugin(ScrollTrigger["a" /* default */]);
gsap["a" /* default */].core.globals("ScrollTrigger", ScrollTrigger["a" /* default */]);

var revealOnScroll_RevealOnScroll = /*#__PURE__*/function () {
  function RevealOnScroll(what, when) {
    revealOnScroll_classCallCheck(this, RevealOnScroll);

    this.revealElement = what;
    this.triggerElement = when;
    this.served = undefined;
    this.hideInitialy(this.revealElement);
    this.browserHeight = window.innerHeight;
    this.scrollThrottle = throttle_default()(this.revealOnScroll, 200).bind(this);
    this.events();
  }

  revealOnScroll_createClass(RevealOnScroll, [{
    key: "hideInitialy",
    value: function hideInitialy() {
      document.querySelector(this.revealElement).style.opacity = "0";
    }
  }, {
    key: "revealOnScroll",
    value: function revealOnScroll() {
      var elementReveal = document.querySelector("".concat(this.revealElement));

      if (this.served === undefined) {
        if (window.scrollY + this.browserHeight > elementReveal.offsetTop) {
          var scrollPercent = elementReveal.getBoundingClientRect().top / this.browserHeight * 100;

          if (scrollPercent < 95) {
            this.served = true;
            gsap["a" /* default */].to("".concat(this.revealElement), {
              opacity: 1,
              duration: 1
            });
          }
        }
      }
    }
  }, {
    key: "events",
    value: function events() {
      var _this = this;

      window.addEventListener('scroll', this.scrollThrottle);
      window.addEventListener("resize", debounce_default()(function () {
        _this.browserHeight = window.innerHeight;
      }, 333));
    }
  }]);

  return RevealOnScroll;
}();

/* harmony default export */ var scripts_revealOnScroll = (revealOnScroll_RevealOnScroll);
// CONCATENATED MODULE: ./src/scripts/index.js
//Default imports








document.addEventListener('DOMContentLoaded', scripts_timeLineHandler, false);
var mainMenu = new mainMenuToggle();

function scripts_timeLineHandler() {
  var certificatesList = new certificates_certificatesList();
  var revealCv = new scripts_revealOnScroll("#cv-container", "#bio");
  var revealClients = new scripts_revealOnScroll('.testimonial', '.tech-stack__ul');
  var recentPr = new recentProjects();
  var cv = new cvData_cvList();
  var gitHubPrjs = new githubProjects();
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.02fd9ad6.js.map