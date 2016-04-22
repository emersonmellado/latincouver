import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';

import MainController from './locations/main/main.controller';
import EventController from './locations/event/event.controller';
import SplashController from './locations/splash/splash.controller';
import IntroController from './locations/intro/intro.controller';
import HelpController from './locations/help/help.controller';

angular.module('latincouver', ['ionic', 'ui.router'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)


  .controller('SplashController', SplashController)
  .controller('IntroController', IntroController)

  .controller('MainController', MainController)
  .controller('EventController', EventController)
    
  .controller('HelpController', HelpController);
