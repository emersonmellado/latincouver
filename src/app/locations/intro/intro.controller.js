class IntroController {
    //constructor($scope, $state, $ionicSlideBoxDelegate) {
    constructor($state) {
        this.$state = $state;
        if (window.localStorage.didTutorial === "true") {
            console.log('Skip intro');
            this.startApp();
        // } else {
        //     setTimeout(function() {
        //         navigator.splashscreen.hide();
        //     }, 750);
        }
    }
    toIntro() {
        window.localStorage.didTutorial = "false";
        console.log("intro");
        this.$state.go('intro');
    }
    startApp() {
        this.$state.go('main');
        window.localStorage.didTutorial = true;
    }
}
IntroController.$inject = ['$state'];
export default IntroController;