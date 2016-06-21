class IntroController {
    constructor($state) {
        this.$state = $state;
        if (window.localStorage.didTutorial === "true") {
            this.startApp();
        }
    }
    toIntro() {
        window.localStorage.didTutorial = "false";
        this.$state.go('intro');
    }
    startApp() {
        this.$state.go('home');
        window.localStorage.didTutorial = true;
    }
}
IntroController.$inject = ['$state'];
export default IntroController;