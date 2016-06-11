class IntroController {
    constructor($state) {
        this.$state = $state;
        if (window.localStorage.didTutorial === "true") {
            console.log('Skip intro');
            this.startApp();
        }
    }
    toIntro() {
        window.localStorage.didTutorial = "false";
        console.log("intro");
        this.$state.go('intro');
    }
    startApp() {
        this.$state.go('home');
        window.localStorage.didTutorial = true;
    }
}
IntroController.$inject = ['$state'];
export default IntroController;