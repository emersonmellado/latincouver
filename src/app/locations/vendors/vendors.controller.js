class VendorsController {
    constructor($scope, VendorsService) {
        VendorsService.getVendors().then(response => {
            this.vendorsList = response.data;
        });

    }
}
VendorsController.$inject = ['$scope', 'VendorsService'];
export default VendorsController;
