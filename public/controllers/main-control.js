(function() {
angular
  .module('eightBall')
  .controller('mainCtrl', mainCtrl)

function mainCtrl ($scope, eightBallService) {
  // $scope.test = "Hey there"
  $scope.submitQuestion = function () {
    // console.log($scope.question);
    eightBallService.getFortune()
      .then(function(fortune) {
        $scope.fortune = fortune;
        $scope.question = '';
      })
  }
}
})()
