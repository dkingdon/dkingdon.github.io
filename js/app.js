var app = angular.module('PortfolioApp', ['ui.bootstrap','ngRoute','smoothScroll']);

app.controller('MuseumController', ['$scope','$sce', function($scope,$sce){

  $scope.isCollapsed = true;

  $scope.collapseMenu = function() {
    $scope.isCollapsed = true;
  }


  $scope.url = ""

  $scope.sites = [

    {name:'Game Break',
    url: $sce.trustAsResourceUrl('https://peaceful-retreat-83581.herokuapp.com/'),
    github: '',
    image: '../images/game-break.png',
    desc: 'Game Break is a game hub consisting of three mini games. Single page Angular app with a bootstrap style responsive design meant to be played on both web or mobile platforms.  Technologies: AJAX, jQuery, Angular, Bootstrap, Express, MongoDB, Node '},

    {name:'Bay Area Trail Finder',
    url: $sce.trustAsResourceUrl('https://cryptic-springs-83612.herokuapp.com/'),
    github: 'https://github.com/dkingdon/project-01',
    image: '../images/trail-finder.png',
    desc: 'Application designed to help mountain bike riders new to the SF Bay area find trails to ride based on their skill level. Utilizing Google Maps API. Fully CRUD-able Express API adhering to RESTful Routes standards, using AJAX, jQuery, and  Handlebars for templating. All supported with a MongoDB database using Mongoose. Go to: /trails/admin to create and delete'},


    // {name:'TBD',
    // url: $sce.trustAsResourceUrl('#'),
    // github: '#',
    // image: '#',
    // desc: '#'}

  ]

  $scope.getSite = function(i) {
    console.log($scope.sites[i].url);
    $scope.url = $scope.sites[i].url;
    $scope.github = $scope.sites[i].github;
    $scope.name = $scope.sites[i].name;
    $scope.desc = $scope.sites[i].desc;
    $scope.image = $scope.sites[i].image;
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
