class MainController {
    constructor($state, $scope, $ionicSideMenuDelegate) {
        this.$state = $state;
        this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.sideMenu = [
            { title: 'Main Stage', sref: 'mainStage' },
            { title: 'Plazas', sref: 'plazas' },
            { title: 'Vendors', sref: 'vendors' },
            { title: 'Map', sref: 'map' },
            { title: 'FAQ', sref: 'faq' },
            { title: 'Contest', sref: 'contest' },
            { title: 'Donate', sref: 'donate' },
            { title: 'Media (#shinetogether)', sref: 'media' },
            { title: 'Sponsors and Partners', sref: 'sponsors' },
            { title: 'Latincouver Main Menu', sref: 'main' }
        ];

        this.name = "latincouver"; 
        this.obj = "app"; 
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
MainController.$inject = ['$state', '$scope', '$ionicSideMenuDelegate'];
export default MainController;
