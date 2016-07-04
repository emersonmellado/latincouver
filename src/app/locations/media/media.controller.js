class MediaController{
  constructor($scope){
    Object.assign(this, { $scope });

  }
}
MediaController.inject = ['$scope'];
export default MediaController;