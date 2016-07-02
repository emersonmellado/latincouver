class BusinessController {
    constructor($filter, BusinessService) {
        BusinessService.getBusiness().then(response => {
            this.list_1 = $filter('filter')(response.data, {
                day: 1
            });
            this.list_2 = $filter('filter')(response.data, {
                day: 2
            });
        });
    }
}
BusinessController.$inject = ['$filter', 'BusinessService'];
export default BusinessController;
