angular.module('starter.modalController', [])
// MODAL CONTROLLER
.controller('ModalCtrl', function($scope, $ionicModal) {
  $scope.contact = {
    name: 'Butters',
    info: 'The force is strong with this one'
  }

  $ionicModal.fromTemplateUrl('ibeaconModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
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