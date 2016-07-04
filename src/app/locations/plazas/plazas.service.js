class PlazaService {
    constructor($http, API) {
      Object.assign(this, {$http, API });
    }
    getPlazas() {
        return this.$http.get(this.API + 'plazas.json');
    }
}

PlazaService.$inject = ['$http', 'API'];
export default PlazaService;
