angular.module("userServiceModule", ["authServiceModule"])

.factory("userService", function (authService, $q) {
	
	var fac = {};
	
	fac.createUser = function(userName, password) {
		var deferred = $q.defer();
//		if (!userName || !password) {
			
			var newUser = { 
				"userName" : userName, 
				"password" : password, 
				"role" : "USER" 
			};
			deferred.resolve(newUser);
			
//		} else {
//			
//			var errorObj = {
//				"message": "MOCK Missing data",
//				"statusCode": 401,
//			};
//			deferred.reject(errorObj);
//			
//		}
		return deferred.promise;
	};
	
	fac.changeUserPassword = function(newPassword, oldPassword) {
		var userWithChangedPassword = { 
			"userName" : "userName", 
			"password" : null, 
			"role" : null 
		};
		var deferred = $q.defer();
		deferred.resolve(userWithChangedPassword);
		
		return deferred.promise;
	};
	
	fac.setRole = function(username, role) {
		var deferred = $q.defer();
		deferred.resolve();
		
		return deferred.promise;
	};

	fac.getUser = function() {
		var user = { 
			"userName" : "userName", 
			"password" : "password", 
			"role" : "ADMIN" 
		};
		
		var deferred = $q.defer();
		deferred.resolve(user);
		
		return deferred.promise;	
	};
	
	fac.getUsers = function() {
		var users = [{ 
			"userName" : "userName", 
			"password" : "password", 
			"role" : "ADMIN" 
		}, {
			"userName" : "userName2", 
			"password" : "password2", 
			"role" : "USER"	
		}];
		
		var deferred = $q.defer();
		deferred.resolve(users);
		
		return deferred.promise;	
	};
	
    return fac;
});
