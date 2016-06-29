class ScheduleService {
    constructor($http) {
        this.$http = $http;
    }
    getSchedule() {
        return this.$http.get('app/json/schedule.json');
    }
}

ScheduleService.$inject = ['$http'];
export default ScheduleService;
