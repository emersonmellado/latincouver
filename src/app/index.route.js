function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('intro', {
      url: '/intro',
      views: {
        home: {
          templateUrl: 'app/locations/intro/intro.html',
          controller: 'IntroController as introCtrl'
        }
      }
    })    
    .state('splash', {
      url: '/splash',
      views: {
        home: {
          templateUrl: 'app/locations/splash/splash.html',
          controller: 'SplashController as splCtrl'
        }
      }
    }) 
    .state('help', {
      url: '/help',
      views: {
        help: {
          templateUrl: 'app/locations/help/help.html',
          controller: 'HelpController as helpCtrl'
        }
      }
    })     
    .state('home', {
      url: '/home',
      views: {
        home: {
          templateUrl: 'app/locations/home/home.html',
          controller: 'HomeController as homeCtrl'
        }
      }
    })
    .state('event', {
      url: '/event/:eventName',
      views: {
        home: {
          templateUrl: 'app/locations/event/event.html',
          controller: 'EventController as eventCtrl'
        }
      }
    })
    .state('mainStage', {
      url: '/mainstage',
      views: {
        home: {
          templateUrl: 'app/locations/mainstage/mainstage.html',
          controller: 'MainstageController as mainstageCtrl'
        }
      }
    })
    .state('mainStage.detail', {
      url: '/detail/:id',
      views: {
        mainstage: {
          templateUrl: 'app/locations/mainstage/detail.html'
        }
      }
    });     

    

  $urlRouterProvider.otherwise('/splash');
}

export default routerConfig;
