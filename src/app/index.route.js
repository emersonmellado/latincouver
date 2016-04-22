function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('intro', {
      url: '/intro',
      views: {
        main: {
          templateUrl: 'app/locations/intro/intro.html',
          controller: 'IntroController as introCtrl'
        }
      }
    })    
    .state('splash', {
      url: '/splash',
      views: {
        main: {
          templateUrl: 'app/locations/splash/splash.html',
          controller: 'SplashController as splCtrl'
        }
      }
    })  
    .state('main', {
      url: '/main',
      views: {
        main: {
          templateUrl: 'app/locations/main/main.html',
          controller: 'MainController as mainCtrl'
        }
      }
    })
    .state('event', {
      url: '/event/:eventName',
      views: {
        main: {
          templateUrl: 'app/locations/event/event.html',
          controller: 'EventController as eventCtrl'
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
    });

  $urlRouterProvider.otherwise('/splash');
}

export default routerConfig;
