class SponsorsService {
    constructor($http, API) {
      Object.assign(this, {$http, API });
    }
    getSponsors() {
        return this.$http.get(this.API + 'sponsors.json');
    }
}

SponsorsService.$inject = ['$http', 'API'];
export default SponsorsService;
