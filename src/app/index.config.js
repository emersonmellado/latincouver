function config($logProvider, $ionicConfigProvider, $cordovaFacebookProvider, $cordovaInAppBrowserProvider) {
    'ngInject';

    $logProvider.debugEnabled(true);
    $ionicConfigProvider.views.transition('platform');

    var defaultOptions = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'yes'
    };

    document.addEventListener("deviceready", function () {

    $cordovaInAppBrowserProvider.setDefaultOptions(options)

    }, false);         
}

export default config;