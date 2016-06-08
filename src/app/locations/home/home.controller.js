class HomeController {
    constructor($state, $scope, $ionicSideMenuDelegate) {
        this.$state = $state;
        this.$ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.sideMenu = [
            { title: 'Main Stage', icon: 'ion-heart', sref: 'mainStage' },
            { title: 'Plazas', icon: 'ion-beer', sref: 'plazas' },
            { title: 'Vendors', icon: 'ion-pricetags', sref: 'vendors' },
            { title: 'Map', icon: 'ion-ios-location-outline', sref: 'map' },
            { title: 'FAQ', icon: 'ion-ios-checkmark-outline', sref: 'faq' },
            { title: 'Contest', icon: 'ion-happy-outline', sref: 'contest' },
            { title: 'Donate', icon: 'ion-cash', sref: 'donate' },
            { title: 'Media', icon: 'ion-pound', subtitle:'#shinetogether', sref: 'media' },
            { title: 'Sponsors and Partners', icon: 'ion-android-contacts', sref: 'sponsors' }//,
           // { title: 'Go back', icon: 'ion-arrow-return-right', sref: '', link: 'mainCtrl.toggle()' }
        ];
        this.name = "latincouver"; 
        this.obj = "app"; 
    }
    toggleLeft() {
        this.$ionicSideMenuDelegate.toggleLeft();
    }
}
HomeController.$inject = ['$state', '$scope', '$ionicSideMenuDelegate'];
export default HomeController;
