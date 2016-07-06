/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(2);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(3);

	var _index6 = _interopRequireDefault(_index5);

	var _mainstage = __webpack_require__(4);

	var _mainstage2 = _interopRequireDefault(_mainstage);

	var _home = __webpack_require__(5);

	var _home2 = _interopRequireDefault(_home);

	var _splash = __webpack_require__(6);

	var _splash2 = _interopRequireDefault(_splash);

	var _intro = __webpack_require__(7);

	var _intro2 = _interopRequireDefault(_intro);

	var _event = __webpack_require__(8);

	var _event2 = _interopRequireDefault(_event);

	var _plazas = __webpack_require__(9);

	var _plazas2 = _interopRequireDefault(_plazas);

	var _eat = __webpack_require__(10);

	var _eat2 = _interopRequireDefault(_eat);

	var _vendors = __webpack_require__(11);

	var _vendors2 = _interopRequireDefault(_vendors);

	var _schedule = __webpack_require__(12);

	var _schedule2 = _interopRequireDefault(_schedule);

	var _detail = __webpack_require__(13);

	var _detail2 = _interopRequireDefault(_detail);

	var _map = __webpack_require__(14);

	var _map2 = _interopRequireDefault(_map);

	var _latinhub = __webpack_require__(15);

	var _latinhub2 = _interopRequireDefault(_latinhub);

	var _business = __webpack_require__(16);

	var _business2 = _interopRequireDefault(_business);

	var _contest = __webpack_require__(17);

	var _contest2 = _interopRequireDefault(_contest);

	var _media = __webpack_require__(18);

	var _media2 = _interopRequireDefault(_media);

	var _sponsors = __webpack_require__(19);

	var _sponsors2 = _interopRequireDefault(_sponsors);

	var _plazas3 = __webpack_require__(20);

	var _plazas4 = _interopRequireDefault(_plazas3);

	var _vendors3 = __webpack_require__(21);

	var _vendors4 = _interopRequireDefault(_vendors3);

	var _schedule3 = __webpack_require__(22);

	var _schedule4 = _interopRequireDefault(_schedule3);

	var _detail3 = __webpack_require__(23);

	var _detail4 = _interopRequireDefault(_detail3);

	var _business3 = __webpack_require__(24);

	var _business4 = _interopRequireDefault(_business3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('latincouver', ['ionic', 'ui.router', 'ngCordova']).config(_index2.default).config(_index4.default).constant('API', 'app/json/').run(_index6.default).controller('SplashController', _splash2.default).controller('IntroController', _intro2.default).controller('HomeController', _home2.default).controller('EventController', _event2.default).controller('PlazasController', _plazas2.default).controller('EatController', _eat2.default).controller('VendorsController', _vendors2.default).controller('MainstageController', _mainstage2.default).controller('ScheduleController', _schedule2.default).controller('DetailController', _detail2.default).controller('MapController', _map2.default).controller('LatinhubController', _latinhub2.default).controller('BusinessController', _business2.default).controller('ContestController', _contest2.default).controller('MediaController', _media2.default).controller('SponsorsController', _sponsors2.default).service('PlazaService', _plazas4.default).service('DetailService', _detail4.default).service('ScheduleService', _schedule4.default).service('VendorsService', _vendors4.default).service('BusinessService', _business4.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function config($logProvider, $ionicConfigProvider, $cordovaFacebookProvider) {
	    'ngInject';

	    $logProvider.debugEnabled(true);
	    // $ionicConfigProvider.views.maxCache(10);
	    $ionicConfigProvider.views.transition('platform');
	    // $ionicConfigProvider.views.forwardCache(false);
	    // $ionicConfigProvider.backButton.icon('ion-ios-arrow-back');
	    // $ionicConfigProvider.backButton.text('');                  // default is 'Back'
	    // $ionicConfigProvider.backButton.previousTitleText(false);  // hides the 'Back' text
	    // $ionicConfigProvider.templates.maxPrefetch(20);
	    /*
	    var appID = 116252811865421;
	    var version = "v2.6"; // or leave blank and default is v2.0
	    $cordovaFacebookProvider.browserInit(appID, version);    
	    */
	}

	exports.default = config;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function routerConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';

	    $stateProvider.state('intro', {
	        url: '/intro',
	        views: {
	            home: {
	                templateUrl: 'app/locations/intro/intro.html',
	                controller: 'IntroController as introCtrl'
	            }
	        }
	    }).state('splash', {
	        url: '/splash',
	        views: {
	            home: {
	                templateUrl: 'app/locations/splash/splash.html',
	                controller: 'SplashController as splCtrl'
	            }
	        }
	    }).state('home', {
	        url: '/home',
	        views: {
	            home: {
	                templateUrl: 'app/locations/home/home.html',
	                controller: 'HomeController as homeCtrl'
	            }
	        }
	    }).state('map', {
	        url: '/map',
	        views: {
	            home: {
	                templateUrl: 'app/locations/map/map.html',
	                controller: 'MapController as map'
	            }
	        }
	    }).state('latinhub', {
	        url: '/latinhub',
	        views: {
	            home: {
	                templateUrl: 'app/locations/latinhub/latinhub.html',
	                controller: 'LatinhubController as latinhub'
	            }
	        }
	    }).state('contest', {
	        url: '/contest',
	        views: {
	            home: {
	                templateUrl: 'app/locations/contest/contest.html',
	                controller: 'ContestController as contest'
	            }
	        }
	    }).state('sponsors', {
	        url: '/sponsors',
	        views: {
	            home: {
	                templateUrl: 'app/locations/sponsors/sponsors.html',
	                controller: 'SponsorsController as sponsors'
	            }
	        }
	    }).state('media', {
	        url: '/media',
	        views: {
	            home: {
	                templateUrl: 'app/locations/media/media.html',
	                controller: 'MediaController as media'
	            }
	        }
	    }).state('detailMaster', {
	        url: '/detail/:section/:id',
	        views: {
	            home: {
	                templateUrl: 'app/locations/detail/detail.html',
	                controller: 'DetailController as detail'
	            }
	        }
	    }).state('plazas', {
	        url: '/plazas',
	        views: {
	            home: {
	                templateUrl: 'app/locations/plazas/plazas.html',
	                controller: 'PlazasController as plaza'
	            }
	        }
	    }).state('detail', {
	        url: '/plazas/detail/:id',
	        views: {
	            home: {
	                templateUrl: 'app/locations/plazas/detail.html',
	                controller: 'PlazasController as plaza'
	            }
	        }
	    }).state('detail.day1', {
	        url: '/day1',
	        templateUrl: 'app/locations/plazas/detail.day1.html',
	        controller: 'PlazasController as plaza'
	    }).state('detail.day2', {
	        url: '/day2',
	        templateUrl: 'app/locations/plazas/detail.day2.html',
	        controller: 'PlazasController as plaza'
	    }).state('detail.biz', {
	        url: '/biz',
	        templateUrl: 'app/locations/plazas/detail.biz.html',
	        controller: 'PlazasController as plaza'
	    })

	    //Event
	    .state('event', {
	        url: '/event',
	        views: {
	            home: {
	                templateUrl: 'app/locations/event/event.html',
	                controller: 'EventController as event'
	            }
	        }
	    }).state('event.eat', {
	        url: '/eat',
	        templateUrl: 'app/locations/event/eat.html',
	        controller: 'EatController as eat'
	    }).state('event.play', {
	        url: '/play',
	        templateUrl: 'app/locations/event/play.html'
	    }).state('event.live', {
	        url: '/live',
	        templateUrl: 'app/locations/event/live.html'
	    }).state('mainStage', {
	        url: '/mainstage',
	        views: {
	            home: {
	                templateUrl: 'app/locations/mainstage/mainstage.html',
	                controller: 'MainstageController as mainstageCtrl'
	            }
	        }
	    }).state('vendors', {
	        url: '/vendors',
	        views: {
	            home: {
	                templateUrl: 'app/locations/vendors/vendors.html',
	                controller: 'VendorsController as vendor'
	            }
	        }
	    }).state('vendors.products', {
	        url: '/products',
	        templateUrl: 'app/locations/vendors/products.html'
	    }).state('vendors.nonprofit', {
	        url: '/nonprofit',
	        templateUrl: 'app/locations/vendors/nonprofit.html'
	    }).state('mainStage.detail', {
	        url: '/detail/:id',
	        views: {
	            mainstage: {
	                templateUrl: 'app/locations/mainstage/detail.html'
	            }
	        }
	    });

	    $urlRouterProvider.otherwise('/intro');
	}

	exports.default = routerConfig;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function runBlock($log, $rootScope, $state, $stateParams) {
	  'ngInject';

	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	  $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
	    // to be used for back button //won't work when page is reloaded.
	    $rootScope.previousState_name = fromState.name;
	    $rootScope.previousState_params = fromParams;
	  });

	  //back button function called from back button's ng-click="back()"
	  $rootScope.back = function () {
	    if ($rootScope.previousState_name) {
	      $state.go($rootScope.previousState_name, $rootScope.previousState_params);
	    } else {
	      $state.go('home');
	    }
	  };
	}

	runBlock.$inject = ['$log', '$rootScope', '$state', '$stateParams'];
	exports.default = runBlock;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainstageController = function MainstageController($scope, $http) {
	    _classCallCheck(this, MainstageController);

	    Object.assign(this, { $http: $http, $scope: $scope });
	    this.artists = [];
	    this.$http.get('app/json/mainstage.artsts.json').success(function (data) {
	        this.artists = data; // get data from json
	        console.log("teste", this.$scope.a);
	        // angular.forEach(this.$scope.companies, function(item) {
	        //     console.log(item.name);
	        // })
	    });
	};

	MainstageController.$inject = ['$scope', '$http'];
	exports.default = MainstageController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HomeController = function HomeController($state) {
	    _classCallCheck(this, HomeController);

	    this.$state = $state;
	    this.name = "latincouver";
	    this.obj = "app";
	};

	HomeController.$inject = ['$state'];
	exports.default = HomeController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SplashController =
	//constructor($scope, $state, $ionicSlideBoxDelegate) {
	function SplashController($state, $timeout, $ionicLoading) {
	    _classCallCheck(this, SplashController);

	    this.$state = $state;
	    this.$timeout = $timeout;
	    // Setup the loader
	    $ionicLoading.show({
	        content: 'Loading',
	        animation: 'fade-in',
	        showBackdrop: true,
	        maxWidth: 200,
	        showDelay: 0
	    });
	    if (window.localStorage.didTutorial === "true") {
	        this.$state.go('home');
	        $ionicLoading.hide();
	    } else {
	        this.$state.go('intro');
	        $ionicLoading.hide();
	    }
	};

	SplashController.$inject = ['$state', '$timeout', '$ionicLoading'];
	exports.default = SplashController;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IntroController = function () {
	    function IntroController($state) {
	        _classCallCheck(this, IntroController);

	        this.$state = $state;
	        if (window.localStorage.didTutorial === "true") {
	            this.startApp();
	        }
	    }

	    _createClass(IntroController, [{
	        key: "toIntro",
	        value: function toIntro() {
	            window.localStorage.didTutorial = "false";
	            this.$state.go('intro');
	        }
	    }, {
	        key: "startApp",
	        value: function startApp() {
	            this.$state.go('home');
	            window.localStorage.didTutorial = true;
	        }
	    }]);

	    return IntroController;
	}();

	IntroController.$inject = ['$state'];
	exports.default = IntroController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventController = function () {
	    function EventController($scope, $ionicSideMenuDelegate, VendorsService) {
	        _classCallCheck(this, EventController);

	        Object.assign(this, { $scope: $scope, $ionicSideMenuDelegate: $ionicSideMenuDelegate, VendorsService: VendorsService });
	        this.setupSlider();
	    }

	    _createClass(EventController, [{
	        key: 'prevSlide',
	        value: function prevSlide() {
	            this.slider.sliderDelegate._slidePrev();
	        }
	    }, {
	        key: 'nextSlide',
	        value: function nextSlide() {
	            this.slider.sliderDelegate._slideNext();
	        }
	    }, {
	        key: 'setupSlider',
	        value: function setupSlider() {
	            var _this = this;

	            this.slider = {};
	            this.slider.currentPage = 1;

	            this.VendorsService.getArtists().then(function (response) {
	                var images = angular.copy(response.data);
	                _this.slider.images = images;
	                //this.slider.images = response.data;
	                _this.vendorsList = response.data;
	                _this.slider.images.sort();
	                console.log("this.slider.images", _this.slider.images);
	            });

	            //some options to pass to our slider
	            this.slider.sliderOptions = {
	                effect: 'slide',
	                initialSlide: 0,
	                direction: 'horizontal',
	                speed: 500,
	                loop: true,
	                autoplay: 5000
	            };
	            //create delegate reference to link with slider
	            this.slider.sliderDelegate = null;
	            //watch our sliderDelegate reference, and use it when it becomes available
	            this.$scope.$watch('data.sliderDelegate', function (newVal, oldVal) {
	                if (newVal != null) {
	                    //console.log("data.sliderDelegate", data.sliderDelegate);
	                    this.slider.sliderDelegate.on('slideChangeEnd', function () {
	                        this.slider.currentPage = this.slider.sliderDelegate.activeIndex;
	                        this.$apply();
	                    });
	                }
	            });
	        }
	    }, {
	        key: 'toggleLeft',
	        value: function toggleLeft() {
	            this.$ionicSideMenuDelegate.toggleLeft();
	        }
	    }]);

	    return EventController;
	}();

	EventController.$inject = ['$scope', '$ionicSideMenuDelegate', 'VendorsService'];
	exports.default = EventController;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PlazasController = function () {
	    function PlazasController($scope, $http, $stateParams, $filter, PlazaService, ScheduleService, VendorsService, BusinessService) {
	        _classCallCheck(this, PlazasController);

	        Object.assign(this, { $scope: $scope, $filter: $filter, $stateParams: $stateParams, $http: $http, PlazaService: PlazaService, ScheduleService: ScheduleService, VendorsService: VendorsService, BusinessService: BusinessService });
	        this.vendorsList = {};
	        this.selected = {};
	        this.selected.list_1 = "";
	        this.selected.list_2 = "";

	        this.init();
	    }

	    _createClass(PlazasController, [{
	        key: "init",
	        value: function init() {
	            var _this = this;

	            this.PlazaService.getPlazas().then(function (response) {
	                _this.list = response.data;
	                _this.plazaId = _this.$stateParams.id;
	                if (_this.plazaId > 0) {
	                    _this.selected = _this.$filter('filter')(_this.list, {
	                        id: _this.plazaId
	                    })[0];
	                    _this.getVendorsOrArtists();
	                    _this.getSchedule();
	                    _this.getBusiness();
	                }
	            });
	        }
	    }, {
	        key: "getVendorsOrArtists",
	        value: function getVendorsOrArtists() {
	            var _this2 = this;

	            this.VendorsService.getVendors().then(function (response) {
	                _this2.vendorsList = _this2.$filter('filter')(response.data, {
	                    plaza_id: _this2.plazaId
	                });
	                _this2.VendorsService.getArtists().then(function (response) {
	                    _this2.vendorsList = _this2.vendorsList.concat(_this2.$filter('filter')(response.data, {
	                        plaza_id: _this2.plazaId
	                    }));
	                    //reordering by Id, that way we can manage the order by changing the id
	                    _this2.vendorsList.sort(function (a, b) {
	                        return parseFloat(a.id) - parseFloat(b.id);
	                    });
	                });
	            });
	        }
	    }, {
	        key: "getSchedule",
	        value: function getSchedule() {
	            var _this3 = this;

	            this.ScheduleService.getSchedule().then(function (response) {
	                _this3.selected.list_1 = _this3.$filter('filter')(response.data, {
	                    plaza_id: _this3.plazaId, day: 1
	                });
	                _this3.selected.list_2 = _this3.$filter('filter')(response.data, {
	                    plaza_id: _this3.plazaId, day: 2
	                });
	            });
	        }
	    }, {
	        key: "getBusiness",
	        value: function getBusiness() {
	            var _this4 = this;

	            this.BusinessService.getBusiness().then(function (response) {
	                _this4.selected.biz = _this4.$filter('filter')(response.data, {
	                    plaza_id: _this4.plazaId
	                });
	            });
	        }
	    }]);

	    return PlazasController;
	}();

	PlazasController.$inject = ['$scope', '$http', '$stateParams', '$filter', 'PlazaService', 'ScheduleService', 'VendorsService', 'BusinessService'];
	exports.default = PlazasController;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EatController = function EatController() {
	    _classCallCheck(this, EatController);
	};
	//EatController.$inject = ['$scope', '$ionicSideMenuDelegate'];


	exports.default = EatController;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var VendorsController = function () {
	  function VendorsController($scope, $filter, $q, VendorsService, BusinessService) {
	    _classCallCheck(this, VendorsController);

	    Object.assign(this, { $scope: $scope, $filter: $filter, $q: $q, VendorsService: VendorsService, BusinessService: BusinessService });
	    this.fullList = [];
	    this.splitLists();
	  }

	  _createClass(VendorsController, [{
	    key: 'splitLists',
	    value: function splitLists() {
	      var _this = this;

	      var promises = [this.VendorsService.getVendors(), this.BusinessService.getBusiness()];
	      this.$q.all(promises).then(function (values) {
	        _this.fullList = values[0].data.concat(values[1].data);
	        _this.complete();
	      });
	    }
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.vendorsList_food = this.$filter('filter')(this.fullList, {
	        type: 'food'
	      });
	      this.vendorsList_products = this.$filter('filter')(this.fullList, {
	        type: 'products'
	      });
	      this.vendorsList_nonprofit = this.$filter('filter')(this.fullList, {
	        type: 'nonprofit'
	      });
	    }
	  }]);

	  return VendorsController;
	}();

	VendorsController.$inject = ['$scope', '$filter', '$q', 'VendorsService', 'BusinessService'];
	exports.default = VendorsController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScheduleController = function ScheduleController($filter, ScheduleService) {
	    // ScheduleService.getSchedule().then(response => {
	    //     this.list_1 = $filter('filter')(response.data, {
	    //         day: 1
	    //     });
	    //     this.list_2 = $filter('filter')(response.data, {
	    //         day: 2
	    //     });
	    // });

	    _classCallCheck(this, ScheduleController);
	};

	ScheduleController.$inject = ['$filter', 'ScheduleService'];
	exports.default = ScheduleController;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DetailController = function () {
	    function DetailController($scope, $http, $stateParams, $filter, DetailService, ScheduleService) {
	        _classCallCheck(this, DetailController);

	        Object.assign(this, { $scope: $scope, $http: $http, $stateParams: $stateParams, $filter: $filter, DetailService: DetailService, ScheduleService: ScheduleService });
	        this.selected = "";
	        this.list = "";
	        this.getDetails();
	    }

	    _createClass(DetailController, [{
	        key: "launch",
	        value: function launch(url) {
	            window.open(url, '_system', 'location=yes');
	        }
	    }, {
	        key: "getDetails",
	        value: function getDetails() {
	            var _this = this;

	            this.DetailService.getDetails(this.$stateParams.section).then(function (response) {
	                _this.list = response.data;
	                _this.plazaId = _this.$stateParams.id;
	                _this.selected = _this.$filter('filter')(_this.list, {
	                    id: _this.plazaId
	                })[0];
	                //this.getSchedule();
	            });
	        }
	        // getSchedule(){
	        //     this.ScheduleService.getSchedule().then(response => {
	        //         this.selected.list_1 = this.$filter('filter')(response.data, {
	        //             plaza_id: this.plazaId, day: 1
	        //         });
	        //         this.selected.list_2 = this.$filter('filter')(response.data, {
	        //             plaza_id: this.plazaId, day: 2
	        //         });
	        //     });       
	        // }   

	    }]);

	    return DetailController;
	}();

	DetailController.$inject = ['$scope', '$http', '$stateParams', '$filter', 'DetailService', 'ScheduleService'];
	exports.default = DetailController;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var overlay;
	USGSOverlay.prototype = new google.maps.OverlayView();

	function USGSOverlay(bounds, image, map) {
	        // Initialize all properties.
	        this.bounds_ = bounds;
	        this.image_ = image;
	        this.map_ = map;

	        // Define a property to hold the image's div. We'll
	        // actually create this div upon receipt of the onAdd()
	        // method so we'll leave it null for now.
	        this.div_ = null;

	        // Explicitly call setMap on this overlay.
	        this.setMap(map);
	}
	USGSOverlay.prototype.onAdd = function () {

	        var div = document.createElement('div');
	        div.style.borderStyle = 'none';
	        div.style.borderWidth = '0px';
	        div.style.position = 'absolute';

	        // Create the img element and attach it to the div.
	        var img = document.createElement('img');
	        img.src = this.image_;
	        img.style.width = '100%';
	        img.style.height = '100%';
	        img.style.position = 'absolute';
	        div.appendChild(img);

	        this.div_ = div;

	        // Add the element to the "overlayLayer" pane.
	        var panes = this.getPanes();
	        panes.overlayLayer.appendChild(div);
	};
	// [END region_attachment]

	// [START region_drawing]
	USGSOverlay.prototype.draw = function () {

	        // We use the south-west and north-east
	        // coordinates of the overlay to peg it to the correct position and size.
	        // To do this, we need to retrieve the projection from the overlay.
	        var overlayProjection = this.getProjection();

	        // Retrieve the south-west and north-east coordinates of this overlay
	        // in LatLngs and convert them to pixel coordinates.
	        // We'll use these coordinates to resize the div.
	        var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
	        var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

	        // Resize the image's div to fit the indicated dimensions.
	        var div = this.div_;
	        div.style.left = sw.x + 'px';
	        div.style.top = ne.y + 'px';
	        div.style.width = ne.x - sw.x + 'px';
	        div.style.height = sw.y - ne.y + 'px';
	};

	var MapController = function () {
	        function MapController($scope, $state) {
	                _classCallCheck(this, MapController);
	        }

	        _createClass(MapController, [{
	                key: 'initMap',
	                value: function initMap() {
	                        var _ref;

	                        var latLng = new google.maps.LatLng(49.276308, -123.104591);
	                        var map = new google.maps.Map(document.getElementById('map'), (_ref = {
	                                zoom: 18,
	                                center: latLng,
	                                panControl: false,
	                                disableDefaultUI: true,
	                                zoomControl: true,
	                                scrollwheel: false
	                        }, _defineProperty(_ref, 'panControl', false), _defineProperty(_ref, 'mapTypeId', google.maps.MapTypeId.ROADMAP), _ref));

	                        var Item_1 = new google.maps.LatLng(49.275356, -123.107949);
	                        var Item_2 = new google.maps.LatLng(49.277624, -123.102284);

	                        var bounds = new google.maps.LatLngBounds(Item_1, Item_2);

	                        // The photograph is courtesy of the U.S. Geological Survey.
	                        var srcImage = 'assets/images/map.png';

	                        // The custom USGSOverlay object contains the USGS image,
	                        // the bounds of the image, and a reference to the map.
	                        overlay = new USGSOverlay(bounds, srcImage, map);

	                        var bounds2 = new google.maps.LatLngBounds();
	                        var bound_1 = new google.maps.LatLng(49.275795, -123.106538);
	                        var bound_2 = new google.maps.LatLng(49.277377, -123.102783);
	                        bounds2.extend(bound_2);
	                        bounds2.extend(bound_1);
	                        map.fitBounds(bounds2);
	                        // google.maps.event.addDomListener(map, 'idle', function() {

	                        //     var marker = new google.maps.Marker({
	                        //         map: map,
	                        //         animation: google.maps.Animation.DROP,
	                        //         position: latLng
	                        //     });

	                        //     var infoWindow = new google.maps.InfoWindow({
	                        //         content: "Here I am!"
	                        //     });

	                        //     google.maps.event.addListener(marker, 'click', function() {
	                        //         infoWindow.open(map, marker);
	                        //     });

	                        // });
	                }
	        }]);

	        return MapController;
	}();

	MapController.$inject = ['$scope', '$state'];
	exports.default = MapController;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LatinhubController = function () {
	    function LatinhubController($scope, $ionicSideMenuDelegate) {
	        _classCallCheck(this, LatinhubController);

	        Object.assign(this, { $scope: $scope, $ionicSideMenuDelegate: $ionicSideMenuDelegate });
	        this.setupSlider();
	    }

	    _createClass(LatinhubController, [{
	        key: "prevSlide",
	        value: function prevSlide() {
	            this.slider.sliderDelegate._slidePrev();
	        }
	    }, {
	        key: "nextSlide",
	        value: function nextSlide() {
	            this.slider.sliderDelegate._slideNext();
	        }
	    }, {
	        key: "setupSlider",
	        value: function setupSlider() {
	            //this.$ionicSideMenuDelegate.toggleLeft();
	            this.slider = {};
	            this.slider.images = [];
	            this.slider.currentPage = 0;

	            this.slider.images = [{
	                "image": "assets/images/latinhub/0.jpg"
	            }, {
	                "image": "assets/images/latinhub/1.jpg"
	            }, {
	                "image": "assets/images/latinhub/2.jpg"
	            }, {
	                "image": "assets/images/latinhub/3.jpg"
	            }, {
	                "image": "assets/images/latinhub/4.jpg"
	            }, {
	                "image": "assets/images/latinhub/5.jpg"
	            }, {
	                "image": "assets/images/latinhub/6.jpg"
	            }, {
	                "image": "assets/images/latinhub/7.jpg"
	            }, {
	                "image": "assets/images/latinhub/8.jpg"
	            }, {
	                "image": "assets/images/latinhub/9.jpg"
	            }];

	            //some options to pass to our slider
	            this.slider.sliderOptions = {
	                effect: 'slide',
	                initialSlide: 0,
	                direction: 'horizontal',
	                speed: 500,
	                loop: true,
	                autoplay: 5000
	            };
	            //create delegate reference to link with slider
	            this.slider.sliderDelegate = null;
	            //watch our sliderDelegate reference, and use it when it becomes available
	            this.$scope.$watch('data.sliderDelegate', function (newVal, oldVal) {
	                if (newVal != null) {
	                    //console.log("data.sliderDelegate", data.sliderDelegate);
	                    this.slider.sliderDelegate.on('slideChangeEnd', function () {
	                        this.slider.currentPage = this.slider.sliderDelegate.activeIndex;
	                        this.$apply();
	                    });
	                }
	            });
	        }
	    }]);

	    return LatinhubController;
	}();

	LatinhubController.$inject = ['$scope', '$ionicSideMenuDelegate'];
	exports.default = LatinhubController;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BusinessController = function BusinessController($filter, BusinessService) {
	    var _this = this;

	    _classCallCheck(this, BusinessController);

	    BusinessService.getBusiness().then(function (response) {
	        _this.list_1 = $filter('filter')(response.data, {
	            day: 1
	        });
	        _this.list_2 = $filter('filter')(response.data, {
	            day: 2
	        });
	    });
	};

	BusinessController.$inject = ['$filter', 'BusinessService'];
	exports.default = BusinessController;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ContestController = function ContestController() {
	    _classCallCheck(this, ContestController);
	};

	exports.default = ContestController;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MediaController = function MediaController($scope) {
	  _classCallCheck(this, MediaController);

	  Object.assign(this, { $scope: $scope });
	};

	MediaController.inject = ['$scope'];
	exports.default = MediaController;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SponsorsController = function () {
	  function SponsorsController($scope, $filter, $q, BusinessService) {
	    _classCallCheck(this, SponsorsController);

	    Object.assign(this, { $scope: $scope, $filter: $filter, $q: $q, BusinessService: BusinessService });
	    this.splitLists();
	  }

	  _createClass(SponsorsController, [{
	    key: 'splitLists',
	    value: function splitLists() {
	      var _this = this;

	      var promises = [this.BusinessService.getBusiness()];
	      this.$q.all(promises).then(function (values) {
	        _this.fullList = values[0].data;
	      });
	    }
	  }]);

	  return SponsorsController;
	}();

	SponsorsController.$inject = ['$scope', '$filter', '$q', 'BusinessService'];
	exports.default = SponsorsController;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PlazaService = function () {
	    function PlazaService($http, API) {
	        _classCallCheck(this, PlazaService);

	        Object.assign(this, { $http: $http, API: API });
	    }

	    _createClass(PlazaService, [{
	        key: 'getPlazas',
	        value: function getPlazas() {
	            return this.$http.get(this.API + 'plazas.json');
	        }
	    }]);

	    return PlazaService;
	}();

	PlazaService.$inject = ['$http', 'API'];
	exports.default = PlazaService;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var VendorsService = function () {
	    function VendorsService($http, API) {
	        _classCallCheck(this, VendorsService);

	        Object.assign(this, { $http: $http, API: API });
	    }

	    _createClass(VendorsService, [{
	        key: 'getVendors',
	        value: function getVendors() {
	            return this.$http.get(this.API + 'vendors.json');
	        }
	    }, {
	        key: 'getArtists',
	        value: function getArtists() {
	            return this.$http.get(this.API + 'artists.json');
	        }
	    }]);

	    return VendorsService;
	}();

	VendorsService.$inject = ['$http', 'API'];
	exports.default = VendorsService;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ScheduleService = function () {
	    function ScheduleService($http, API) {
	        _classCallCheck(this, ScheduleService);

	        Object.assign(this, { $http: $http, API: API });
	    }

	    _createClass(ScheduleService, [{
	        key: 'getSchedule',
	        value: function getSchedule() {
	            return this.$http.get(this.API + 'schedule.json');
	        }
	    }]);

	    return ScheduleService;
	}();

	ScheduleService.$inject = ['$http', 'API'];
	exports.default = ScheduleService;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DetailService = function () {
	    function DetailService($http, API) {
	        _classCallCheck(this, DetailService);

	        Object.assign(this, { $http: $http, API: API });
	    }

	    _createClass(DetailService, [{
	        key: 'getDetails',
	        value: function getDetails(section) {
	            return this.$http.get(this.API + section + '.json');
	        }
	    }]);

	    return DetailService;
	}();

	DetailService.$inject = ['$http', 'API'];
	exports.default = DetailService;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BusinessController = function () {
	    function BusinessController($http, API) {
	        _classCallCheck(this, BusinessController);

	        Object.assign(this, { $http: $http, API: API });
	    }

	    _createClass(BusinessController, [{
	        key: 'getBusiness',
	        value: function getBusiness() {
	            return this.$http.get(this.API + 'business.json');
	        }
	    }]);

	    return BusinessController;
	}();

	BusinessController.$inject = ['$http', 'API'];
	exports.default = BusinessController;

