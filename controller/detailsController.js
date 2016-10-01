var app = angular.module('codecafeApp',[]);



app.controller('statusController',function($scope,$http){  
    $http.get('status.js').success(function(data){
        $scope.allStatus = data.status_result;
    })
});

app.controller('codeController',function($scope,$http){  
    $http.get('codeJson.js').success(function(data){
        $scope.codeValue = data.code_result;
    })
});

app.controller('analysisController',function($scope,$http){
    $http.get('analysis.js').success(function(data){
        $scope.analysisValue = data.submissions;
    })
});