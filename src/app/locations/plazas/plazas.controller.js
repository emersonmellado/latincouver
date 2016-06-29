class PlazasController {
    constructor($scope, $http, $stateParams, $filter, PlazaService, VendorsService) {
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
            }
        });
    }
    getVendors() {
        return this.$http.get('app/json/vendors.json');
    }
}

PlazasController.$inject = ['$scope', '$http', '$stateParams', '$filter', 'PlazaService', 'VendorsService'];
export default PlazasController;
