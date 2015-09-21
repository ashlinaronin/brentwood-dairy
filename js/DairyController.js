brentwoodDairy.controller('DairyCtrl', function DairyCtrl($scope) {
  // Manually populate products for now
  $scope.products = [
    { name: "milk", description: "regular 'old' milk", size: "half-gal", price: "2.99"},
    { name: "gouda", description: "a fine aged cheese", size: "500g", price: "8.99"},
    { name: "ice cream", description: "full-fat vanilla ice cream from cows", size: "half-gal tub", price: "5.99"},
    { name: "muenster", description: "'scary' cheese watch out! happy halloween :-)", size: "250g", price: "6.99"},
  ];

  $scope.addProduct = function() {
    $scope.products.push({
      name:        $scope.productName,
      description: $scope.productDescription,
      size:        $scope.productSize,
      price:       $scope.productPrice
    });

    // Re-set form fields
    $scope.productName = null;
    $scope.productDescription = null;
    $scope.productSize = null;
    $scope.productPrice = null;
  };

  $scope.deleteProduct = function(product) {
    var index = $scope.products.indexOf(product);
    $scope.products.splice(index, 1);
  };


  // Put cart stuff in this controller for now
  $scope.cart = [];
  $scope.totalPrice = 0;

  $scope.addToCart = function(product) {
    $scope.cart.push(
      {
        product: product,
        quantity: 1
      }
    );
    $scope.updateTotal();
  };

  $scope.removeFromCart = function(product) {
    var index = $scope.cart.indexOf(product);
    $scope.cart.splice(index, 1);
  }

  $scope.clearCart = function() {
    $scope.cart = [];
  }

  $scope.updateTotal = function() {
    $scope.totalPrice = 0;
    $scope.cart.forEach(function(item) {
      $scope.totalPrice += (item.quantity * item.product.price);
    });
  }
});
