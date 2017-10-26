/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function initiateLocalStorage(){
     
    console.log(",y name is manish singh")
 var module = angular.module('testApp', ['storageService']);
 module.controller('firstController',['$scope', 'getLocalStorage', function($scope, getLocalStorage){
         $scope.allcustomers=[];
    allcustomers = angular.fromJson(localStorage.getItem("customerData"));
console.log($scope.allcustomers);
  //get the customer list from local storage
   $scope.customerData = getLocalStorage.getCustomer(); 
   $scope.addCustomers = function(username){
       $scope.username=username;
         $scope.isExists=$scope.allcustomers.filter((customer)=> customer.customer==$scope.username)[0];
         console.log( $scope.allcustomers);
         if(typeof($scope.isExists)== 'undefined'){
         $scope.customerData.push({ 'customer': $scope.username});  
         $scope.allcustomers = getLocalStorage.updateCustomers($scope.customerData);   
         $scope.username='';
     }else{
         $scope.message="user already exists";
     }
   };
      
      
   }]);
    //Create the Storage Service Module  
    //Create getLocalStorage service to access updateCustomers and getCustomer method  
     var storageService = angular.module('storageService', []);  
            storageService.factory('getLocalStorage', function () {  
                var customerList = {};  
                return {  
                    list: customerList,  
                    updateCustomers: function (CustomersArr) {  
                        if (window.localStorage && CustomersArr) {  
                            //Local Storage to add Data  
                            localStorage.setItem("customerData", angular.toJson(CustomersArr));  
                        }  
                        customerList = CustomersArr;  
                        return customerList;
                    },  
                    getCustomer: function () {  
                        //Get data from Local Storage  
                        customerList = angular.fromJson(localStorage.getItem("customerData"));  
                        return customerList ? customerList : [];  
                    }  
                };  
  
            }); 
            var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index');

    $stateProvider

        .state('home', {
            url: '/index',
            templateUrl: 'index.html',
            controller: 'firstController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('admin', {
            url: '/admin',
            templateUrl: 'admin.html',
            controller: 'childController1'
        })
        
         .state('developer', {
            url: '/developer',
            templateUrl: 'developer.html',
            controller: 'childController2'
        });
});

}

initiateLocalStorage();  

 
         
