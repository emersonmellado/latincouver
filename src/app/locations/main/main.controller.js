class MainController {
    constructor($state,$scope, $ionicSideMenuDelegate) {
        this.$state = $state;  
        this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;    
    }
    toIntro() {
        window.localStorage.didTutorial = "false";
        console.log("intro");
        this.$state.go('intro');
    }
    toggleLeft() {
        this.$ionicSideMenuDelegate.toggleLeft();
    }  
}
MainController.$inject = ['$state','$scope','$ionicSideMenuDelegate'];
export default MainController;