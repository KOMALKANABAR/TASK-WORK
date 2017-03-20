//<link rel="stylesheet" type="text/css" href="directive.css">

var app = angular.module('module', []);


app.controller('dirController', function($scope, $window, $http) {
    console.log('heya');

    console.log($scope.files);

    $scope.files = [];
          });


// .directive('ngFiles', ['$parse', function($parse) {


app.directive('fileDropZone', function()
 {
    console.log('hello');
    return {
        restrict: 'E',

        scope: {
            fileDisplay: '='
        },

        templateUrl: 'templatelink.html',

        link: function(scope, element, attributes)
        {



            element.bind('dragover', function(e) {
                console.log('dragover');
                if (e != null) {
                    e.preventDefault();
                }
                e.dataTransfer.effectAllowed = "copy";
                //element.attr('class', file-drop-zone-over);
            });

            element.bind('dragenter', function(e) {
                console.log('dragenter');
                if (e != null) {
                    e.preventDefault();
                }
                e.dataTransfer.effectAllowed = "copy";
                // element.attr('class', file-drop-zone-over);
            });


            element.bind('drop', function(e) {
                console.log('drop');
                //element.attr('class', file-drop-zone);
                if (e != null) {
                    e.preventDefault();
                }

                var fileObjectArray = [];


                angular.forEach(e.dataTransfer.files, function(file) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        scope.$apply(function() {
                            var newFilePreview = e.target.result;
                            var newFileName = file.name;
                            var newFileSize = file.size;

                            var fileObject = {
                                file: file,
                                name: newFileName,
                                size: newFileSize,
                                preview: newFilePreview
                            }

                            fileObjectArray.push(fileObject);

                        });

                    }

                    reader.readAsDataURL(file);

                });

                scope.fileDisplay = fileObjectArray;
            });

            element.bind('click', function(e) 
            {
                console.log('click');

                if (e != null) 
                {
                    e.preventDefault = [];
                }

                //var fileObjectArray = [];


                scope.fileSelected = function(file)
                 {
                    console.log("heyaa");
                    scope.fileName = "File: " + file.files[0].name;
                    console.log(scope.fileName);
                    if (!scope.$$phase)
                    {
                        scope.$digest();
                    }
                }
            });




         }
        }
    });







    //     $scope.fileSelected=function(input){
    //     	console.log("heyaa");
    //  			$scope.fileName = "File: " + input.files[0].name;
    //  			console.log($scope.fileName);
    //  			if(!$scope.$$phase)
    //  			{
    //  				$scope.$digest();
    // 	}
    // }

    // var formdata = new FormData();
    //            $scope.fileselected = function($files) {
    //                angular.forEach($files, function(value, key) {
    //                    formdata.append(key, value);
    //                });
    //  