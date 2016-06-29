class PlazasController {
    constructor($scope, $http, $stateParams, $filter, PlazaService, ScheduleService, VendorsService) {
        this.$http = $http;
        PlazaService.getPlazas().then(response => {
            this.list = response.data;
            this.plazaId = $stateParams.id;
            if (this.plazaId > 0) {
                this.selected = $filter('filter')(this.list, {
                    id: this.plazaId
                })[0];
                VendorsService.getVendors().then(response => {
                    this.vendorsList = $filter('filter')(response.data, {
                        plaza_id: this.plazaId
                    });
                });
                ScheduleService.getSchedule().then(response => {
                    this.selected.list_1 = $filter('filter')(response.data, {
                        day: 1
                    });
                    this.selected.list_2 = $filter('filter')(response.data, {
                        day: 2
                    });
                });
            }
        });
    }
}

PlazasController.$inject = ['$scope', '$http', '$stateParams', '$filter', 'PlazaService', 'ScheduleService', 'VendorsService'];
export default PlazasController;
