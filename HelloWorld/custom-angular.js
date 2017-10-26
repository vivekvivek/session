/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//defining a facade definition
var module = (function() {
    
    var angularObj = angular.module("customerModule", ["ngRoute"]);
    var _private = {
        //function to initialize the angular application & pass default datato view
        initApplication: function(){
            
            angularObj.controller("employeeController",function($scope) {
                $scope.customerArray = [];
                if(localStorage.getItem("customers_list") != null){
                    var list = JSON.parse(localStorage.getItem("customers_list"));
                    $scope.customerArray = list;
                }

                $scope.add = function(customer){
                    var customerObj = angular.element(document.getElementById("cust-username"));      
                    $scope.customerDetails = customerObj.val().trim();
                    if($scope.customerDetails.length != 0) {
                        $scope.isExist = $scope.customerArray.filter((customer) => customer === $scope.customerDetails)[0];
                        if(typeof($scope.isExist) !== "undefined") {
                            document.getElementById("validationMsg").innerHTML = "Username already exists";
                            return false;
                        }
                        document.getElementById("validationMsg").innerHTML = "";
                        _private.storeData($scope, $scope.customerDetails);
                        customerObj.val('');
                    } else {
                        document.getElementById("validationMsg").innerHTML = "Field is mandatory";
                        return false;
                    }
                }
                
                $scope.initAdmin = function() {
                    angularObj.controller("adminController", function($scope){
                        console.log('inside admin controller');
                    });
                }
                
                $scope.clearData = function() {
                    var response = confirm("Sure to delete all data ?");
                    if(response)_private.clearData();
                }
            });
            
            angularObj.config([ '$routeProvider', function($routeProvider)
            {
              $routeProvider
                .when('/',
                {
                   templateUrl : 'main.html'
                })
               .when('/admin',
               {
                  templateUrl : 'admin.html'
               })
               .when('/development',
               {
                  templateUrl : 'development.html'
               }).otherwise({
                 redirectTo : '/'
              });
            }]);
        },
        
        //function to store added customer data in local storage
        storeData: function($scope, newCustomer){
            
            if (typeof(Storage) !== "undefined") {
                $scope.customerArray = [];
                
                if(localStorage.getItem("customers_list") != null){
                    var list = JSON.parse(localStorage.getItem("customers_list"));
                    $scope.customerArray = list;
                }
                $scope.customerArray.push(newCustomer);
                localStorage.setItem("customers_list", JSON.stringify($scope.customerArray));
            }
        },
        //function to clear all local storage data
        clearData: function(){
            localStorage.clear();
            location.href = "";
        }
    };
    return {
        facade : function( args ) {
            console.log(args);
            if (args.functionCall == 'initApplication' ) {
                _private.initApplication();
            } else if (args.functionCall == 'initAdmin' ) {
                _private.initAdmin();
            }
        }
    };
}());

module.facade({functionCall: "initApplication", args:{}});
