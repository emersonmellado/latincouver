class BusinessService {
    constructor($http, API) {
      Object.assign(this, {$http, API });
    }
    getBusiness() {
        return this.$http.get(this.API + 'business.json');
    }
}

BusinessService.$inject = ['$http', 'API'];
export default BusinessService;
