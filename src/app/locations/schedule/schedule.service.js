class ScheduleService {
    constructor($http, API) {
       Object.assign(this, {$http, API });
    }
    getSchedule() {
        return this.$http.get(this.API + 'schedule.json');
    }
}

ScheduleService.$inject = ['$http', 'API'];
export default ScheduleService;
