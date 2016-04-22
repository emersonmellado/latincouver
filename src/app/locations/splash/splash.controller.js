class SplashController {
  //constructor($scope, $state, $ionicSlideBoxDelegate) {
  constructor($state, $timeout, $ionicLoading) {
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
        this.$state.go('main');
        $ionicLoading.hide();
    } else {
        this.$state.go('intro');
        $ionicLoading.hide();
    }

  }

}
SplashController.$inject = ['$state','$timeout','$ionicLoading'];
export default SplashController;