/***/ }
/******/ ]);
angular.module("latincouver").run(["$templateCache", function($templateCache) {$templateCache.put("app/components/sidemenu/sidemenu.html","");
$templateCache.put("app/locations/contest/contest.html","<ion-view ng-init=\"map.initMap()\"><div class=\"bar bar-header bar-positive\"><button ng-click=\"back()\" class=\"button icon ion-android-arrow-back\"></button> <button ui-sref=\"home\" class=\"button icon ion-home\"></button><p class=\"title\">Contest</p></div><ion-content class=\"has-header\"><div class=\"bar-subheader\"><div class=\"list card\"><div class=\"item\"><h2>Love Contest <span style=\"color: #d7598b; font-size: 25px;\">❤</span></h2><p><strong>#‎CSOL16‬</strong></p></div><div class=\"item item-body\"><p>Simply tell us why you <span style=\"color: #d7598b\">❤</span> Latin America in words or using a photo.</p><p>Enter using the form here: <a href=\"www.carnavaldelsol.com/love\">www.carnavaldelsol.com/love</a> or use ‪<strong>#‎CSOL16‬</strong> on Twitter, Instagram or by create a post on the Latincouver Facebook page.*</p><p>Good luck!</p><p><small><i>*See contest rules for more details</i></small></p><p><strong>#CSOL16 ‪#‎ShineTogether‬ ‪#‎EatPlayLive‬</strong></p></div></div><div class=\"list card\"><div class=\"item\"><h2>Eat Contest</h2><p><strong>#EatCarnaval</strong></p></div><div class=\"item item-body\"><p>Take part in the build up to Carnaval Del Sol 2016 by joining the \'Chefs Del Sol\' contest... You could win a trip to Mexico courtesy of AeroMexico.</p><p>What\'s the best Latin food? Paella? Ceviche? Tacos?</p><p>Find a photo of your favourite dish and upload at <a href=\"www.carnavaldelsol.com/eat\">www.carnavaldelsol.com/eat</a> or use hashtag <strong>#EatCarnaval</strong> on Instagram, Twitter or the Carnaval Facebook page.</p><p>Share your entry with friends to get the most votes to win the trip to Mexico. Prizes for 2nd and 3rd and most creative as well from La Taqueria ($240 worth of gift cards)</p></div></div><div class=\"list card\"><div class=\"item\"><h2>Play Contest</h2><p><strong>#EatCarnaval</strong></p></div><div class=\"item item-body\"><p>Who\'s gonna win and by what score?</p><p>ARGENTINA Vs CHILE</p><p>Enter your score here: <a href=\"www.carnavaldelsol.com/play\">www.carnavaldelsol.com/play</a></p><p>OPEN TO EVERYONE!</p><p>1. You can enter via online form: <a href=\"www.carnavaldelsol.com/play\">www.carnavaldelsol.com/play</a></p><p>2. You can also enter on the Latincouver Facebook page simply by adding a comment with your score to the following post by making it clear which country you are referring to for which score e.g. Argentina 2 Chile 2 - <a href=\"https://www.facebook.com/latincouverfans/photos/a.82336007879.81034.58418117879/10153894887102880/?type=3\">https://www.facebook.com/latincouverfans/photos/a.82336007879.81034.58418117879/10153894887102880/?type=3</a></p><p>3. The score should be the chosen score at the end of full time and if necessary extra time and penalties. For example if a team wins after extra time 2:1 but it was 1:1 at full time, put 2:1 as your score not 1:1. If a team wins on penalties it 4:2 but the game was 1:1 after extra time, put 2:1 for the correct score not 5:3 or 1:1.</p><p>4. The entries that get the score correct will be entered into a sweepstakes to win a trip to anywhere in Mexico that AeroMexico flies from Canada.</p><p>5. Runners up entries also drawn by lottery will receive tickets to Vancouver Whitecaps games.</p><p>6. Any entry suspected of foul play or cheating will be disqualified at our discretion.</p><p>7. Recipient of return flight must be aged 19 or over.</p><p>8. Deadline for entry is Sunday June 26th 2016 at 16:59pm Pacific Time.</p></div></div><div class=\"list card\"><div class=\"item\"><h2>Live Contest</h2><p><strong>#CarnavalTalent</strong></p></div><div class=\"item item-body\"><p>Take part in the build up to Carnaval Del Sol 2016 by joining the \'Carnaval Talent\' contest... You could win a trip to Mexico courtesy of AeroMexico.</p><p>What\'s your talent? Singing, dancing, soccer skills...???</p><p>Record a quick video (10-90 seconds) and upload at www.carnavaldelsol.com/live or use hashtag <strong>#CarnavalTalent</strong> on Instagram Video, Vine or the Latincouver Facebook page.</p><p>Share your entry with friends to get the most votes to win the trip to Mexico. The top 3 will get to star on stage alongside Latin America\'s hottest talent at Carnaval Del Sol on 9/10th July.</p><p><a href=\"www.carnavaldelsol.ca\">www.carnavaldelsol.ca</a></p></div></div></div></ion-content></ion-view>");
$templateCache.put("app/locations/detail/detail.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><div class=\"bar bar-header bar-positive\"><button ng-click=\"back()\" class=\"button icon ion-android-arrow-back\"></button> <button ui-sref=\"home\" class=\"button icon ion-home\"></button><p class=\"title\">{{detail.selected.name}}</p></div><ion-content class=\"has-header content\" overflow-scroll=\"false\"><div><img class=\"full-image\" ng-src=\"{{detail.selected.image}}\"></div><div ui-view=\"\"><div class=\"plaza-content\"><div class=\"list\"><span ng-bind-html=\"detail.selected.description\"></span> <span ng-bind-html=\"detail.selected.products\"></span> <button class=\"button plaza-map-button button-positive green-flat\" ui-sref=\"map\"><i class=\"ion ion-map\"></i> <span class=\"hash\">Map</span></button></div><div class=\"list\" data-ng-hide=\"!detail.selected.links.length\"><p>More info:</p><div class=\"row\" ng-repeat=\"x in detail.selected.links\" ng-if=\"$index % 3 == 0\" ng-init=\"index = $index\"><div ng-repeat=\"i in [0,1,2]\" ng-if=\"(index + i)<detail.selected.links.length\" class=\"col-33\"><div class=\"button plaza-map-button button-positive blue-flat\" data-ng-click=\"detail.launch(detail.selected.links[index+i].href)\"><i class=\"ion {{detail.selected.links[index+i].icon}}\" style=\"font-size: 30px; margin-top: 10px;\"></i></div></div></div></div></div></div></ion-content></ion-view>");
$templateCache.put("app/locations/event/eat.html","<button class=\"button event-contest-button\" ui-sref=\"contest\"><span>CONTEST <span class=\"hash\">#EATCARNAVAL</span></span></button><div class=\"list event-sub-list\"><div class=\"row\"><div class=\"col col-50\"><a href=\"#/plazas/detail/3\"><div class=\"green-flat\"><h1>Beer!</h1></div></a></div><div class=\"col col-50\"><a href=\"#/plazas/detail/2\"><div class=\"red-flat\"><h1>Food vendors</h1></div></a></div></div><div class=\"row\"><div class=\"col col-50\"><a href=\"#/plazas/detail/4\"><div class=\"blue-flat\"><h1>Chefs del sol</h1></div></a></div><div class=\"col col-50\"><a href=\"#/plazas/detail/8\"><div class=\"yellow-flat\"><h1>Mini chefs</h1></div></a></div></div></div>");
$templateCache.put("app/locations/event/event.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><ion-side-menus><ion-side-menu side=\"left\"><ion-content class=\"side-menu-list\"><div class=\"list\"><img class=\"title-image-menu\" src=\"assets/images/logo.png\" alt=\"\"> <a menu-close=\"\" ui-sref=\"home\" class=\"item item-list item-icon-left\"><i class=\"icon ion-calendar\"></i> Next Events</a><div class=\"item item-divider\">Event data</div><a menu-close=\"\" ui-sref=\"plazas\" class=\"item item-list item-icon-left\"><i class=\"icon ion-beer\"></i> Plazas</a> <a menu-close=\"\" ui-sref=\"vendors\" class=\"item item-list item-icon-left\"><i class=\"icon ion-pricetags\"></i> Vendors</a> <a menu-close=\"\" ui-sref=\"map\" class=\"item item-list item-icon-left\"><i class=\"icon ion-ios-location-outline\"></i> Map</a><a menu-close=\"\" ui-sref=\"contest\" class=\"item item-list item-icon-left\"><i class=\"icon ion-happy-outline\"></i> Contest</a><div class=\"item item-divider\">Community</div><a menu-close=\"\" ui-sref=\"sponsors\" class=\"item item-list item-icon-left\"><i class=\"icon ion-android-contacts\"></i> Sponsors</a> <a menu-close=\"\" class=\"item item-list item-icon-left\" href=\"#\" onclick=\"window.open(\'http://www.latincouver.ca/donation-form\', \'_system\', \'location=yes\'); return false;\"><i class=\"icon ion-cash\"></i> Donate</a></div></ion-content></ion-side-menu><ion-side-menu-content><div class=\"bar bar-header bar-positive\"><button class=\"button icon ion-navicon\" ng-click=\"event.toggleLeft()\"></button> <span class=\"title\">CARNAVAL DEL SOL</span></div><div class=\"bar bar-subheader no-padding\"><div class=\"button-bar\"><div class=\"button col col-25 event-header-button\" data-ng-class=\"{\'event-active\' : $state.is(\'event\')}\" ui-sref=\"event\"><div><i class=\"icon ion-home\"></i> MAIN</div></div><div ui-sref=\".eat\" class=\"button col col-25 event-header-button\" data-ng-class=\"{\'event-active\' : $state.is(\'event.eat\')}\"><div><img ng-src=\"assets/images/icons/eat.png\"> EAT</div></div><div ui-sref=\".play\" class=\"button col col-25 event-header-button\" data-ng-class=\"{\'event-active\' : $state.is(\'event.play\')}\"><div><img ng-src=\"assets/images/icons/play.png\"> PLAY</div></div><div ui-sref=\".live\" class=\"button col col-25 event-header-button\" data-ng-class=\"{\'event-active\' : $state.is(\'event.live\')}\"><div><img ng-src=\"assets/images/icons/live.png\"> LIVE</div></div></div></div><ion-content class=\"has-subheader content\" overflow-scroll=\"false\"><div data-ng-show=\"$state.is(\'event\')\"><div class=\"event-navigation\"><button class=\"button button-next\" ng-click=\"event.nextSlide()\"><i class=\"icon ion-chevron-right\"></i></button> <button class=\"button button-prev\" ng-click=\"event.prevSlide()\"><i class=\"icon ion-chevron-left\"></i></button></div><ion-slides class=\"event-slides\" options=\"event.slider.sliderOptions\" slider=\"event.slider.sliderDelegate\"><ion-slide-page class=\"event-slide-box\" ng-repeat=\"slide in event.slider.images\" ui-sref=\"detailMaster({section:slide.detailMaster, id:slide.id})\"><img ng-src=\"{{slide.image}}\"></ion-slide-page></ion-slides></div><div ui-view=\"\"><div class=\"list event-list\"><div class=\"row\" data-ng-repeat=\"p in event.vendorsList\" ng-if=\"$index % 2 == 0\"><div class=\"col col-50 grow\" ui-sref=\"detailMaster({section:event.vendorsList[$index].detailMaster, id:event.vendorsList[$index].id})\"><img data-ng-src=\"{{event.vendorsList[$index].image}}\" data-ng-show=\"event.vendorsList[$index].image\"><div class=\"{{event.vendorsList[$index].color}}\"><h5>{{event.vendorsList[$index].name}}</h5></div></div><div class=\"col col-50 grow\" ng-show=\"event.vendorsList[$index+1]\" ui-sref=\"detailMaster({section:event.vendorsList[$index].detailMaster, id:event.vendorsList[$index+1].id})\"><img data-ng-src=\"{{event.vendorsList[$index+1].image}}\" data-ng-show=\"event.vendorsList[$index+1].image\"><div class=\"{{event.vendorsList[$index+1].color}}\"><h5>{{event.vendorsList[$index+1].name}}</h5></div></div></div></div></div></ion-content></ion-side-menu-content></ion-side-menus></ion-view>");
$templateCache.put("app/locations/event/event.menu.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><ion-side-menus><ion-side-menu side=\"left\"><ion-content class=\"side-menu-list\"><div class=\"row item-header\"><img class=\"title-image title-image-menu\" src=\"assets/images/logo.png\" alt=\"\"></div><div class=\"list\"><a ui-sref=\"mainStage\" class=\"item item-list item-icon-left\"><i class=\"icon ion-calendar\"></i> Next Events</a><div class=\"item item-divider\">Event data</div><a ui-sref=\"plazas\" class=\"item item-list item-icon-left\"><i class=\"icon ion-beer\"></i> Plazas</a> <a ui-sref=\"vendors\" class=\"item item-list item-icon-left\"><i class=\"icon ion-pricetags\"></i> Vendors</a> <a ui-sref=\"map\" class=\"item item-list item-icon-left\"><i class=\"icon ion-ios-location-outline\"></i> Map</a> <a ui-sref=\"faq\" class=\"item item-list item-icon-left\"><i class=\"icon ion-ios-checkmark-outline\"></i> FAQ</a> <a ui-sref=\"contest\" class=\"item item-list item-icon-left\"><i class=\"icon ion-happy-outline\"></i> Contest</a><div class=\"item item-divider\">Community</div><a ui-sref=\"media\" class=\"item item-list item-icon-left\"><i class=\"icon ion-pound\"></i> Media <span class=\"item-note\">#shinetogether</span></a> <a ui-sref=\"sponsors\" class=\"item item-list item-icon-left\"><i class=\"icon ion-android-contacts\"></i> Sponsors</a> <a ui-sref=\"donate\" class=\"item item-list item-icon-left\"><i class=\"icon ion-cash\"></i> Donate</a></div></ion-content></ion-side-menu><ion-side-menu-content><div class=\"bar bar-header bar-positive\"><button class=\"button icon ion-navicon\" ng-click=\"event.toggleLeft()\"></button> <span class=\"title\">CARNAVAL DEL SOL</span></div><ion-content><div ui-view=\"\"></div></ion-content></ion-side-menu-content></ion-side-menus></ion-view>");
$templateCache.put("app/locations/event/live.html","<button class=\"button event-contest-button\" ui-sref=\"contest\"><span>CONTEST <span class=\"hash\">#LIVECARNAVAL</span></span></button><div class=\"list event-sub-list\"><div class=\"row\"><div class=\"col col-50 grow\"><a href=\"#/plazas/detail/1\"><div class=\"blue-flat\"><h1>Main stage performers</h1></div></a></div><div class=\"col col-50\"><a href=\"#/plazas\"><div class=\"red-flat\"><h1>performers at other venues</h1></div></a></div></div><div class=\"row\"><div class=\"col col-50\"><a href=\"#/plazas/detail/7\"><div class=\"green-flat\"><h1>fashion show</h1></div></a></div><div class=\"col col-50\"><a href=\"#/plazas/detail/6\"><div class=\"yellow-flat\"><h1>art exhibitions</h1></div></a></div></div></div>");
$templateCache.put("app/locations/event/play.html","<button class=\"button event-contest-button\" ui-sref=\"contest\"><span>CONTEST <span class=\"hash\">#PLAYCARNAVAL</span></span></button><div class=\"list event-sub-list\"><div class=\"row\"><div class=\"col col-50\"><a href=\"#/plazas/detail/7\"><div class=\"blue-flat\"><h1>Dance Workshops</h1></div></a></div><div class=\"col col-50\"><a href=\"#/plazas/detail/5\"><div class=\"green-flat\"><h1>Soccer Tournament</h1></div></a></div></div><div class=\"row\"><div class=\"col col-50\"><a href=\"#/plazas/detail/5\"><div class=\"red-flat\"><h1>bubble ball</h1></div></a></div><div class=\"col col-50\"><a href=\"#/plazas/detail/8\"><div class=\"yellow-flat\"><h1>kids activities</h1></div></a></div></div></div>");
$templateCache.put("app/locations/home/home.html","<ion-view view-title=\"main\" class=\"no-padding\"><div class=\"bar bar-header bar-positive bar-positive-main\"><span class=\"title\">UPCOMING EVENTS</span></div><ion-content class=\"content no-padding main-content\"><div class=\"main-list\"><div ui-sref=\"event\" class=\"button item grow\"><div class=\"green\"><h3>Carnaval del Sol</h3><h4><i class=\"ion ion-calendar icon-accent\"></i> July 9th & 10th | 9am - 10pm</h4><h4><i class=\"ion ion-android-pin icon-accent\"></i> Concord Pacific Place | 88 Pacific Blvd</h4></div><img src=\"assets/images/home/carnaval_delsol.jpg\"></div><div class=\"button item main-small grow\" ui-sref=\"latinhub\"><div class=\"blue\"><h3>Latin Innovation Hub</h3></div><img src=\"assets/images/home/latin_events.jpg\"></div><div class=\"button item grow\" href=\"#\" onclick=\"window.open(\'http://www.latincouver.ca/events/latin-live-events/\', \'_system\', \'location=yes\'); return false;\"><div class=\"yellow\"><h3>Latin Live Events</h3></div><img src=\"assets/images/home/latin_america.jpg\"></div><div class=\"button item main-small grow\" href=\"#\" onclick=\"window.open(\'http://www.expoplazalatina.ca/\', \'_system\', \'location=yes\'); return false;\"><div class=\"red\"><h3>ExpoPlaza Latina</h3><h4><i class=\"ion ion-calendar icon-accent\"></i> September 14th</h4><h4><i class=\"ion ion-android-pin icon-accent\"></i> Vancouver</h4></div><img src=\"assets/images/home/expoplaza_latina.jpg\"></div><div class=\"button item main-small grow\" href=\"#\" onclick=\"window.open(\'http://www.latincouver.ca/lcpn/\', \'_system\', \'location=yes\'); return false;\"><div class=\"green\"><h3>LCPN</h3><h4><i class=\"ion ion-calendar icon-accent\"></i> November 21st</h4><h4><i class=\"ion ion-android-pin icon-accent\"></i> Vancouver</h4></div><img src=\"assets/images/home/LCPN.jpg\"></div></div></ion-content></ion-view>");
$templateCache.put("app/locations/intro/intro.html","<ion-view view-title=\"intro\"><button class=\"button button-clear button-skip bottom-right\" ng-click=\"introCtrl.startApp()\">SKIP</button><ion-slides options=\"introCtrl.options\" pager=\"\" slider=\"introCtrl.data.slider\"><ion-slide-page class=\"box first\"><div><h1><span>LATINCOUVER</span> HELPS YOU TO CONNECT AND GROW THROUGH CULTURE AND BUSINESS.</h1></div></ion-slide-page><ion-slide-page class=\"box second\"><div><h1>WE ARE THE SQUARE ONE FOR 100,000 <span>LATIN AMERICANS</span> MAKING BRITISH COLUMBIA THEIR NEW HOME.</h1></div></ion-slide-page><ion-slide-page class=\"box third\"><div><h1>REGARDLESS OF WHERE YOU ARE FROM, <span>LATINCOUVER</span> IS HERE TO HELP BRIDGE THE GAP.</h1><button class=\"button button-full button-energized\" ng-click=\"introCtrl.startApp()\">Start</button></div></ion-slide-page></ion-slides></ion-view>");
$templateCache.put("app/locations/latinhub/latinhub.html","<ion-view view-title=\"intro\"><div class=\"bar bar-header bar-positive\"><button ng-click=\"back()\" class=\"button icon ion-android-arrow-back\"></button><p class=\"title\">latin-hub</p></div><ion-content class=\"has-header content\" overflow-scroll=\"false\"><div data-ng-show=\"$state.is(\'latinhub\')\"><div class=\"latinhub-navigation\"><button class=\"button button-next\" ng-click=\"latinhub.nextSlide()\"><i class=\"icon ion-chevron-right\"></i></button> <button class=\"button button-prev\" ng-click=\"latinhub.prevSlide()\"><i class=\"icon ion-chevron-left\"></i></button></div><ion-slides class=\"latinhub-slides\" options=\"latinhub.slider.sliderOptions\" slider=\"latinhub.slider.sliderDelegate\"><ion-slide-page class=\"latinhub-slide-box\" ng-repeat=\"slide in latinhub.slider.images\"><img ng-src=\"{{slide.image}}\"></ion-slide-page></ion-slides></div><div class=\"plaza-content\"><p><strong>LATINCOUVER AND PALAGON ARE PROUD TO PRESENT THE LATIN AMERICAN INNOVATION HUB</strong></p><p><strong>Our communities have united to create affordable office space for entrepreneurs.</strong></p><p>The Latin American Innovation Hub has been created as a socio-economic space in BC to promote business, cultural relationships and professional connections for Latin American entrepreneurs and Latin American enthusiasts. We offer a gathering place where all business communities can share ideas, expand their networks and circles of influence, a physical manifestation of the mission and vision that Latincouver has strived since its creation in 2009.</p><p>The office sharing space is becoming a popular concept in business centered regions like Greater Vancouver, where rental prices for new businesses can be hard to sustain. This concept of shared business space has existed for centuries in Latin American countries in the form of The Plaza.</p><p>Plazas are open spaces in the centre of the city where entrepreneurs gather to develop businesses, interchange culture, arts and socialize with all the people in the town. The Plaza is the birthplace of Latin American culture, the focal point of its heritage and the engine that fueled our economic growth.</p><p>After years of knocking on so many doors, Latincouver was warmly welcomed to to develop our Plaza in with Palagon. Palagon is a commercial space company, with deep roots in the Iranian community, that shares Latin values of integrity and gratitude.</p><p>Today the Iranian community is a socio-economic powerhouse that is helping to build the infrastructure of Greater Metro Vancouver. As Latin Americans we could not have asked for a better community to partner up with. The iranian community has a long history of trying to settle and succeed in BC and Canada. They understand the struggles that we are facing because they lived through them.</p><p>Palagon has offered its support and mentorship as Latincouver strives to settle a home for Latin American people to immigrate to Canada in the North Shore. The success of the Latin Innovation Hub will be one more example of the amazing things that can be achieved when multicultural communities support each other.</p><p>Greater Vancouver already has defined business areas marked by specific cultural groups, and North Vancouver seemed like a good location to bring multicultural options. The North Shore offers unparalleled lifestyle opportunities for immigrants looking to build a better life in Canada.</p><p>A short 10 minute drive to Downtown Vancouver, and Surrounded by green snow capped mountains, Ocean views and overlooking Majestic Downtown vancouver, the North Shore is an ideal place for young Latin American families to grow in a welcoming community. As we take on the role of settling this land for our community, Latincouver chose the building located at 2030 Marine Dr. as the place to build our Latin Innovation Hub.</p><p>One of the many benefits that the Latin Innovation Hub will provide is a solution to the problem of affordable office space with fast direct access to Downtown Vancouver. Our office rental prices could vary from from $350 to $1250 per month, with 1 to 6 work stations available. Another solution that we offer businesses who wish to benefit from being part of the economic possibilities that we are working on generating is a virtual address.</p><p>We offer virtual or part-time offices from $69 to $170, where your business can possess a mailing address, access to meeting rooms, host speaking events, galas and other benefits yet to come.</p><p>As part of our commitment to economic growth, Latincouver and Palagon will be sponsoring 5 qualified entrepreneurs with three months of free desk space in our Plaza. Be part of this exciting new work space concept, we encourage entrepreneurs to present business ideas and start their project with Latincouver and Palagon. If you are an entrepreneur, or you are thinking of becoming an entrepreneur, we invite you to visit our Plaza, make an appointment and take a look at the future of the Latin American Community in Greater Metro Vancouver.</p><p>Act now and let us know your needs as we are currently under renovations and we are open to discussing what your particular needs might be.</p><p><strong>Contact Latincouver to come and meet us</strong></p><p><strong>Contact Palagon for more information</strong></p><p>Tina Ebrahimi<br>Business Development Manager<br>Palagon<br>604-331-6004<br>leasing@palagon.com</p><p><strong>Other office features</strong></p><p>Flexible leasing options<br>Fully furnished offices at same great rates<br>Beautiful designer offices<br>Security & privacy guaranteed<br>Build your business with the support of vancouver’s number one locally Owned small office landlord!</p></div></ion-content></ion-view>");
$templateCache.put("app/locations/mainstage/detail.html","<h2>{{$stateParams.id}} AHAUAUAUUAAUAUAUAUunsak- salkcascamks aks ças mlas amlçs as a</h2>");
$templateCache.put("app/locations/mainstage/mainstage.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><div class=\"bar bar-header bar-positive\"><button ui-sref=\"event\" class=\"button icon ion-android-arrow-back\"></button><h1 class=\"title\">CARNAVAL DEL SOL</h1></div><ion-content class=\"has-header content no-padding\" overflow-scroll=\"false\"><div class=\"button-bar\"><div class=\"button col col-100 event-header-button\"><div># View Schedule</div></div></div><div class=\"item event-buttons-page\"><div class=\"item item-body\"><p>Carnaval de Sol is the biggest Latin festival in the Pacific Northwest. It will be 2 days of live music, art, dance, sports, and poetry in celebration of Latin American Culture. For 2016, Carnaval del Sol will bring together more than 350 artists from different Latin American countries.</p></div><div class=\"row\" ng-repeat=\"artist in mainstageCtrl.artists\">{{artist.name}}</div></div><div ui-view=\"mainstage\"></div></ion-content></ion-view>");
$templateCache.put("app/locations/map/map.html","<ion-view ng-init=\"map.initMap()\"><div class=\"bar bar-header bar-positive\"><button ng-click=\"back()\" class=\"button icon ion-android-arrow-back\"></button> <button ui-sref=\"home\" class=\"button icon ion-home\"></button><p class=\"title\">Map</p></div><ion-content class=\"has-header content\"><div id=\"map\" data-tap-disabled=\"true\"></div></ion-content></ion-view>");
$templateCache.put("app/locations/media/media.html","<ion-view view-title=\"title\"><div class=\"bar bar-header bar-positive\"><button ng-click=\"back()\" class=\"button icon ion-android-arrow-back\"></button> <button ui-sref=\"home\" class=\"button icon ion-home\"></button><p class=\"title\">Media</p></div><ion-content overflow-scroll=\"true\" class=\"iframe-wrapper\">{{media.openFb}}<figure class=\"op-social\"><iframe src=\"https://www.facebook.com/latincouverfans/app/116943498446376/?ref=page_internal\" width=\"500\" height=\"0\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\"></iframe></figure></ion-content></ion-view>");
$templateCache.put("app/locations/plazas/detail.biz.html","<div class=\"plaza-content\"><div class=\"list\"><span ng-bind-html=\"plaza.selected.business_info\"></span></div></div><div class=\"list event-list\"><div class=\"row\" data-ng-repeat=\"p in plaza.selected.biz\" ng-if=\"$index % 2 == 0\"><div class=\"col col-50\" ui-sref=\"detailMaster({section:plaza.selected.biz[$index].detailMaster, id:plaza.selected.biz[$index].id})\"><img data-ng-src=\"{{plaza.selected.biz[$index].image}}\" data-ng-show=\"plaza.selected.biz[$index].image\"><div class=\"{{plaza.selected.biz[$index].color}}\"><h5>{{plaza.selected.biz[$index].name}}</h5></div></div><div class=\"col col-50\" ng-show=\"plaza.selected.biz[$index+1]\" ui-sref=\"detailMaster({section:plaza.selected.biz[$index+1].detailMaster, id:plaza.selected.biz[$index+1].id})\"><img data-ng-src=\"{{plaza.selected.biz[$index+1].image}}\" data-ng-show=\"plaza.selected.biz[$index+1].image\"><div class=\"{{plaza.selected.biz[$index+1].color}}\"><h5>{{plaza.selected.biz[$index+1].name}}</h5></div></div></div></div>");
$templateCache.put("app/locations/plazas/detail.day1.html","<div class=\"detail-schedule-list\"><div class=\"row\" data-ng-repeat=\"s in plaza.selected.list_1\"><div class=\"{{s.color}}\"><h3>{{s.from}}</h3><h3>{{s.to}}</h3></div><div><h4>{{s.name}}</h4><p>{{s.description}}</p><p>{{s.type}}</p></div></div></div>");
$templateCache.put("app/locations/plazas/detail.day2.html","<div class=\"detail-schedule-list\"><div class=\"row\" data-ng-repeat=\"s in plaza.selected.list_2\"><div class=\"{{s.color}}\"><h3>{{s.from}}</h3><h3>{{s.to}}</h3></div><div><h4>{{s.name}}</h4><p>{{s.description}}</p><p>{{s.type}}</p></div></div></div>");
$templateCache.put("app/locations/plazas/detail.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><div class=\"bar bar-header bar-positive\"><button ng-click=\"back()\" class=\"button icon ion-android-arrow-back\"></button> <button ui-sref=\"home\" class=\"button icon ion-home\"></button><p class=\"title\">{{plaza.selected.name}}</p></div><ion-content class=\"has-header content\" overflow-scroll=\"false\"><div><img class=\"plaza-image\" ng-src=\"{{plaza.selected.image}}\"></div><div class=\"button-bar plaza-bar\"><div class=\"button col col-25 detail-plaza-button\" data-ng-class=\"{\'plaza-active\' : $state.is(\'detail\')}\" ui-sref=\"detail\"><div>Info</div></div><div class=\"button col col-25 detail-plaza-button\" ui-sref=\".day1\" data-ng-class=\"{\'plaza-active\' : $state.is(\'detail.day1\')}\" data-ng-hide=\"!plaza.selected.list_1.length\"><div>Sat 9 Jul</div></div><div class=\"button col col-25 detail-plaza-button\" ui-sref=\".day2\" data-ng-class=\"{\'plaza-active\' : $state.is(\'detail.day2\')}\" data-ng-hide=\"!plaza.selected.list_2.length\"><div>Sat 10 Jul</div></div><div class=\"button col col-25 detail-plaza-button\" ui-sref=\".biz\" data-ng-class=\"{\'plaza-active\' : $state.is(\'detail.biz\')}\" data-ng-hide=\"!plaza.selected.biz.length\"><div>Business</div></div></div><div ui-view=\"\"><div class=\"plaza-content\"><div class=\"list\"><span ng-bind-html=\"plaza.selected.info\"></span> <button class=\"button plaza-map-button button-positive\" ui-sref=\"map\"><i class=\"ion ion-map\"></i> <span class=\"hash\">Map</span></button></div></div><div class=\"list event-list\"><div class=\"row\" data-ng-repeat=\"p in plaza.vendorsList\" ng-if=\"$index % 2 == 0\"><div class=\"col col-50\" ui-sref=\"detailMaster({section:plaza.vendorsList[$index].detailMaster, id:plaza.vendorsList[$index].id})\"><img data-ng-src=\"{{plaza.vendorsList[$index].image}}\" data-ng-show=\"plaza.vendorsList[$index].image\"><div class=\"{{plaza.vendorsList[$index].color}}\"><h5>{{plaza.vendorsList[$index].name}}</h5></div></div><div class=\"col col-50\" ng-show=\"plaza.vendorsList[$index+1]\" ui-sref=\"detailMaster({section:plaza.vendorsList[$index+1].detailMaster, id:plaza.vendorsList[$index+1].id})\"><img data-ng-src=\"{{plaza.vendorsList[$index+1].image}}\" data-ng-show=\"plaza.vendorsList[$index+1].image\"><div class=\"{{plaza.vendorsList[$index+1].color}}\"><h5>{{plaza.vendorsList[$index+1].name}}</h5></div></div></div></div></div></ion-content></ion-view>");
$templateCache.put("app/locations/plazas/plazas.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><div class=\"bar bar-header bar-positive\"><button ui-sref=\"event\" class=\"button icon ion-android-arrow-back\"></button><h1 class=\"title\">PLAZAS</h1></div><ion-content class=\"has-header content\" overflow-scroll=\"false\"><div class=\"plaza-list\"><div class=\"row\" data-ng-repeat=\"p in plaza.list\" ui-sref=\"detail({id:p.id})\"><div><img data-ng-src=\"{{p.image}}\"></div><div class=\"{{p.color}}\"><p>{{p.name}}</p><i class=\"ion ion-chevron-right\"></i></div></div></div></ion-content></ion-view>");
$templateCache.put("app/locations/splash/splash.html","<ion-view view-title=\"splash\"><ion-content><img src=\"../assets/images/\" <=\"\" ion-content=\"\"></ion-content></ion-view>");
$templateCache.put("app/locations/sponsors/sponsors.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><div class=\"bar bar-header bar-positive\"><button ui-sref=\"event\" class=\"button icon ion-android-arrow-back\"></button><p class=\"title\">sponsors</p></div><ion-content class=\"has-header content\" overflow-scroll=\"false\"><div ui-view=\"\"><div class=\"list list-inset\"><label class=\"item item-input\"><i class=\"icon ion-search placeholder-icon\"></i> <input type=\"text\" placeholder=\"Search\" ng-model=\"vendorSearch\"></label></div><div class=\"list\"><a class=\"item item-thumbnail-left\" href=\"#\" data-ng-repeat=\"v in sponsors.fullList | filter:vendorSearch\" ui-sref=\"detailMaster({section:v.detailMaster, id:v.id})\"><img class=\"plaza-image\" data-ng-src=\"{{v.image}}\" data-ng-show=\"v.image\"><h2>{{v.name}}</h2><p>{{v.products}}</p></a></div></div></ion-content></ion-view>");
$templateCache.put("app/locations/vendors/nonprofit.html","<div class=\"list list-inset\"><label class=\"item item-input\"><i class=\"icon ion-search placeholder-icon\"></i> <input type=\"text\" placeholder=\"Search\" ng-model=\"vendorSearch\"></label></div><div class=\"list\"><a class=\"item item-thumbnail-left\" href=\"#\" data-ng-repeat=\"v in vendor.vendorsList_nonprofit | filter:vendorSearch\" ui-sref=\"detailMaster({section:v.detailMaster, id:v.id})\"><img class=\"plaza-image\" data-ng-src=\"{{v.image}}\" data-ng-show=\"v.image\"><h2>{{v.name}}</h2><p>{{v.products}}</p></a></div>");
$templateCache.put("app/locations/vendors/products.html","<div class=\"list list-inset\"><label class=\"item item-input\"><i class=\"icon ion-search placeholder-icon\"></i> <input type=\"text\" placeholder=\"Search\" ng-model=\"vendorSearch\"></label></div><div class=\"list\"><a class=\"item item-thumbnail-left\" href=\"#\" data-ng-repeat=\"v in vendor.vendorsList_products | filter:vendorSearch\" ui-sref=\"detailMaster({section:v.detailMaster, id:v.id})\"><img class=\"plaza-image\" data-ng-src=\"{{v.image}}\" data-ng-show=\"v.image\"><h2>{{v.name}}</h2><p>{{v.products}}</p></a></div>");
$templateCache.put("app/locations/vendors/vendors.html","<ion-view class=\"no-padding\" hide-nav-bar=\"true\" view-title=\"Events\"><div class=\"bar bar-header bar-positive\"><button ui-sref=\"event\" class=\"button icon ion-android-arrow-back\"></button><p class=\"title\">Vendors</p></div><ion-content class=\"has-header content\" overflow-scroll=\"false\"><div class=\"button-bar event-bar\"><div class=\"button col col-33 event-header-button\" data-ng-class=\"{\'event-active\' : $state.is(\'vendors\')}\" ui-sref=\"vendors\"><div>FOOD</div></div><div class=\"button col col-33 event-header-button\" ui-sref=\".products\" data-ng-class=\"{\'event-active\' : $state.is(\'vendors.products\')}\"><div>PRODUCTS</div></div><div class=\"button col col-33 event-header-button\" ui-sref=\".nonprofit\" data-ng-class=\"{\'event-active\' : $state.is(\'vendors.nonprofit\')}\"><div>NON PROFIT</div></div></div><div ui-view=\"\"><div class=\"list list-inset\"><label class=\"item item-input\"><i class=\"icon ion-search placeholder-icon\"></i> <input type=\"text\" placeholder=\"Search\" ng-model=\"vendorSearch\"></label></div><div class=\"list\"><a class=\"item item-thumbnail-left\" href=\"#\" data-ng-repeat=\"v in vendor.vendorsList_food | filter:vendorSearch\" ui-sref=\"detailMaster({section:v.detailMaster, id:v.id})\"><img class=\"plaza-image\" data-ng-src=\"{{v.image}}\" data-ng-show=\"v.image\"><h2>{{v.name}}</h2><p>{{v.products}}</p></a></div></div></ion-content></ion-view>");}]);