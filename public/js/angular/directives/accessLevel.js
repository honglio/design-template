angular.module('app')
    .directive('accessLevel', ['Auth', function(Auth) {
        return {
            restrict: 'EA',
            link: function($scope, element, attrs) {
                var prevDisp = element.css('display'),
                    userRole, accessLevel;

                $scope.accessLevels = Auth.accessLevels;
                $scope.user = Auth.user;
                $scope.$watch('user', function(user) {
                    if (user.role) {
                        userRole = user.role;
                    }
                    updateCSS();
                }, true);

                attrs.$observe('accessLevel', function(al) {
                    if (al) {
                        accessLevel = $scope.$eval(al);
                    }
                    updateCSS();
                });

                // the executed function to change the element
                function updateCSS() {
                    if (userRole && accessLevel) {
                        if (!Auth.authorize(accessLevel, userRole)) {
                            element.css('display', 'none');
                        } else {
                            element.css('display', prevDisp);
                        }
                    }
                }
            }
        };
    }]);
