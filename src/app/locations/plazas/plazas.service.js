class PlazaService {
    constructor($http) {
        this.$http = $http;
    }
    getPlazas() {
        return this.$http.get('app/json/plazas.json');
    }
}

PlazaService.$inject = ['$http'];
export default PlazaService;
