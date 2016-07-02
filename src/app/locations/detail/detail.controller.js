class DetailController {
    constructor($scope, $http, $stateParams, $filter, DetailService) {
        this.$http = $http;
        //console.log("$stateParams.section", $stateParams.section);
        DetailService.getDetails($stateParams.section).then(response => {
            this.list = response.data;
            this.plazaId = $stateParams.id;
            this.selected = $filter('filter')(this.list, {
                id: this.plazaId
            })[0];            
        });
    }
    launch(url){
        window.open(url, '_system', 'location=yes');        
    }
}

DetailController.$inject = ['$scope','$http','$stateParams', '$filter', 'DetailService'];
export default DetailController;
