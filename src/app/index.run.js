function runBlock ($log, $rootScope, $state, $stateParams) {
  'ngInject';

  //$log.debug('runBlock end');
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;  
}

runBlock.$inject = ['$log','$rootScope','$state','$stateParams'];
export default runBlock;
