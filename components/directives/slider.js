var sliderApp = angular.module('HMZAdminApp');

sliderApp.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {},
    templateUrl: 'templates/templateurl.html'
  };
  
});

