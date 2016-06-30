class DetailService {
    constructor($http) {
        this.$http = $http;

    }
    getDetails(section) {
        return this.$http.get('app/json/'+section+'.json');
    }
}

DetailService.$inject = ['$http'];
export default DetailService;
