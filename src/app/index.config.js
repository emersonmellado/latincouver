function config($logProvider, $ionicConfigProvider) {
    'ngInject';

    $logProvider.debugEnabled(true);
    // $ionicConfigProvider.views.maxCache(10);
    $ionicConfigProvider.views.transition('platform');
    // $ionicConfigProvider.views.forwardCache(false);
    // $ionicConfigProvider.backButton.icon('ion-ios-arrow-back');
    // $ionicConfigProvider.backButton.text('');                  // default is 'Back'
    // $ionicConfigProvider.backButton.previousTitleText(false);  // hides the 'Back' text
    // $ionicConfigProvider.templates.maxPrefetch(20);
}

export default config;
