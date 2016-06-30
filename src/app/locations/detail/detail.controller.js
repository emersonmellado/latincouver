class DetailController {
    constructor($stateParams, $filter, DetailService) {
        this.$http = $http;
        DetailService.getDetails($stateParams.section).then(response => {
            this.list = response.data;
            this.plazaId = $stateParams.id;
            this.selected = $filter('filter')(this.list, {
                id: this.plazaId
            })[0];            
        });
    }
}

DetailController.$inject = ['$stateParams', '$filter', 'DetailService'];
export default DetailController;
