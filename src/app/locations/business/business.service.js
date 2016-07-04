class BusinessController {
    constructor($http, API) {
      Object.assign(this, {$http, API });
    }
    getBusiness() {
        return this.$http.get(this.API + 'business.json');
    }
}

BusinessController.$inject = ['$http', 'API'];
export default BusinessController;
