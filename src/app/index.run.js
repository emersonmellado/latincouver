function runBlock ($log, $rootScope, $state, $stateParams) {
  'ngInject';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
        // to be used for back button //won't work when page is reloaded.
        $rootScope.previousState_name = fromState.name;
        $rootScope.previousState_params = fromParams;
    });
    
    //back button function called from back button's ng-click="back()"
    $rootScope.back = function() {
        if ($rootScope.previousState_name){
          $state.go($rootScope.previousState_name,$rootScope.previousState_params);
        }else{
          $state.go('home');
        }
    };    
}

runBlock.$inject = ['$log','$rootScope','$state','$stateParams'];
export default runBlock;