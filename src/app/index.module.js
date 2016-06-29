import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import MainstageController from './locations/mainstage/mainstage.controller';
import HomeController from './locations/home/home.controller';
import SplashController from './locations/splash/splash.controller';
import IntroController from './locations/intro/intro.controller';
import HelpController from './locations/help/help.controller';

import EventController from './locations/event/event.controller';
import PlazasController from './locations/plazas/plazas.controller';
import EatController from './locations/event/eat.controller';
import VendorsController from './locations/vendors/vendors.controller';
import ScheduleController from './locations/schedule/schedule.controller';


import PlazaService from './locations/plazas/plazas.service';
import VendorsService from './locations/vendors/vendors.service';
import ScheduleService from './locations/schedule/schedule.service';

angular.module('latincouver', ['ionic', 'ui.router'])
    .config(config)

.config(routerConfig)

.run(runBlock)


.controller('SplashController', SplashController)
    .controller('IntroController', IntroController)
    .controller('HelpController', HelpController)

.controller('HomeController', HomeController)
    .controller('EventController', EventController)
    .controller('PlazasController', PlazasController)
    .controller('EatController', EatController)
    .controller('VendorsController', VendorsController)
    .controller('MainstageController', MainstageController)
    .controller('ScheduleController', ScheduleController)


.service('PlazaService', PlazaService)
    .service('ScheduleService', ScheduleService)
    .service('VendorsService', VendorsService);
