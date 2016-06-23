class PlazasController {
    constructor($scope, $http) {
        this.$http = $http;
        this.getPlazas().then(response => {
            this.list = response.data;
        });
    }
    getPlazas() {
        return this.$http.get('app/json/plazas.json');
    }

}

PlazasController.$inject = ['$scope', '$http'];
export default PlazasController;
