angular.module("userServiceModule", ["authServiceModule"])

.factory("userService", function ($httpWithProtection, $q) {
	
	var fac = {};

    /*
    Parameter
         userModel =
         {
            userName : userName,
            password : password,
            role : "ADMIN || USER"
         }
     */
	fac.createUser = function(userModel) {
		var deferred = $q.defer();

		var request = {
			url: "http://localhost:8080/users",
            method: "POST",
			data: userModel
		};
		var http = $httpWithProtection(request).then(function(result){
            deferred.resolve(result);
        }, function(reason){
            deferred.reject(reason);
        });

		return deferred.promise;
	};

	/*
	Parameter
         passwordChangeModel =
         {
             oldPassword : "oldPassword",
             newPassword : "newPassword"
         }
	 */
	fac.changeUserPassword = function(passwordChangeModel) {

		var deferred = $q.defer();

        var request = {
            url: "http://localhost:8080/users/changepassword",
            method: "PUT",
            data: passwordChangeModel
        };
        var http = $httpWithProtection(request).then(function(result){
            deferred.resolve(result);
        }, function(reason){
            deferred.reject(reason);
        });

		return deferred.promise;
	};

    /*
    Parameter
     modifyUserModel =
        {
            userName : "userName",
            role: "ADMIN || USER",
            password: "password"
        }
     */
	fac.modifyUser = function(modifyUserModel) {
        var deferred = $q.defer();

        var request = {
            url: "http://localhost:8080/users/modifyUser",
            method: "POST",
            data: modifyUserModel
        };
        var http = $httpWithProtection(request).then(function(result){
            deferred.resolve(result);
        }, function(reason){
            deferred.reject(reason);
        });

        return deferred.promise;
	};

    /*
    Parameter
         userModel =
         {
             userName : userName,
             password : password,
             role : "ADMIN || USER"
         }

    return
        userModel =
        {
            userName : "userName",
            password : "password",
            role : "ADMIN || USER"
        }
     */
	fac.getUser = function(userModel) {
        var deferred = $q.defer();

        var request = {
            url: "http://localhost:8080/users/" + userModel.userName,
            method: "GET",
        };
        var http = $httpWithProtection(request).then(function(result){
            deferred.resolve(result);
        }, function(reason){
            deferred.reject(reason);
        });

        return deferred.promise;
	};

    /*
        return
         [
              {
              "userName" : "userName",
              "password" : "password",
              "role" : "ADMIN"
              },
              {
              "userName" : "userName2",
              "password" : "password2",
              "role" : "USER"
              }
         ]
     */
	fac.getUsers = function() {

        var deferred = $q.defer();

        var request = {
            url: "http://localhost:8080/users",
            method: "GET",
        };
        var http = $httpWithProtection(request).then(function(result){
            deferred.resolve(result);
        }, function(reason){
            deferred.reject(reason);
        });

        return deferred.promise;
	};

    return fac;
});
