class SponsorsController {
  constructor($scope, $filter, $q,  SponsorsService) {
    Object.assign(this, { $scope, $filter, $q,  SponsorsService });
    this.splitLists();
  }
  splitLists() {
    let promises = [this.SponsorsService.getSponsors()];
    this.$q.all(promises).then((values) => {
      this.fullList = values[0].data;
    });
  }
}
SponsorsController.$inject = ['$scope', '$filter', '$q', 'SponsorsService'];
export default SponsorsController;
