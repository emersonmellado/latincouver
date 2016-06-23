class EventController {
    constructor($scope, $ionicSideMenuDelegate) {
        Object.assign(this, { $scope, $ionicSideMenuDelegate});
        this.setupSlider();
    }
    prevSlide(){
        this.slider.sliderDelegate._slidePrev();
    }    
    nextSlide(){
        this.slider.sliderDelegate._slideNext();
    }
    setupSlider(){
        //this.$ionicSideMenuDelegate.toggleLeft();
        this.slider = {};
        this.slider.images = [];
        this.slider.currentPage = 0;
        
        this.slider.images = [ 
            { 
                "image" : "assets/images/home/carnaval_delsol.jpg"
            },
            { 
                "image" : "assets/images/home/latin_america.jpg"
            },
            { 
                "image" : "assets/images/home/expoplaza_latina.jpg"
            }
        ];
            
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

        // $scope.swiperOptions = {
        //     /* Whatever options */
        //     effect: 'slide',
        //     initialSlide: 0,
        //     /* Initialize a scope variable with the swiper */
        //     onInit: function(swiper){
        //         $scope.swiper = swiper;
        //     },
        //     onSlideChangeEnd: function(swiper){
        //         console.log('The active index is ' + swiper.activeIndex);
        //     }
        // };
    }
    toggleLeft() {
        this.$ionicSideMenuDelegate.toggleLeft();
    }
}
EventController.$inject = ['$scope', '$ionicSideMenuDelegate'];
export default EventController;
