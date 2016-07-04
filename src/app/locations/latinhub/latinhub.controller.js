class LatinhubController {
    constructor($scope, $ionicSideMenuDelegate) {
        Object.assign(this, { $scope, $ionicSideMenuDelegate });
        this.setupSlider();
    }
    prevSlide() {
        this.slider.sliderDelegate._slidePrev();
    }
    nextSlide() {
        this.slider.sliderDelegate._slideNext();
    }
    setupSlider() {
        //this.$ionicSideMenuDelegate.toggleLeft();
        this.slider = {};
        this.slider.images = [];
        this.slider.currentPage = 0;

        this.slider.images = [{
            "image": "assets/images/latinhub/1.jpg"
        }, {
            "image": "assets/images/latinhub/2.jpg"
        }, {
            "image": "assets/images/latinhub/3.jpg"
        }];

        //some options to pass to our slider
        this.slider.sliderOptions = {
            effect: 'slide',
            initialSlide: 0,
            direction: 'horizontal',
            speed: 500,
            loop: true,
            autoplay: 5000
        };
        //create delegate reference to link with slider
        this.slider.sliderDelegate = null;
        //watch our sliderDelegate reference, and use it when it becomes available
        this.$scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
            if (newVal != null) {
                //console.log("data.sliderDelegate", data.sliderDelegate);
                this.slider.sliderDelegate.on('slideChangeEnd', function() {
                    this.slider.currentPage = this.slider.sliderDelegate.activeIndex;
                    this.$apply();
                });
            }
        });
    }
}
LatinhubController.$inject = ['$scope','$ionicSideMenuDelegate'];
export default LatinhubController;
