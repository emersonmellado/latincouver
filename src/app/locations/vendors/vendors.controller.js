class VendorsController {
  constructor($scope, $filter, $q, VendorsService, BusinessService) {
    Object.assign(this, { $scope, $filter, $q, VendorsService, BusinessService });
    this.fullList = [];
    this.splitLists();
  }
  splitLists() {
    let promises = [this.VendorsService.getVendors(), this.BusinessService.getBusiness()];
    this.$q.all(promises).then((values) => {
      this.fullList = values[0].data.concat(values[1].data);
      this.complete();
    });
  }
  complete(){
    this.vendorsList_food = this.$filter('filter')(this.fullList, {
       type: 'food'
    });      
    this.vendorsList_products = this.$filter('filter')(this.fullList, {
       type: 'products'
    });    
    this.vendorsList_nonprofit = this.$filter('filter')(this.fullList, {
       type: 'nonprofit'
    });      
  }
}
VendorsController.$inject = ['$scope', '$filter', '$q', 'VendorsService', 'BusinessService'];
export default VendorsController;
