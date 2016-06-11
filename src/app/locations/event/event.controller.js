class EventController {
    constructor($ionicSideMenuDelegate) {
        Object.assign(this, {$ionicSideMenuDelegate});
    }
    toggleLeft() {
        this.$ionicSideMenuDelegate.toggleLeft();
    }
}
EventController.$inject = ['$ionicSideMenuDelegate'];
export default EventController;
