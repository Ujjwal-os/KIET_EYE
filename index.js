var myApp = angular.module("myApp", ['ui.router']);
myApp.controller("LoginController", LoginController);

    function LoginController() {
        var login = this;
        // login.submit = function() {
        //     login.completed = true;
        // }
    }
myApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('firstMessage', {
        url: '/first',
        templateUrl:'html/first.html',
        controller :'firstController'
    })
    .state('thirdMessage', {
        url: '/third',
        templateUrl:'html/aboutus.html',
        controller :'thirdController'
    })
    .state('fourthMessage', {
        url: '/fourth',
        templateUrl:'html/main.html',
        controller :'fourthController'
    })
    .state('fifthMessage', {
        url: '/fifth',
        templateUrl:'html/nisus.html',
        controller :'fifthController'
    })
    .state('sixthMessage', {
        url: '/sixth',
        templateUrl:'html/contact.html',
        controller :'sixthController'
    })
    .state('root', {
        url: '/',
        templateUrl: "first.html"
    })
    $urlRouterProvider.otherwise('/');

});



myApp.controller('firstController', function($scope) {
    // $scope.a = $stateParams.a,
    // $scope.b = $stateParams.b
})
myApp.controller('secondController', function($scope) {
    // $scope.a = $stateParams.a,
    // $scope.b = $stateParams.b
})

myApp.controller('thirdController', function($scope) {
    // $scope.a = $stateParams.a,
    // $scope.b = $stateParams.b
})
myApp.controller('fourthController', function($scope) {
    // $scope.a = $stateParams.a,
    // $scope.b = $stateParams.b
})

