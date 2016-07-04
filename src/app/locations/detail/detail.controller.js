class DetailController {
    constructor($scope, $http, $stateParams, $filter, DetailService, ScheduleService) {
        Object.assign(this, {$scope, $http, $stateParams, $filter, DetailService, ScheduleService});
        this.selected = "";
        this.list = "";
        this.getDetails();
    }    
    launch(url){
        window.open(url, '_system', 'location=yes');        
    }
    getDetails(){
        this.DetailService.getDetails(this.$stateParams.section).then(response => {
            this.list = response.data;
            this.plazaId = this.$stateParams.id;
            this.selected = this.$filter('filter')(this.list, {
                id: this.plazaId
            })[0];            
            //this.getSchedule();
        });        
    }
    // getSchedule(){
    //     this.ScheduleService.getSchedule().then(response => {
    //         this.selected.list_1 = this.$filter('filter')(response.data, {
    //             plaza_id: this.plazaId, day: 1
    //         });
    //         this.selected.list_2 = this.$filter('filter')(response.data, {
    //             plaza_id: this.plazaId, day: 2
    //         });
    //     });        
    // }    
}

DetailController.$inject = ['$scope','$http','$stateParams', '$filter', 'DetailService','ScheduleService'];
export default DetailController;
