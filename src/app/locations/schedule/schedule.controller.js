class ScheduleController {
    constructor($filter, ScheduleService) {
        // ScheduleService.getSchedule().then(response => {
        //     this.list_1 = $filter('filter')(response.data, {
        //         day: 1
        //     });
        //     this.list_2 = $filter('filter')(response.data, {
        //         day: 2
        //     });
        // });
    }
}
ScheduleController.$inject = ['$filter', 'ScheduleService'];
export default ScheduleController;
