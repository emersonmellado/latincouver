class DetailService {
    constructor($http, API) {
      Object.assign(this, {$http, API });
    }
    getDetails(section) {
        return this.$http.get(this.API + section + '.json');
    }
}

DetailService.$inject = ['$http', 'API'];
export default DetailService;
