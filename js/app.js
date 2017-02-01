var app = angular.module('PortfolioApp', ['ui.bootstrap','ngRoute','smoothScroll']);

app.controller('MuseumController', ['$scope','$sce', function($scope,$sce){

  $scope.isCollapsed = true;

  $scope.collapseMenu = function() {
    $scope.isCollapsed = true;
  }


  $scope.url = ""

  $scope.sites = [

    {name:'Growth Academy',
    url: $sce.trustAsResourceUrl('https://growthacademy.herokuapp.com/'),
    github: 'https://github.com/dkingdon/Growth-Academy',
    image: '../images/growth_academy.png',
    desc: 'Growth Academy is an early learning application targeted towards Pre-K and Kindergarten children teaching and reinforcing a variety of skills.  Technologies: MEAN stack application utilizing Bootstrap styling'},

    {name:'Game Break',
    url: $sce.trustAsResourceUrl('https://game-break.herokuapp.com/'),
    github: 'https://github.com/dkingdon/game_break',
    image: '../images/game-break.png',
    desc: 'Game Break is a game hub consisting of three mini games. Single page Angular app with a bootstrap style responsive design meant to be played on both web or mobile platforms.  Technologies: AJAX, jQuery, Angular, Bootstrap, Express, MongoDB, Node '},

    {name:'Trail Finder',
    url: $sce.trustAsResourceUrl('https://ba-trail-finder.herokuapp.com/'),
    github: 'https://github.com/dkingdon/project-01',
    image: '../images/trail-finder.png',
    desc: 'Application designed to help mountain bike riders new to the SF Bay area find trails to ride based on their skill level. Utilizing Google Maps API. Fully CRUD-able Express API adhering to RESTful Routes standards, using AJAX, jQuery, and  Handlebars for templating. All supported with a MongoDB database using Mongoose. Go to: /trails/admin to create and delete'},

  ]

  var temp
  $scope.getSite = function(i) {
    // console.log(i);
    $scope.url = $scope.sites[i].url;
    $scope.github = $scope.sites[i].github;
    $scope.name = $scope.sites[i].name;
    $scope.desc = $scope.sites[i].desc;
    $scope.image = $scope.sites[i].image;
      if (i === 0) {
        $('.fa-mobile').attr('style', 'visibility:hidden');
      }
      else {
        $('.fa-mobile').attr('style', 'visibility:visible');
      }
  };

  $scope.switchSize = function(screen) {
    $scope.screen = screen;
  };

}]);

app.directive("myNavscroll", ['$window', function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (!scope.scrollPosition) {
                scope.scrollPosition = 0
            }

            if (this.pageYOffset > 5) {
                scope.boolChangeClass = true;
            } else {
                scope.boolChangeClass = false;
            }
            scope.scrollPosition = this.pageYOffset;
            scope.$apply();
        });
    };
}]);
// Contact GitHub API Training Shop Blog About
