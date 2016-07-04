class SponsorsController {
  constructor($scope, $filter, $q,  BusinessService) {
    Object.assign(this, { $scope, $filter, $q,  BusinessService });
    this.splitLists();
  }
  splitLists() {
    let promises = [this.BusinessService.getBusiness()];
    this.$q.all(promises).then((values) => {
      this.fullList = values[0].data;
    });
  }
}
SponsorsController.$inject = ['$scope', '$filter', '$q', 'BusinessService'];
export default SponsorsController;
