class PlazasController {
    constructor($scope, $http, $stateParams, $filter, PlazaService, ScheduleService, VendorsService, BusinessService) {
        Object.assign(this, { $scope, $filter, $stateParams, $http, PlazaService, ScheduleService, VendorsService, BusinessService });
        this.detailMaster = 'vendors';
        this.vendorsList = "";
        this.selected = {};
        this.selected.list_1 = "";
        this.selected.list_2 = "";   

        this.init();
    }
    init(){
        this.PlazaService.getPlazas().then(response => {
            this.list = response.data;
            this.plazaId = this.$stateParams.id;
            if (this.plazaId > 0) {
                this.selected = this.$filter('filter')(this.list, {
                    id: this.plazaId
                })[0];
                this.getVendorsOrArtists();
                this.getSchedule();
                this.getBusiness();
            }
        }); 
    }
    getVendorsOrArtists(){
        this.VendorsService.getVendors().then(response => {
            this.vendorsList = this.$filter('filter')(response.data, {
                plaza_id: this.plazaId
            });                     
            if (!this.vendorsList.length){
                this.VendorsService.getArtists().then(response => {
                    this.detailMaster = 'artists';
                    this.vendorsList = this.$filter('filter')(response.data, {
                        plaza_id: this.plazaId
                    });                    
                });
            }
        });
    }
    getSchedule(){
        this.ScheduleService.getSchedule().then(response => {
            this.selected.list_1 = this.$filter('filter')(response.data, {
                plaza_id: this.plazaId, day: 1
            });
            this.selected.list_2 = this.$filter('filter')(response.data, {
                plaza_id: this.plazaId, day: 2
            });
        });        
    }
    getBusiness(){
        this.BusinessService.getBusiness().then(response => {
            this.selected.detailMaster = 'business';
            this.selected.biz = this.$filter('filter')(response.data, {
                plaza_id: this.plazaId
            });
        });        
    }    
}

PlazasController.$inject = ['$scope', '$http', '$stateParams', '$filter', 'PlazaService', 'ScheduleService', 'VendorsService', 'BusinessService'];
export default PlazasController;
