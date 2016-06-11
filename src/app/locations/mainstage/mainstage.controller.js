class MainstageController {
    constructor($scope, $http) {
        Object.assign(this, { $http, $scope });
        this.artists = [];
        this.$http.get('app/json/mainstage.artsts.json').success(function(data) {
            this.artists = data; // get data from json
            console.log("teste", this.$scope.a);
            // angular.forEach(this.$scope.companies, function(item) {
            //     console.log(item.name);
            // })
        });
    }
}
MainstageController.$inject = ['$scope', '$http'];
export default MainstageController;
