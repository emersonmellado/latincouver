class VendorsService {
    constructor($http) {
        this.$http = $http;
    }
    getVendors() {
        return this.$http.get('app/json/vendors.json');
    }
    getArtists() {
        return this.$http.get('app/json/artists.json');
    }    
}

VendorsService.$inject = ['$http'];
export default VendorsService;
