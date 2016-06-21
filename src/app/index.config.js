function config($logProvider, $webiconProvider) {
    'ngInject';

    $logProvider.debugEnabled(true);

    $webiconProvider
        .svgSet('flat-color-icons', '//cdn.rawgit.com/icons8/flat-color-icons/v1.0.2/icon-set/icons.svg')
        .alias('flat-color-icons', 'fci')
        .icon('clock', '//cdn.rawgit.com/icons8/flat-color-icons/v1.0.2/svg/clock.svg')
        .font('f', 'custom-iconic-font custom-iconic-font-?');
}

export default config;
