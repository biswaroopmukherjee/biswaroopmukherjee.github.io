(function() {


  var app = angular.module('ocr', []);

app.controller('HomeController', ['$scope', function($scope){


	  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("v7J4chVpUPGflXdcdGZF2WR6AD2lwmnMd0GOSm92",
                   "9c4bvLaZWziWIQMwYd76Of42IqdNeJhcZ3hIxKko");


  var User = Parse.Object.extend("User");

  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);


   	var newUser = new User();

    newUser.save({
      username : angular.copy(user.name),
      email : angular.copy(user.email),
      password : angular.copy(user.password)
      }, {
        success: function(user) {
        // The object was saved successfully.
  		  alert('New object created with objectId: ' + newUser.id);
      },
       error: function(user, error) {
  		  // The save failed.
   		 // error is a Parse.Error with an error code and message.
   		 alert('Failed to create new object,')
      }
    });
  };

  $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

   $scope.reset();


}]);


app.controller('fbController',function($scope){

    // Initialize Parse with your Parse application javascript keys
  Parse.initialize("v7J4chVpUPGflXdcdGZF2WR6AD2lwmnMd0GOSm92",
                   "9c4bvLaZWziWIQMwYd76Of42IqdNeJhcZ3hIxKko");

  $scope.fblogin = function(){

  Parse.FacebookUtils.logIn(null, {
  success: function(user) {
    if (!user.existed()) {
      alert("User signed up and logged in through Facebook!");
    } else {
      alert("User logged in through Facebook!");
    }
    location.href = "welcome";
  },
  error: function(user, error) {
    alert("User cancelled the Facebook login or did not fully authorize.");
  }
  });
  

  };
 });


  var receiptImages = 
    { name: 'image1',
      size: 300
	};

})();
