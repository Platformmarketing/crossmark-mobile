angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

// MODAL CONTROLLER
.controller('ModalCtrl', function($scope, $ionicModal) {
  $scope.contact = {
    name: 'Butters',
    info: 'The force is strong with this one'
  }

  $ionicModal.fromTemplateUrl('ibeaconModal.html', {
    scope: $scope,
    animation: 'scale-in'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})

.controller('DialogCtrl', function($scope, $cordovaDialogs) {

  function alertDismissed() {
    // do something?
  }

  $scope.alertDialog = function() {
    // Alert Dialog

    $cordovaDialogs.confirm(
      "We see you're currently in the dairy isle, we're doubling your Chobani Yogurt discount!", 
      "Limited Time Offer", 
      ["Dismiss", "Redeem Now!"]
    ).then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
    });

  }

});