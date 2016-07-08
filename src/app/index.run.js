function runBlock($log, $rootScope, $state, $stateParams, $ionicHistory) {
  'ngInject';

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
    // to be used for back button //won't work when page is reloaded.
    $rootScope.previousState_name = fromState.name;
    $rootScope.previousState_params = fromParams;
  });

  //back button function called from back button's ng-click="back()"
  $rootScope.back = function() {
    window.history.go(-1);
  };
}

runBlock.$inject = ['$log', '$rootScope', '$state', '$stateParams', '$ionicHistory'];
export default runBlock;
