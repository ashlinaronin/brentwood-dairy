brentwoodDairy.controller('CartCtrl', function CartCtrl($scope) {
  $scope.cart = [];

  $scope.addToCart = function(product) {
    $scope.cart.push(product);
  };

  $scope.removeFromCart = function(product) {
    var index = $scope.cart.indexOf(product);
    $scope.cart.splice(index, 1);
  }

  $scope.clearCart = function() {
    $scope.cart = [];
  }
});
