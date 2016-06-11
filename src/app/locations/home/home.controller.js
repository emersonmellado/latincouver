class HomeController {
    constructor($state) {
        this.$state = $state;
        this.name = "latincouver"; 
        this.obj = "app"; 
    }
}
HomeController.$inject = ['$state'];
export default HomeController;
