import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';

import MainstageController from './locations/mainstage/mainstage.controller';
import HomeController from './locations/home/home.controller';
import SplashController from './locations/splash/splash.controller';
import IntroController from './locations/intro/intro.controller';

import EventController from './locations/event/event.controller';
import PlazasController from './locations/plazas/plazas.controller';
import EatController from './locations/event/eat.controller';
import VendorsController from './locations/vendors/vendors.controller';
import ScheduleController from './locations/schedule/schedule.controller';
import DetailController from './locations/detail/detail.controller';
import MapController from './locations/map/map.controller';
import LatinhubController from './locations/latinhub/latinhub.controller';
import BusinessController from './locations/business/business.controller';
import ContestController from './locations/contest/contest.controller';
import MediaController from './locations/media/media.controller';
import SponsorsController from './locations/sponsors/sponsors.controller';

import PlazaService from './locations/plazas/plazas.service';
import VendorsService from './locations/vendors/vendors.service';
import ScheduleService from './locations/schedule/schedule.service';
import DetailService from './locations/detail/detail.service';
import BusinessService from './locations/business/business.service';

angular.module('latincouver', ['ionic', 'ui.router', 'ngCordova'])
    .config(config)
    .config(routerConfig)

.constant('API', 'app/json/')

.run(runBlock)


.controller('SplashController', SplashController)
    .controller('IntroController', IntroController)

.controller('HomeController', HomeController)
    .controller('EventController', EventController)
    .controller('PlazasController', PlazasController)
    .controller('EatController', EatController)
    .controller('VendorsController', VendorsController)
    .controller('MainstageController', MainstageController)
    .controller('ScheduleController', ScheduleController)
    .controller('DetailController', DetailController)
    .controller('MapController', MapController)
    .controller('LatinhubController', LatinhubController)
    .controller('BusinessController', BusinessController)
    .controller('ContestController', ContestController)
    .controller('MediaController', MediaController)
    .controller('SponsorsController', SponsorsController)


.service('PlazaService', PlazaService)
    .service('DetailService', DetailService)
    .service('ScheduleService', ScheduleService)
    .service('VendorsService', VendorsService)
    .service('BusinessService', BusinessService);
