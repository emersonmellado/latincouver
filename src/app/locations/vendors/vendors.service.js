class VendorsService {
    constructor($http, API) {
      Object.assign(this, {$http, API });
    }
    getVendors() {
        return this.$http.get(this.API + 'vendors.json');
    }
    getArtists() {
        return this.$http.get(this.API + 'artists.json');
    }    
}

VendorsService.$inject = ['$http', 'API'];
export default VendorsService;

