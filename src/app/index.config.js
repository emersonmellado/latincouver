function config($logProvider, $ionicConfigProvider, $cordovaFacebookProvider) {
    'ngInject';

    $logProvider.debugEnabled(true);
    // $ionicConfigProvider.views.maxCache(10);
    $ionicConfigProvider.views.transition('platform');
    // $ionicConfigProvider.views.forwardCache(false);
    // $ionicConfigProvider.backButton.icon('ion-ios-arrow-back');
    // $ionicConfigProvider.backButton.text('');                  // default is 'Back'
    // $ionicConfigProvider.backButton.previousTitleText(false);  // hides the 'Back' text
    // $ionicConfigProvider.templates.maxPrefetch(20);
    /*
    var appID = 116252811865421;
    var version = "v2.6"; // or leave blank and default is v2.0
    $cordovaFacebookProvider.browserInit(appID, version);    
    */
}

export default config;