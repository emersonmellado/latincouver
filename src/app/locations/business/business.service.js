class BusinessController {
    constructor($http) {
        this.$http = $http;
    }
    getBusiness() {
        return this.$http.get('app/json/business.json');
    }
}

BusinessController.$inject = ['$http'];
export default BusinessController;
