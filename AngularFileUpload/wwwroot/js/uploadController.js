app.controller('UploadCtrl', ['$scope', 'Upload', function ($scope, Upload) {
    $scope.uploadFiles = function (files) {
        $scope.files = files;

        if (files) {
            Upload.upload({
                url: '',
                data: {
                    files: files
                }
            }).then(function (response) {
                console.log('Files uploaded with response', response);
            })
        }
    }
}])
