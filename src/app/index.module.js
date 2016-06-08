import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import HomeController from './locations/home/home.controller';
import SplashController from './locations/splash/splash.controller';
import IntroController from './locations/intro/intro.controller';
import HelpController from './locations/help/help.controller';

import EventController from './locations/event/event.controller';
import MainstageController from './locations/mainstage/mainstage.controller';

angular.module('latincouver', ['ionic', 'ui.router'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)


  .controller('SplashController', SplashController)
  .controller('IntroController', IntroController)
  .controller('HelpController', HelpController)

  .controller('HomeController', HomeController)
  .controller('EventController', EventController)
  .controller('MainstageController', MainstageController); 
