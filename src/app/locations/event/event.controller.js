class EventController {
    constructor($scope, $ionicSideMenuDelegate, VendorsService) {
        Object.assign(this, { $scope, $ionicSideMenuDelegate,VendorsService });
        this.setupSlider();
    }
    prevSlide() {
        this.slider.sliderDelegate._slidePrev();
    }
    nextSlide() {
        this.slider.sliderDelegate._slideNext();
    }
    setupSlider() {
        this.slider = {};
        this.slider.currentPage = 1;

        this.VendorsService.getArtists().then(response => {
            var images = angular.copy(response.data);
            this.slider.images = images;
            //this.slider.images = response.data;
            this.vendorsList = response.data;
            this.slider.images.sort();
            console.log("this.slider.images", this.slider.images);
        });

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
    toggleLeft() {
        this.$ionicSideMenuDelegate.toggleLeft();
    }
}
EventController.$inject = ['$scope', '$ionicSideMenuDelegate', 'VendorsService'];
export default EventController;
